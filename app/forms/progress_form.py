from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import AnyOf, DataRequired
from app.models import Progress


class ProgressForm(FlaskForm):
    completion_status = IntegerField('completion_status',validators=[AnyOf([0,1])])
    enrollmentId = IntegerField('enrollmentId',validators=[DataRequired()])
    assignmentId = IntegerField('assignmentId',validators=[DataRequired()])