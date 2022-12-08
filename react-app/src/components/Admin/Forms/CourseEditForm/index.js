import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchGetCourseById, fetchUpdateCourse} from '../../../../store/course';
import './CourseEditForm.css';
import { useParams } from 'react-router';
import QuillEditor from '../../../QuillEditor';

function CourseEditForm( ){

    const dispatch = useDispatch();
    const history = useHistory();
    const {courseId} = useParams();

    const course = useSelector(state=>state.course);
    const [id,setId] = useState(false);
    const [title,setTitle] = useState(false);
    const [body,setBody] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect( ()=> {
        if(course.one_course){
            setId(course.one_course.id)
            setTitle(course.one_course.title);
            setBody(course.one_course.body);
        }
    },[course])

    useEffect( ()=> {
        if(!course) dispatch(fetchGetCourseById(courseId))
    },[dispatch])


    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            body
        };

        return dispatch(fetchUpdateCourse(payload,id))
        .then(async (res) => {
            console.log('its a res',res)
            if(res.ok === false) {
              const data = await res.json()
              if (data && data.errors) setErrors(data.errors)
            } else {
                    history.push(`/learn/admin/courses/${id}`)
                }
            }
        );
    }        
    
    const onCancel = async (e) => {
        e.preventDefault();
        history.push(`/learn/admin/courses/${id}`)
    }

    return id && (

        <div className='courseEdit-container'>

            <ul className='errorMsg'>
            {errors.map((error, idx) => (
                <li className='errors' key={idx}>
                {error}
                </li>
            ))}
            </ul>

            <input
            className='modal-input-title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter Title'
            required
            />

            <QuillEditor value={body} setValue={setBody}/>

            <div className='CourseEditForm-btns'>
                <button  onClick={onSubmit} className='modal-btn modal-submit-btn'>Submit</button>
                <button onClick={onCancel}
                className='modal-btn modal-submit-btn'
                >
                Cancel
                </button>
            </div>
        </div>
        )
}

export default CourseEditForm;