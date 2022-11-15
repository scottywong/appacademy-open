from flask import Blueprint, jsonify
from flask_login import login_required,current_user
from app.models import Course

course_routes = Blueprint('courses', __name__)

@course_routes.route('/<int:id>')
@login_required
def course(id):
    course = Course.query.get(id)
    return course.to_dict()