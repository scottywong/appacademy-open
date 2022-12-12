from flask import Blueprint, jsonify,request
from flask_login import login_required,current_user
from app.forms import CourseForm
from app.models import db,Course,Enrollment,Assignment
from app.api.auth_routes import validation_errors_to_error_messages
import re

course_routes = Blueprint('courses', __name__)

@course_routes.route('/')
@login_required
def all_courses():
    courses = Course.query.all()
    return  {course.id: course.to_dict() for course in courses}


@course_routes.route('/',methods=['POST'])
@login_required
def create_course():
    form = CourseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    print('form.data[body]',form.data['body'])
    if form.data['body'].isspace() or re.sub(r'<.*?>', '', form.data['body']).isspace() or re.sub(r'<.*?>', '', form.data['body'])=='':
        return {'errors': ["Body can't be an empty"]}, 402
    if form.validate_on_submit():

        course = Course(
            userId=current_user.id,
            title=form.data['title'],
            body=form.data['body']
        )

        db.session.add(course)
        db.session.commit()
        return course.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401


@course_routes.route('/<int:id>',methods=['POST'])
@login_required
def update_course(id):
    course = Course.query.get(id)
    if course is None:
        return {'errors': ["This course cannot be found!"]}, 404
    # if course.userId != current_user.id:
    #     return {'errors': ["This isn't your course!"]}, 401

    form = CourseForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    print('form.data[body]',form.data['body'])
    if form.data['body'].isspace() or re.sub(r'<.*?>', '', form.data['body']).isspace() or re.sub(r'<.*?>', '', form.data['body'])=='':
        return {'errors': ["Body can't be an empty"]}, 401

    if form.validate_on_submit():
        course.title=form.data['title']
        course.body=form.data['body']
        db.session.commit()
        return course.to_dict(), 200
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@course_routes.route('/<int:id>',methods=['DELETE'])
@login_required
def delete_course(id):
    course = Course.query.get(id)
    if course is None:
        return {'errors': ["This course was not found!"]}, 404
    if current_user.profile != 'Admin':
        return {'errors': ["Only admins can perform this action!"]}, 401

    db.session.delete(course)
    db.session.commit()

    return {'Message': "You've successfully delete this course!"}, 200

@course_routes.route('/<int:id>')
@login_required
def course(id):
    course = Course.query.get(id)
    return course.to_dict()

@course_routes.route('/<int:id>/enrollments')
@login_required
def enrollments(id):
    enrollments = Enrollment.query.filter(Enrollment.courseId==id).all()
    return {enrollment.id: enrollment.to_dict() for enrollment in enrollments}

@course_routes.route('/<int:id>/assignments')
@login_required
def assignments(id):
    assignments = Assignment.query.filter(Assignment.courseId==id).all()
    return {assignment.id: assignment.to_dict() for assignment in assignments}
