from flask import Blueprint, jsonify
from flask_login import login_required,current_user
from app.models import Task
task_routes = Blueprint('tasks', __name__)

@task_routes.route('/<int:id>')
@login_required
def tasks(id):
    task = Task.query.get(id)
    return task.to_dict()