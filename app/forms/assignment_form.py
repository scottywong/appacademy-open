from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Assignment


class AssignmentForm(FlaskForm):
    courseId = IntegerField('courseId',validators=[DataRequired()])
    taskId = IntegerField('taskId',validators=[DataRequired()])