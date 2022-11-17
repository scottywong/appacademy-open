from .db import db
from .task import Task
from .course import Course
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


    def get_coursetitle(self):
        course = Course.query.filter(Course.id == self.courseId).first()
        return course.title

    def get_task(self):
        task = Task.query.filter(Task.id == self.taskId).first()
        return task


    def to_dict(self):
        return {
            'id': self.id,
            'courseId': self.courseId,
            'course_title':self.get_coursetitle(),
            'taskId': self.taskId,
            'Task': self.get_task().to_dict(),
            'created_on': self.created_on,
            'updated_on': self.updated_on
        }
    