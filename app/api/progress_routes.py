from flask import Blueprint, jsonify, request
from flask_login import login_required,current_user
from app.models import db,Progress
from app.forms import ProgressForm
from app.api.auth_routes import validation_errors_to_error_messages

progress_routes = Blueprint('progresses', __name__)


@progress_routes.route('/<int:id>',methods=['PUT'])
@login_required
def update_progress(id):
    
    progress = Progress.query.get(id)
    if progress is None:
        return {"errors": ["can't find this progress, bully!"]}, 404

    if progress.get_enrollment().get_user().id != current_user.id:
        return {"errors": ["ain't your progress, bully!"]}, 401

    form = ProgressForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        progress.completion_status = form.data['completion_status']
        db.session.commit()
        return progress.to_dict(), 200

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401
