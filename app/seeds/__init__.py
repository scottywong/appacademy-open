from flask.cli import AppGroup
from .users import seed_users, undo_users
from .courses import seed_courses,undo_courses
from .tasks import seed_tasks,undo_tasks
from .enrollments import seed_enrollments,undo_enrollments
from .assignments import seed_assignments,undo_assignments
from .progress import seed_progresses,undo_progresses

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_courses()
    seed_tasks()
    seed_enrollments()
    seed_assignments()
    seed_progresses()

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_progresses()
    undo_assignments()
    undo_enrollments()
    undo_tasks()
    undo_courses()
    undo_users()