import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchCreateCourse} from '../../../../store/course';
import QuillEditor from '../../../QuillEditor';
import { isEmptyOrSpaces } from '../../Utils';
import './CourseCreateForm.css';

function CourseCreateForm({setShowCourseModal}){

    const dispatch = useDispatch();
    const history = useHistory();

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [errors, setErrors] = useState([]);
    const byteSize = str => new Blob([str]).size;

    const onSubmit = async (e) => {
        e.preventDefault();
        let frontEndValidation = [];

        //Front End Validation
        if(isEmptyOrSpaces(title) || isEmptyOrSpaces(body)){
            let frontEndValidation = [];
            if(isEmptyOrSpaces(title)) frontEndValidation.push(`title: This field is required.`)
            if(isEmptyOrSpaces(body)) frontEndValidation.push(`body: This field is required.`)
            return setErrors(frontEndValidation);
        }
            
        if(byteSize > 10485760  || body.length > 2000 ){
            
            frontEndValidation.push(`body: This field is too long. Please reduce length to smaller than 2000 or less than 10485760 bytes.`)
            return setErrors(frontEndValidation);
        }

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

        <div className='modal-container'>
            
            <div id='modal-close' onClick={() => setShowCourseModal(false)}> <i class="fa-regular fa-circle-xmark fa-2xl"></i></div>
        

            <h2 className='modal-form-title'>Create Course</h2>
           
            <input
            className='modal-input-title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter title'
            required
            />

            <ul className='errorMsg'>
            {errors.map((error, idx) => (
                <li className='errors' key={idx}>
                {error}
                </li>
            ))}
            </ul>

            <QuillEditor value={body} setValue={setBody}/>
            <p>Length: {body.length}</p><span> Byte Size: {byteSize(body)} </span>

            <div className='modal-btn-container'>
                <button  onClick={onSubmit} className='modal-btn modal-submit-btn'>Submit</button>
                <button
                className='modal-btn modal-cancel-btn'
                onClick={() => setShowCourseModal(false)}
                >
                Cancel
                </button>
            </div>
        </div>


    )
}

export default CourseCreateForm;