from flask import Blueprint, jsonify, request
from flask_login import login_required,current_user
from app.forms import AssignmentForm
from app.models import db,Assignment
assignment_routes = Blueprint('assignments', __name__)

@assignment_routes.route('/<int:id>')
@login_required
def assignments(id):
    assignment = Assignment.query.get(id)
    return assignment.to_dict()

@assignment_routes.route('/')
@login_required
def all_assignments():
    assignments = Assignment.query.all()
    return {assignment.id:assignment.to_dict() for assignment in assignments}

@assignment_routes.route('/',methods=['POST'])
@login_required
def create_assignment():
    form = AssignmentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        assignment = Assignment(
            # userId=current_user.id,
            courseId=form.data['courseId'],
            taskId=form.data['taskId']
        )

        db.session.add(assignment)
        db.session.commit()
        return assignment.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

@assignment_routes.route('/list',methods=['POST'])
@login_required
def create_assignments():
    parent_type = request.json['parent_type']
    course_id = request.json['course']
    task_id = request.json['task']
    taskid_list = request.json['taskid_list']
    courseid_list = request.json['courseid_list']

    assignment_list = []
    error_list = []

    print('request',request.json)
    # print('parent_type',parent_type)
    # print('course_id',course_id)
    # print('task_id', task_id)
    # print('taskid_list',taskid_list)
    # print('courseid_list',courseid_list)

    #loop through user_id_list and create an enrollment object
    if parent_type == 'course' and task_id == None:
        for thetask_id in taskid_list:
                    
            assignments = Assignment.query.filter(Assignment.courseId==course_id).filter(Assignment.taskId==thetask_id).all()
            print('the assignments: ',assignments)
            if len(assignments) == 0:
                assignment = Assignment(
                    courseId=course_id,
                    taskId=thetask_id
                )
                #add enrollment object to enrollment_list
                assignment_list.append(assignment)
            else:   
                error_list.append({user_id:"Duplicate assignment found for taskId!"})
    elif parent_type =='task':
        for thecourse_id in courseid_list:
            assignments = Assignment.query.filter(Assignment.taskId==task_id).filter(Assignment.coursed==thecourse_id).all()
            print('the assignments: ',assignments)
            if len(assignments) == 0:
                assignment = Assignment(
                    courseId=thecourse_id,
                    taskId=task_id
                )
                #add enrollment object to enrollment_list
                assignment_list.append(assignment)
        else:   
            error_list.append({user_id:"Duplicate assignment found for courseId!"})
    print('assignmentList', assignment_list)
    db.session.add_all(assignment_list)
    db.session.commit()
    if len(error_list) > 0:
        print('error_list: ', error_list)
        return {"errors": (error_list)}, 401
    else:
        return {assignment.id:assignment.to_dict() for assignment in assignment_list}, 200
    

@assignment_routes.route('/<int:id>',methods=['DELETE'])
@login_required
def delete_assignment(id):
    assignment = Assignment.query.get(id)
    if assignment is None:
        return {'errors': ["This assignment was not found!"]}, 404
    if current_user.profile != 'Admin':
        return {'errors': ["Only admins can perform this action!"]}, 401

    db.session.delete(assignment)
    db.session.commit()

    return {'Message': "You've successfully delete this assignment!"}, 200
