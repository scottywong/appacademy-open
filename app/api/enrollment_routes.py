from flask import Blueprint, jsonify
from flask_login import login_required,current_user
from app.models import Enrollment
enrollment_routes = Blueprint('enrollments', __name__)

@enrollment_routes.route('/<int:id>')
@login_required
def enrollments(id):
    enrollment = Enrollment.query.get(id)
    return enrollment.to_dict()