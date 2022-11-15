from flask import Blueprint, jsonify
from flask_login import login_required,current_user
from app.models import User,Enrollment,Progress

user_routes = Blueprint('users', __name__)

@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/enrollments')
@login_required
def my_enrollments():
    enrollments = Enrollment.query.filter(Enrollment.userId==current_user.id).all()
    return {'My Enrollments' : [enrollment.to_dict() for enrollment in enrollments]}

@user_routes.route('/progresses')
@login_required
def my_progresses():
    progresses = Progress.query.all()
    return {'My Progresses' : [progress.to_dict() for progress in progresses if progress.get_enrollment().get_user().id==current_user.id]}
