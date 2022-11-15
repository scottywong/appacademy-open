from .db import db
from .course import Course
from .user import User
from datetime import datetime


class Enrollment(db.Model):
    __tablename__ = 'enrollments'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    courseId = db.Column(db.Integer, db.ForeignKey('courses.id'))
    notes =  db.Column(db.String(2000), nullable=False)
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, onupdate=datetime.utcnow)

    user = db.relationship('User', back_populates='enrollments')
    course = db.relationship('Course', back_populates='enrollments')
    progresses = db.relationship('Progress',back_populates='enrollment')

    def get_user(self):
        user = User.query.filter(User.id == self.userId).first()
        return user

    def get_coursetitle(self):
        course = Course.query.filter(Course.id == self.courseId).first()
        return course.title

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'username': self.get_user().username,
            'courseId': self.courseId,
            'course_title': self.get_coursetitle(),
            'notes': self.notes,
            'created_on': self.created_on,
            'updated_on': self.updated_on
        }
    