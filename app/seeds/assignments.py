from app.models import db, Assignment

def seed_assignments():
    assignment1 = Assignment(
        courseId=1 ,
        taskId=1
    )
    assignment2 = Assignment(
        courseId=2 ,
        taskId=2
    )
    assignment3 = Assignment(
        courseId=3 ,
        taskId=3
    )
    assignment4 = Assignment(
        courseId=4 ,
        taskId=4,
    )
    assignment5 = Assignment(
        courseId=5 ,
        taskId=5
    )
    assignment6 = Assignment(
        courseId=6 ,
        taskId=6
    )
    assignment7 = Assignment(
        courseId=7 ,
        taskId=7
        
    )
    assignment8 = Assignment(
        courseId=8 ,
        taskId=8
    )

    db.session.add(assignment1)
    db.session.add(assignment2)
    db.session.add(assignment3)
    db.session.add(assignment4)
    db.session.add(assignment5)
    db.session.add(assignment6)
    db.session.add(assignment7)
    db.session.add(assignment8)

    db.session.commit()

def undo_assignments():
    db.session.execute('TRUNCATE assignments RESTART IDENTITY CASCADE;')
    db.session.commit()