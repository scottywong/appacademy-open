from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Enrollment


class EnrollmentForm(FlaskForm):
    courseId = IntegerField('courseId',validators=[DataRequired()])
    userId = IntegerField('userId',validators=[DataRequired()])