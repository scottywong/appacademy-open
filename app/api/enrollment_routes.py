from flask import Blueprint, jsonify, request
from flask_login import login_required,current_user
from app.models import db,Enrollment
from app.forms import EnrollmentForm
from app.api.auth_routes import validation_errors_to_error_messages

enrollment_routes = Blueprint('enrollments', __name__)

@enrollment_routes.route('/')
@login_required
def all_enrollments():
    enrollments = Enrollment.query.all()
    return {enrollment.to_dict() for enrollment in enrollments}

@enrollment_routes.route('/<int:id>')
@login_required
def enrollments(id):
    enrollment = Enrollment.query.get(id)

    if enrollment is None:
        return {'error': ['Record not found']}, 404
    return enrollment.to_dict()

@enrollment_routes.route('/list',methods=['POST'])
@login_required
def create_enrollments():

    print('request', request.json)
    course_id = request.json['course']
    userid_list = request.json['userid_list']

    enrollment_list = []
    error_list = []

    #loop through user_id_list and create an enrollment object
    for user_id in userid_list:
        enrollments = Enrollment.query.filter(Enrollment.courseId==course_id).filter(Enrollment.userId==user_id).all()
        print('the enrollments: ',enrollments)
        if len(enrollments) == 0:
            enrollment = Enrollment(
                courseId=course_id,
                userId=user_id
            )
            #add enrollment object to enrollment_list
            enrollment_list.append(enrollment)
        else:   
            error_list.append(f"Duplicate enrollment found for userId: {user_id}!")

    print('enrollment_list: ', enrollment_list)
        
    if len(error_list) > 0:
        print('error_list: ', error_list)
        return {"errors": (error_list)}, 401
    else:
        #create list of ernrollments
        db.session.add_all(enrollment_list)
        db.session.commit()
        return {enrollment.id:enrollment.to_dict() for enrollment in enrollment_list}, 200
    
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
