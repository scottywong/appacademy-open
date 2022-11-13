from app.models import db, Enrollment

def seed_enrollments():
    enrollment1_1 = Enrollment(
        userId=1 ,courseId=1, notes='Intro to Javascript'
    )
    enrollment1_2 = Enrollment(
        userId=1 ,courseId=2, notes='Intermediate Functions'
    )
    enrollment1_3 = Enrollment(
        userId=1 ,courseId=3, notes='Node, Pair Programming, POJO, Adv. Arrays'
    )
    enrollment1_4 = Enrollment(
        userId=1 ,courseId=4, notes='Callbacks, Scope, and Closure'
    )
    enrollment1_5 = Enrollment(
        userId=1 ,courseId=5, notes='Recursion and IIFEs'
    )
    enrollment1_6 = Enrollment(
        userId=1 ,courseId=6, notes='Async, Node vs. Browser'
    )
    enrollment1_7 = Enrollment(
        userId=1 ,courseId=7, notes='OOP'
    )
    enrollment1_8 = Enrollment(
        userId=1 ,courseId=8, notes='Context and TDD'
    )
    enrollment2_1 = Enrollment(
        userId=2 ,courseId=1, notes='Intro to Javascript'
    )
    enrollment2_2 = Enrollment(
        userId=2 ,courseId=2, notes='Intermediate Functions'
    )
    enrollment2_3 = Enrollment(
        userId=2 ,courseId=3, notes='Node, Pair Programming, POJO, Adv. Arrays'
    )
    enrollment2_4 = Enrollment(
        userId=2 ,courseId=4, notes='Callbacks, Scope, and Closure'
    )
    enrollment2_5 = Enrollment(
        userId=2 ,courseId=5, notes='Recursion and IIFEs'
    )
    enrollment2_6 = Enrollment(
        userId=2 ,courseId=6, notes='Async, Node vs. Browser'
    )
    enrollment2_7 = Enrollment(
        userId=2 ,courseId=7, notes='OOP'
    )
    enrollment2_8 = Enrollment(
        userId=1 ,courseId=8, notes='Context and TDD'
    )
    enrollment3_1 = Enrollment(
        userId=3 ,courseId=1, notes='Intro to Javascript'
    )
    enrollment3_2 = Enrollment(
        userId=3 ,courseId=2, notes='Intermediate Functions'
    )
    enrollment3_3 = Enrollment(
        userId=3 ,courseId=3, notes='Node, Pair Programming, POJO, Adv. Arrays'
    )
    enrollment3_4 = Enrollment(
        userId=3 ,courseId=4, notes='Callbacks, Scope, and Closure'
    )
    enrollment3_5 = Enrollment(
        userId=3 ,courseId=5, notes='Recursion and IIFEs'
    )
    enrollment3_6 = Enrollment(
        userId=3 ,courseId=6, notes='Async, Node vs. Browser'
    )
    enrollment3_7 = Enrollment(
        userId=3 ,courseId=7, notes='OOP'
    )
    enrollment3_8 = Enrollment(
        userId=3 ,courseId=8, notes='Context and TDD'
    )

    db.session.add(enrollment1_1)
    db.session.add(enrollment1_2)
    db.session.add(enrollment1_3)
    db.session.add(enrollment1_4)
    db.session.add(enrollment1_5)
    db.session.add(enrollment1_6)
    db.session.add(enrollment1_7)
    db.session.add(enrollment1_8)
    db.session.add(enrollment2_1)
    db.session.add(enrollment2_2)
    db.session.add(enrollment2_3)
    db.session.add(enrollment2_4)
    db.session.add(enrollment2_5)
    db.session.add(enrollment2_6)
    db.session.add(enrollment2_7)
    db.session.add(enrollment2_8)
    db.session.add(enrollment3_1)
    db.session.add(enrollment3_2)
    db.session.add(enrollment3_3)
    db.session.add(enrollment3_4)
    db.session.add(enrollment3_5)
    db.session.add(enrollment3_6)
    db.session.add(enrollment3_7)
    db.session.add(enrollment3_8)

    db.session.commit()

def undo_enrollments():
    db.session.execute('TRUNCATE enrollments RESTART IDENTITY CASCADE;')
    db.session.commit()