from .db import db
from .user import User
from datetime import datetime

class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    title = db.Column(db.String(2000),nullable=False)
    body = db.Column(db.String(2000), nullable=True)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, onupdate=datetime.utcnow)

    user = db.relationship('User', back_populates='courses')
    assignments = db.relationship('Assignment', back_populates='course')
    enrollments = db.relationship('Enrollment', back_populates='course')

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
    