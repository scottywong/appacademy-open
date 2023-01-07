import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchCreateTask} from '../../../../store/task';
import QuillEditor from '../../../QuillEditor';
import { isEmptyOrSpaces } from '../../Utils';
import './TaskCreateForm.css';

function TaskCreateForm({setShowTaskModal}){
    
    const dispatch = useDispatch();
    const history = useHistory();
    const [title,setTitle] = useState('');
    const [task_detail,setTaskDetail] = useState('');
    const [errors, setErrors] = useState([]);

    const byteSize = str => new Blob([str]).size;

    const onSubmit = async (e) => {
        e.preventDefault();

        let frontEndValidation = [];

        //Front End Validation
        if(isEmptyOrSpaces(title) || isEmptyOrSpaces(task_detail)){
            if(isEmptyOrSpaces(title)) frontEndValidation.push(`title: This field is required.`)
            if(isEmptyOrSpaces(task_detail)) frontEndValidation.push(`task_detail: This field is required.`)
            return setErrors(frontEndValidation);
        }

        const payload = {
            title,
            task_detail
        };

        return dispatch(fetchCreateTask(payload))
        .then(async (res) => {

            if(res.ok === false) {
              const data = await res.json()
              if (data && data.errors) setErrors([data.errors])
            } else {
                return history.push(`/learn/admin/tasks/${res.id}`);
            } 
        })    
    }

    return (
        
       
       <div className='modal-container'>
        
        <div id='modal-close' onClick={() => setShowTaskModal(false)}> <i class="fa-regular fa-circle-xmark fa-2xl"></i></div>
        
        <h2 className='modal-form-title'>Add Task</h2>

            <input
            className='modal-input-title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter Title'
            required
            />
            <ul className='errorMsg'>
                {errors.map((error, idx) => (
                    <li className='errors' key={idx}>
                    {error}
                    </li>
                ))}
            </ul>

            <QuillEditor value={task_detail} setValue={setTaskDetail}/>
            <p>Length: {task_detail.length}</p><span> Byte Size: {byteSize(task_detail)} </span>


        
        <div className='modal-btn-container'>
            <button  onClick={onSubmit} className='modal-btn modal-submit-btn'>Submit</button>
            <button
            className='modal-btn modal-cancel-btn'
            onClick={() => setShowTaskModal(false)}
            >
            Cancel
            </button>
        </div>
    </div>

    )
}

export default TaskCreateForm;