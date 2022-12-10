from flask import Blueprint, jsonify, request
from flask_login import login_required,current_user
from app.models import db,Progress
from app.forms import ProgressForm
from app.api.auth_routes import validation_errors_to_error_messages

progress_routes = Blueprint('progresses', __name__)

@progress_routes.route('/<int:id>',methods=['POST'])
@login_required
def update_progress(id):

    form = ProgressForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    progress = Progress.query.get(id)
    print('progress@', progress)

    if progress is None:
        progress = Progress(
            enrollmentId = form.data['enrollmentId'],
            assignmentId = form.data['assignmentId'],
            completion_status = form.data['completion_status']
        )
        db.session.add(progress)
        db.session.commit()
        return progress.to_dict(), 200

    elif progress.get_enrollment().get_user().id != current_user.id:
            return {"errors": ["This isn't your progress record."]}, 401

    elif form.validate_on_submit():
            progress.completion_status = form.data['completion_status']
            db.session.add(progress)
            db.session.commit()
            return progress.to_dict(), 200
    else:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 401

@progress_routes.route('/<int:id>',methods=['DELETE'])
@login_required
def delete_progress(id):
    progress = Progress.query.get(id)
    if progress is None:
        return {'errors': ["This progress was not found!"]}, 404
    if current_user.profile != 'Admin':
        return {'errors': ["Only admins can perform this action!"]}, 401
    db.session.delete(progress)
    db.session.commit()

    return {'Message': "You've successfully delete this progress!"}, 200