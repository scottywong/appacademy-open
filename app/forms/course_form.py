from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Course


class CourseForm(FlaskForm):
    title = StringField('title',validators=[DataRequired()])
    body =  TextAreaField('body')
