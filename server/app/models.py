from .extensions import db

class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True, nullable=False)
    name = db.Column(db.String(55), nullable=False)
    email = db.Column(db.String(55), nullable=False, unique=True)
    password = db.Column(db.String(24), nullable=False)
    
class Events(db.Model):
    id = db.Column(db.Integer, primary_key=True, unique=True, nullable=False)
    title = db.Column(db.String(55), nullable=False)
    venue = db.Column(db.String(55), nullable=False)
    description = db.Column(db.String(145))
    status = db.Column(db.String(24), nullable=False, default="Low")
    total_volunteers = db.Column(db.Integer, nullable=False)
    curr_volunteers = db.Column(db.Integer, nullable=False, default=0)
    
    