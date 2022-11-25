import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchCreateTask} from '../../../../store/task';
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

        return dispatch(fetchCreateTask(payload)).then(
            (res) => history.push(`/learn/admin/tasks/${res.id}`)
        );
    }    

    return (

        <form className='modal-container' onSubmit={onSubmit}>
        <h2 className='modal-form-title'>Add Task</h2>
        <input
        className='modal-input-title'
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Enter Title'
        required
        />
        <textarea
        className='modal-input-title'
        type='text'
        value={task_detail}
        onChange={(e) => setTaskDetail(e.target.value)}
        placeholder='Enter Detail'
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
        <button className='modal-btn modal-submit-btn'>Submit</button>
        <button
        className='modal-btn modal-cancel-btn'
        onClick={() => setShowTaskModal(false)}
        >
        Cancel
        </button>
    </div>
    </form>


    )
}

export default TaskCreateForm;