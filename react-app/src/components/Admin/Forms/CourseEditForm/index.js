import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchUpdateCourse} from '../../../../store/course';
import './CourseEditForm.css';
import { useParams } from 'react-router';

function CourseEditForm({course,refreshOneCourse}){

    const dispatch = useDispatch();
    const history = useHistory();
    const {courseId} = useParams();
    if(!course) history.push(`/learn/admin/courses/${courseId}`);

    const [title,setTitle] = useState(course?.title);
    const [body,setBody] = useState(course?.body);
    const [errors, setErrors] = useState([]);
   
    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            body
        };

        return dispatch(fetchUpdateCourse(payload,course?.id))
        .then(refreshOneCourse())
        .then(refreshOneCourse())
        .then(
            (res) => history.push(`/learn/admin/courses/${res.id}`)
        );
    }    

    return(

        <form className='courseEdit-container' onSubmit={onSubmit}>
        <h2 className='courseEdit-form-title'>Edit Course</h2>
        <input
        className='courseEdit-input-title'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Enter Title'
        required
        />
        <textarea
        className='courseEdit-input-title'
        type='text'
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder='Enter Body'
        required
        />

        <ul className='errorMsg'>
        {errors.map((error, idx) => (
            <li className='errors' key={idx}>
            {error}
            </li>
        ))}
        </ul>

        <div>
        <button className='courseEdit-btn courseEdit-submit-btn'>Submit</button>
        <button
        className='courseEdit-btn courseEdit-cancel-btn'
        >
        Cancel
        </button>
    </div>
    </form>


    )
}

export default CourseEditForm;