from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Task

class TaskForm(FlaskForm):
    title = StringField('title',validators=[DataRequired()])
    task_detail =  TextAreaField('task_detail')
