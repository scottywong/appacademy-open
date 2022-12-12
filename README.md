# **App Academy Open Clone**

This is a prototype that clones the App Academy Open, a learning management system. In this prototype, there are two user personas.

As admins, one can create customized courses and enroll students into their courses.

As a student, you will see only courses that admins have enrolled you in. You can track your progress through a course by completing learning tasks. 

View live site [here](https://aa-open.herokuapp.com).

## **Technologies Used**
For this project, I used the following technologies:

- **Backend**
    - Python
    - Flask
    - WTForms
    - SQLAlchemy
    - Alembic
    - SQLite3 (development)
    - PostgreSQL (production)
    - Heroku (deployment)
- **Frontend**
    - Javascript
    - React
    - React-Router
    - React-Redux
    - React-Quill
    - Highlight.js
    - CSS

## **To get started on your local environment**

1. Clone the repo and run `pipenv install` to install the dependencies
2. Create .env file, for example:
    ```
    SECRET_KEY=[add secret key here]
    DATABASE_URL=sqlite:///dev.db
    ```
3. Start pipenv shell `pipenv shell`
4. Migrate and seed database `flask db migrate` and `flask seed all`
5. Run flask `flask run`
6. cd into the `react-app`
7. run `npm install` to install the frontend dependencies
8. run `npm start` to start the frontend
9. go to [localhost:3000](localhost:3000) in your browser

## **Features**
- Signup
- Demo Login
- Login

### **Student Features**
- View all courses you are enrolled in
- View all assignments for an enrolled course
- Mark assignments complete/incomplete

### **Admin Features**
- Create/Edit/Delete Course
- Create/Edit/Delete Tasks
- Enroll Users in Courses
- Assign Multiple Tasks to a Course
- Assign a Task to Multiple Courses

## **Screen Shots**
### Landing Page
<img src='https://p406.p1.n0.cdn.getcloudapp.com/items/9ZuzjPbq/dc23f00c-dd34-4bbe-a322-ee09a1cf2d95.jpg?source=viewer&v=4636c1b6eea648d8904dba56885f61ae'>

### Learn Home Page (Student)
<img src='https://p406.p1.n0.cdn.getcloudapp.com/items/RBuBq781/8e9cd253-01ed-40f8-8dea-b3276c12b2de.jpg?v=2da5d5eb37d6e8e17a79e1620971064c'>

### Assignment Page (Student)
<img src='https://p406.p1.n0.cdn.getcloudapp.com/items/NQu4gb8W/bf968713-18f7-404c-9000-e8f429da15ad.jpg?v=721a4d44a2199bee7ccc1554960a74cb'>

### Course List (Admin)
<img src='https://p406.p1.n0.cdn.getcloudapp.com/items/bLuOjrWG/c3dd447f-e735-4293-aa0b-c51bbfe1c30d.jpg?v=044aa6b8b6d73fc93045e3ae95cfe6ec'>

### Task List (Admin)
<img src='https://p406.p1.n0.cdn.getcloudapp.com/items/wbuvWr27/a5489cc1-96ae-401c-a86a-9522496e91fb.jpg?v=2f03c22a5c7233282791325b29e41a1a'>

### Create Course (Admin)
<img src='https://p406.p1.n0.cdn.getcloudapp.com/items/2Nu65xnN/a58fdc94-c8cb-4bf5-b1b5-5b1566d5d626.jpg?v=962aeb54be6ee0735bde938e9c9b553b'>

### Create Task (Admin)
<img src='https://p406.p1.n0.cdn.getcloudapp.com/items/NQu4gb86/cb0f8bd4-e953-4523-809d-8c7679db746c.jpg?v=e46af76148458334de53db3357727355'>

### Course Editor (Admin)
<img src='https://p406.p1.n0.cdn.getcloudapp.com/items/9ZuzjP50/5821832c-b7ac-4f31-90cc-ce17fdaf84de.jpg?v=efa1aefc9ca7e9106ce335161d90f4b2'>

### Task Editor (Admin)
<img src='https://p406.p1.n0.cdn.getcloudapp.com/items/6quN2k6Z/27e9e813-a472-40b1-a3b6-c11333eb51a9.jpg?v=67b5c9b196bc8fdcd40ecd81909aae60'>


### Add Enrollments (Admin)
<img src='https://p406.p1.n0.cdn.getcloudapp.com/items/KounByg0/29384b43-b9c6-4a6a-8af6-284e17481f2e.jpg?v=2ca169823ffb920e4a5381ab63d172df'>

### Add Assignments (Admin)
<img src='https://p406.p1.n0.cdn.getcloudapp.com/items/v1uEelJy/04e92ce5-e2b5-4ab6-bd78-49f38c0a5545.jpg?v=38bec02ee66f3688fb7065408431b777'>

### Profile Page
<img src='https://p406.p1.n0.cdn.getcloudapp.com/items/rRu5lvrv/757a61ea-0547-440f-bf4d-3c0e72fb8ec1.jpg?v=51922c8bd02df3730030fa0efcff08eb'>