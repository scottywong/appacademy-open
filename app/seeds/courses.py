from app.models import db, Course

def seed_courses():
    course1 = Course(
        userId=1 ,title="Week 1 - Intro to Javascript", body='Intro to Javascript'
    )
    course2 = Course(
        userId=2 ,title='Week 2 - Intermediate Functions', body='Intermediate Functions'
    )
    course3 = Course(
        userId=3 ,title='Week 3 - Node, Pair Programming, POJO, Adv. Arrays', body='Node, Pair Programming, POJO, Adv. Arrays'
    )
    course4 = Course(
        userId=1 ,title='Week 4 - Callbacks, Scope, and Closure', body='Callbacks, Scope, and Closure'
    )
    course5 = Course(
        userId=1 ,title='Week 5 - Recursion and IIFEs', body='Recursion and IIFEs'
    )
    course6 = Course(
        userId=3 ,title='Week 6 = Async, Node vs. Browser', body='Async, Node vs. Browser'
    )
    course7 = Course(
        userId=2 ,title='Week 7 = OOP', body='OOP'
    )
    course8 = Course(
        userId=1 ,title='Week 8 = Context and TDD', body='Context and TDD'
    )

    db.session.add(course1)
    db.session.add(course2)
    db.session.add(course3)
    db.session.add(course4)
    db.session.add(course5)
    db.session.add(course6)
    db.session.add(course7)
    db.session.add(course8)

    db.session.commit()

def undo_courses():
    db.session.execute('TRUNCATE courses RESTART IDENTITY CASCADE;')
    db.session.commit()