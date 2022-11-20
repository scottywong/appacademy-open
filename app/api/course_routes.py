from flask import Blueprint, jsonify
from flask_login import login_required,current_user
from app.models import Course,Enrollment

course_routes = Blueprint('courses', __name__)

@course_routes.route('/<int:id>')
@login_required
def course(id):
    course = Course.query.get(id)
    return course.to_dict()

@course_routes.route('/')
@login_required
def all_courses():
    courses = Course.query.all()
    return {'Courses' : [course.to_dict() for course in courses]}

@course_routes.route('/<int:id>/enrollments')
@login_required
def enrollments(id):
    enrollments = Enrollment.query.filter(Enrollment.courseId==id).all()
    return {'Enrollments' : [enrollment.to_dict() for enrollment in enrollments]}
