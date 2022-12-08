import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchCreateCourse} from '../../../../store/course';
import QuillEditor from '../../../QuillEditor';
import './CourseCreateForm.css';

function CourseCreateForm({setShowCourseModal}){

    const dispatch = useDispatch();
    const history = useHistory();

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [errors, setErrors] = useState([]);
   
    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            body
        };

        return dispatch(fetchCreateCourse(payload))
        .then(async (res) => {
            if(res.ok === false) {
              const data = await res.json()
              if (data && data.errors) setErrors(data.errors)
            } else {
                return history.push(history.push(`/learn/admin/courses/${res.id}`));
            } 
        })
    }    

    return(

        <form className='modal-container' onSubmit={onSubmit}>
            <h2 className='modal-form-title'>Create Course</h2>
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
            placeholder='Enter title'
            required
            />

            <QuillEditor value={body} setValue={setBody}/>
            {/* <input
            className='modal-input-title'
            type='text'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder='Enter body'
            required
            /> */}

           

            <div>
            <button className='modal-btn modal-submit-btn'>Submit</button>
            <button
            className='modal-btn modal-cancel-btn'
            onClick={() => setShowCourseModal(false)}
            >
            Cancel
            </button>
        </div>
        </form>


    )
}

export default CourseCreateForm;