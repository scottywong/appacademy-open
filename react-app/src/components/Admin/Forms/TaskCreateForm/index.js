import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchCreateTask} from '../../../../store/task';
import QuillEditor from '../../../QuillEditor';
import './TaskCreateForm.css';

function TaskCreateForm({setShowTaskModal}){
    
    const dispatch = useDispatch();
    const history = useHistory();


    const [title,setTitle] = useState('');
    const [task_detail,setTaskDetail] = useState('');
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            task_detail
        };

        return dispatch(fetchCreateTask(payload))
        .then(async (res) => {
            if(res.ok === false) {
              const data = await res.json()
              if (data && data.errors) setErrors(data.errors)
            } else {
                return history.push(`/learn/admin/tasks/${res.id}`);
            } 
        })    
    }

    return (

       <div className='task-modal-container'>
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

        
        <div >
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