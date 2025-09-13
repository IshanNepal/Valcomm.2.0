from flask import Blueprint, jsonify, request
from ...models import Events
from flask_jwt_extended import jwt_required, get_jwt
from ...extensions import db

main_bp = Blueprint('main', __name__)

@main_bp.route('/add-event', methods=['POST'])
def add_event():
    try: 
        data = request.json

        if not data:
            return jsonify({'message':'No Valid JSON Found!'}), 400
        
        if not data['title'] or not data['venue'] or not data['status'] or not data['total_volunteers']:
            return jsonify({'message':'Missing required feilds!'}), 401
        
        new_event = Events(title=data['title'], total_volunteers=data['total_volunteers'], venue=data['venue'], status=data['status'])

        db.session.add(new_event)
        db.session.commit()
        
        return jsonify({'message':'sucessfully created the event'}), 201
    except Exception as e:
        return jsonify({'message':'server error', 'error':str(e)}), 500
    
@main_bp.route('/get-all-events')
def get_all_events():
    try: 
        events = Events.query.all()
        event_list = [{
            "id":e.id,
            "title":e.title,
            "desc":e.description,
            "venue":e.venue,
            "status":e.status,
            "total_volunteer":e.total_volunteers,
            "current_volunteer": e.curr_volunteers
        } for e in events]

        return jsonify({'message':'sucessfully fetched all events', "events":event_list}), 200
    except Exception as e:
        return jsonify({'message':'server error', 'error':str(e)}), 500