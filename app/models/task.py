from .db import db
from .user import User
# from .assignment import Assignment
from datetime import datetime

class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    title = db.Column(db.String(2000),nullable=False)
    task_detail = db.Column(db.String(2000), nullable=True)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, onupdate=datetime.utcnow)

    user = db.relationship('User', back_populates='tasks')
    assignments = db.relationship('Assignment', back_populates='task')

    def get_user(self):
        user = User.query.filter(User.id == self.userId).first()
        return user.username

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'username': self.get_user(),
            'body': self.body,
            'created_on': self.created_on,
            'updated_on': self.updated_on
        }
    