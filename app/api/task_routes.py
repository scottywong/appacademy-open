from flask import Blueprint, jsonify, request
from flask_login import login_required,current_user
from app.forms import TaskForm
from app.models import db,Task,Assignment
task_routes = Blueprint('tasks', __name__)

@task_routes.route('/<int:id>')
@login_required
def tasks(id):
    task = Task.query.get(id)
    return task.to_dict()

@task_routes.route('/')
@login_required
def all_tasks():
    tasks = Task.query.all()
    return {task.id : task.to_dict() for task in tasks}

@task_routes.route('/',methods=['POST'])
@login_required
def create_task():
    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        task = Task(
            userId=current_user.id,
            title=form.data['title'],
            task_detail=form.data['task_detail']
        )

        db.session.add(task)
        db.session.commit()
        return task.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
@task_routes.route('/<int:id>',methods=['POST'])
@login_required
def update_task(id):
    task = Task.query.get(id)
    if task is None:
        return {'errors': ["This task cannot be found!"]}, 404
    if task.userId != current_user.id:
        return {'errors': ["This isn't your task!"]}, 401

    form = TaskForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        task.title=form.data['title']
        task.task_detail=form.data['task_detail']
        db.session.commit()
        return task.to_dict(), 200
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@task_routes.route('/<int:id>',methods=['DELETE'])
@login_required
def delete_task(id):
    task = Task.query.get(id)
    if task is None:
        return {'errors': ["This task was not found!"]}, 404
    if current_user.profile != 'Admin':
        return {'errors': ["Only admins can perform this action!"]}, 401

    db.session.delete(task)
    db.session.commit()

    return {'Message': "You've successfully delete this task!"}, 200

@task_routes.route('/<int:id>/assignments')
@login_required
def assignments(id):
    assignments = Assignment.query.filter(Assignment.taskId==id).all()
    return {assignment.id: assignment.to_dict() for assignment in assignments}
