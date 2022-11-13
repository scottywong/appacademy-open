from app.models import db, Progress

def seed_progresses():
    progress1_1 = Progress(
        enrollmentId=1 ,assignmentId=1, completion_status=0
    )
    progress1_2 = Progress(
        enrollmentId=2,assignmentId=2, completion_status=0
    )
    progress1_3 = Progress(
        enrollmentId=3 ,assignmentId=3, completion_status=0
    )
    progress1_4 = Progress(
        enrollmentId=4 ,assignmentId=4, completion_status=0
    )
    progress1_5 = Progress(
        enrollmentId=5 ,assignmentId=5, completion_status=0
    )
    progress1_6 = Progress(
        enrollmentId=6 ,assignmentId=6, completion_status=0
    )
    progress1_7 = Progress(
        enrollmentId=7 ,assignmentId=7, completion_status=0
    )
    progress1_8 = Progress(
        enrollmentId=8 ,assignmentId=8, completion_status=0
    )
    progress2_1 = Progress(
        enrollmentId=9 ,assignmentId=1, completion_status=0
    )
    progress2_2 = Progress(
        enrollmentId=10 ,assignmentId=2, completion_status=0
    )
    progress2_3 = Progress(
        enrollmentId=11 ,assignmentId=3, completion_status=0
    )
    progress2_4 = Progress(
        enrollmentId=12 ,assignmentId=4, completion_status=0
    )
    progress2_5 = Progress(
        enrollmentId=13 ,assignmentId=5, completion_status=0
    )
    progress2_6 = Progress(
        enrollmentId=14 ,assignmentId=6, completion_status=0
    )
    progress2_7 = Progress(
        enrollmentId=15 ,assignmentId=7, completion_status=0
    )
    progress2_8 = Progress(
        enrollmentId=16 ,assignmentId=8, completion_status=0
    )
    progress3_1 = Progress(
        enrollmentId=17 ,assignmentId=1, completion_status=0
    )
    progress3_2 = Progress(
        enrollmentId=18 ,assignmentId=2, completion_status=0
    )
    progress3_3 = Progress(
        enrollmentId=19 ,assignmentId=3, completion_status=0
    )
    progress3_4 = Progress(
        enrollmentId=20 ,assignmentId=4, completion_status=0
    )
    progress3_5 = Progress(
        enrollmentId=21 ,assignmentId=5, completion_status=0
    )
    progress3_6 = Progress(
        enrollmentId=22 ,assignmentId=6, completion_status=0
    )
    progress3_7 = Progress(
        enrollmentId=23 ,assignmentId=7, completion_status=0
    )
    progress3_8 = Progress(
        enrollmentId=24 ,assignmentId=8, completion_status=0
    )

    db.session.add(progress1_1)
    db.session.add(progress1_2)
    db.session.add(progress1_3)
    db.session.add(progress1_4)
    db.session.add(progress1_5)
    db.session.add(progress1_6)
    db.session.add(progress1_7)
    db.session.add(progress1_8)
    db.session.add(progress2_1)
    db.session.add(progress2_2)
    db.session.add(progress2_3)
    db.session.add(progress2_4)
    db.session.add(progress2_5)
    db.session.add(progress2_6)
    db.session.add(progress2_7)
    db.session.add(progress2_8)
    db.session.add(progress3_1)
    db.session.add(progress3_2)
    db.session.add(progress3_3)
    db.session.add(progress3_4)
    db.session.add(progress3_5)
    db.session.add(progress3_6)
    db.session.add(progress3_7)
    db.session.add(progress3_8)

    db.session.commit()

def undo_progresses():
    db.session.execute('TRUNCATE progresses RESTART IDENTITY CASCADE;')
    db.session.commit()