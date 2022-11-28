from flask import Blueprint, jsonify, request
from flask_login import login_required,current_user
from app.models import db,Enrollment
from app.forms import EnrollmentForm
enrollment_routes = Blueprint('enrollments', __name__)

@enrollment_routes.route('/<int:id>')
@login_required
def enrollments(id):
    enrollment = Enrollment.query.get(id)
    return enrollment.to_dict()


@enrollment_routes.route('/')
@login_required
def all_enrollments():
    enrollments = Enrollment.query.all()
    return {'Enrollments' : [enrollment.to_dict() for enrollment in enrollments]}


@enrollment_routes.route('/',methods=['POST'])
@login_required
def create_enrollment():
    form = EnrollmentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    
    if form.validate_on_submit():
        enrollments = Enrollment.query.filter(Enrollment.courseId==form.data['courseId']).filter(Enrollment.userId==form.data['userId']).all()

        if len(enrollments) == 0:

            enrollment = Enrollment(
                # userId=current_user.id,
                courseId=form.data['courseId'],
                userId=form.data['userId']
            )
            db.session.add(enrollment)
            db.session.commit()
            return enrollment.to_dict(), 200
        else:
            return {'errors': ["Duplicate enrollment found!"]}, 404

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

@enrollment_routes.route('/<int:id>',methods=['DELETE'])
@login_required
def delete_enrollment(id):
    enrollment = Enrollment.query.get(id)
    if enrollment is None:
        return {'errors': ["This enrollment was not found!"]}, 404
    if current_user.profile != 'Admin':
        return {'errors': ["Only admins can perform this action!"]}, 401

    db.session.delete(enrollment)
    db.session.commit()

    return {'Message': "You've successfully delete this enrollment!"}, 200
