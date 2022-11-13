from .db import db
# from .task import Task
# from .course import Course
# from .progress import Progress

from datetime import datetime

class Assignment(db.Model):
    __tablename__ = 'assignments'

    id = db.Column(db.Integer,primary_key=True)
    courseId = db.Column(db.Integer, db.ForeignKey('courses.id'))
    taskId = db.Column(db.Integer, db.ForeignKey('tasks.id'))
    created_on = db.Column(db.DateTime, default=datetime.utcnow)
    updated_on = db.Column(db.DateTime, onupdate=datetime.utcnow)

    task = db.relationship('Task', back_populates='assignments')
    course = db.relationship('Course', back_populates='assignments')
    progresses = db.relationship('Progress',back_populates='assignment')


    def to_dict(self):
        return {
            'id': self.id,
            'courseId': self.courseId,
            'taskId': self.taskId,
            'created_on': self.created_on,
            'updated_on': self.updated_on
        }
    