from flask import Blueprint,jsonify,request
from ...extensions import db
from ...models import Users
from flask_jwt_extended import (
  create_access_token, set_access_cookies
)

auth_bp = Blueprint('auth', __name__)
'''login'''


@auth_bp.route('/login', methods=['POST'])
def login():
   try:
        data = request.json

        if not data:
            return jsonify({'message':'No Valid JSON Found!'}), 400

        email = data.get('email', None)
        password = data.get('password', None)

        if not email or not password :
            return jsonify({'message':'Missing Email Or Password Feilds!'}), 401

        existing_user = Users.query.filter_by(email=email).first()

        if not existing_user:
            return jsonify({'message':'No user Found! Please Sign Up First!'}), 400
        
        if password != existing_user.password or email != existing_user.email:
            return jsonify({'message':'Invalid email or Password'}), 400
        
        access_token = create_access_token(identity=existing_user.name)
        resp = jsonify({'message':'sucessfully logged in the user', 'token':access_token})
        set_access_cookies(resp, access_token)  
        
        return resp, 200
   except Exception as e:
       return jsonify({'message':'server error' , 'error':str(e)}), 500


@auth_bp.route("/register", methods=["POST"])
def register():
    try: 
        data = request.json

        if not data:
            return jsonify({'message':'No Json Found!'}), 400

        if not data['username'] or not data['password'] or not data['email']:
            return jsonify({'message':'missing the required feilds'}), 400
        
        username = data['username']
        password = data['password']
        email = data['email']

        exsisting_user = Users.query.filter_by(email=email).first()

        if exsisting_user:
            return jsonify({'user already registered with this username or mail'}), 500
        
        new_user = Users(name=username, password=password, email=email)

        db.session.add(new_user)
        db.session.commit()

        access_token = create_access_token(
        identity=username,
        additional_claims={"email":email}
        )

        resp = jsonify({'message':'sucessfully created the user', 'token':access_token})
        set_access_cookies(resp, access_token)  

        return resp, 201
    
    except Exception as e:
        return jsonify({'message':'server error' , 'error':str(e)})