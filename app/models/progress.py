from .db import db
from .enrollment import Enrollment
# from .assignment import Assignment
from datetime import datetime


class Progress(db.Model):
    __tablename__ = 'progresses'

    id = db.Column(db.Integer, primary_key=True)
    enrollmentId = db.Column(db.Integer, db.ForeignKey('enrollments.id'))
    assignmentId = db.Column(db.Integer, db.ForeignKey('assignments.id'))
    completion_status =  db.Column(db.Integer, default=0)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, onupdate=datetime.utcnow)

    enrollment = db.relationship('Enrollment', back_populates='progresses')
    assignment = db.relationship('Assignment', back_populates='progresses')


    def get_enrollment(self):
        enrollment = Enrollment.query.filter(Enrollment.id == self.enrollmentId).first()
        return enrollment

    def to_dict(self):
        return {
            'id': self.id,
            'enrollmentId': self.enrollmentId,
            'userId': self.get_enrollment().get_user().id,
            'username': self.get_enrollment().get_user().username,
            'assignmentId': self.assignmentId,
            'completion_status': self.completion_status,
            'created_on': self.created_on,
            'updated_on': self.updated_on
        }
    