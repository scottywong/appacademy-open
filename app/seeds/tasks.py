from app.models import db, Task

def seed_tasks():
    task1 = Task(
        userId=1 ,
        title="Week 1 - First Day Welcome", 
        task_detail= '''Live Lectures: 
        For this portion of the curriculum, lectures will be given live by the instructors and will be recorded and distributed. Take advantage of this to ask the lecturer questions especially during moments when you need clarification on what was just said. Don\t be afraid to ask for something to be repeated! 
        Remember to follow the asking good questions'''
    )
    task2 = Task(
        userId=2 ,
        title='Week 2 - Learning Boost', 
        task_detail= ''' Learning Boost
        Welcome to your warm-up. Please take no more than 5 minutes to answer the following questions. You may use any resource you like, including notes, documentation, and MDN.
        For questions that ask you to guess what certain code will evaluate to, do not use a repl before guessing what the answer should be.
        '''
    )
    task3 = Task(
        userId=3 ,
        title='Week 3 - Finalize Setup and Installation', 
        task_detail='''
        Finalize Setup and Installation
        Click this link to access an external resource. Return and mark as complete when you are finished.
        '''
    )
    task4 = Task(
        userId=1 ,
        title='Week 4 - Learning Boost', 
        task_detail='''
        Learning Boost
        Welcome to your warm-up. Please take no more than 5 minutes to answer the following questions. You may use any resource you like, including notes, documentation, and MDN.
        For questions that ask you to guess what certain code will evaluate to, do not use a repl before guessing what the answer should be.
        '''
    )
    task5 = Task(
        userId=1 ,
        title='Week 5 - Recursion and IIFEs', 
        task_detail='''
        Learning Boost
        Welcome to your warm-up. Please take no more than 5 minutes to answer the following questions. You may use any resource you like, including notes, documentation, and MDN.
        For questions that ask you to guess what certain code will evaluate to, do not use a repl before guessing what the answer should be.
        '''
    )
    task6 = Task(
        userId=3 ,
        title='Week 6 - Learning Boost', 
        task_detail='''
        Learning Boost
        Welcome to your warm-up. Please take no more than 5 minutes to answer the following questions. You may use any resource you like, including notes, documentation, and MDN.
        For questions that ask you to guess what certain code will evaluate to, do not use a repl before guessing what the answer should be.
        '''
    )
    task7 = Task(
        userId=2 ,
        title='Week 7 - Learning Boost', 
        task_detail='''
        Learning Boost
        Welcome to your warm-up. Please take no more than 5 minutes to answer the following questions. You may use any resource you like, including notes, documentation, and MDN.
        For questions that ask you to guess what certain code will evaluate to, do not use a repl before guessing what the answer should be.
        '''
    )
    task8 = Task(
        userId=1 ,
        title='Week 8 - Learning Boost', 
        task_detail='''
        Learning Boost
        Welcome to your warm-up. Please take no more than 5 minutes to answer the following questions. You may use any resource you like, including notes, documentation, and MDN.
        For questions that ask you to guess what certain code will evaluate to, do not use a repl before guessing what the answer should be.
        '''
    )

    db.session.add(task1)
    db.session.add(task2)
    db.session.add(task3)
    db.session.add(task4)
    db.session.add(task5)
    db.session.add(task6)
    db.session.add(task7)
    db.session.add(task8)

    db.session.commit()

def undo_tasks():
    db.session.execute('TRUNCATE tasks RESTART IDENTITY CASCADE;')
    db.session.commit()