from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import AnyOf
from app.models import Progress


class ProgressForm(FlaskForm):
    completion_status = IntegerField('completion_status',validators=[AnyOf([0,1])])
