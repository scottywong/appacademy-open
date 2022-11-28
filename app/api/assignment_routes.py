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
    return {'Assignments' : [assignment.to_dict() for assignment in assignments]}

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
