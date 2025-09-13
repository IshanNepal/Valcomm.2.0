from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity

'''Creating Blueprints'''
user_bp = Blueprint('user', __name__)


@user_bp.route('/profile', methods=['GET'])
@jwt_required()
def profile():
    user = get_jwt_identity()
    return jsonify({
        'user': user,
    })
