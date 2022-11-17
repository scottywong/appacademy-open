from flask import Blueprint, jsonify
from flask_login import login_required,current_user
from app.models import Assignment
assignment_routes = Blueprint('assignments', __name__)

@assignment_routes.route('/<int:id>')
@login_required
def assignments(id):
    assignment = Assignment.query.get(id)
    return assignment.to_dict()