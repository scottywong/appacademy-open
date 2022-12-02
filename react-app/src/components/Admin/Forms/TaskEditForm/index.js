import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchUpdateTask} from '../../../../store/task';
import QuillEditor from '../../../QuillEditor';
import './TaskEditForm.css';
import { useParams } from 'react-router';
import { fetchGetTaskById } from '../../../../store/task';
import { useEffect } from 'react';


function TaskEditForm(){
    
    const dispatch = useDispatch();
    const history = useHistory();
    const {taskId} = useParams();

    const refreshOneTask = () => {
        dispatch(fetchGetTaskById(taskId));
    }

    const task = useSelector(state => state.task?.one_task);
    const [title,setTitle] = useState(task?.title);
    const [task_detail,setTaskDetail] = useState(task?.detail);
    const [errors, setErrors] = useState([]);
    const [value, setValue] =  useState("");

    console.log(task_detail)

    useEffect( ()=> {

        if(task){
            setTitle(task?.title);
            setTaskDetail(task?.detail);
        } else {
            refreshOneTask();
        }
        
    },[task])


    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            title,
            task_detail
        };

        return dispatch(fetchUpdateTask(payload,task?.id))
        .then(refreshOneTask())
        .then(refreshOneTask())
        .then(
            (res) => history.push(`/learn/admin/tasks/${res.id}`)
        );
    }    

    const onCancel = async (e) => {
        e.preventDefault();
        history.push(`/learn/admin/tasks/${task?.id}`)
    }

    return (
        <div className='TaskEditForm-container'>
            <input
            className='modal-input-title'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter Title'
            required
            />
            {task_detail && <QuillEditor value={task_detail} setValue={setTaskDetail}/>}
            <div className='TaskEditForm-btns'>
                <button className='modal-btn modal-submit-btn' onClick={onSubmit}>Save</button>
                <button className='modal-btn modal-cancel-btn' onClick={onCancel}>Cancel</button>
            </div>
        </div>

    )
}

export default TaskEditForm;


// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import {fetchCreateTask} from '../../../../store/task';
// import './TaskEditForm.css';

// function TaskEditForm({setShowEditTaskModal}){
    
//     const dispatch = useDispatch();
//     const history = useHistory();


//     const [title,setTitle] = useState('');
//     const [task_detail,setTaskDetail] = useState('');
//     const [errors, setErrors] = useState([]);

//     const onSubmit = async (e) => {
//         e.preventDefault();

//         const payload = {
//             title,
//             task_detail
//         };

//         return dispatch(fetchCreateTask(payload)).then(
//             (res) => history.push(`/learn/admin/tasks/${res.id}`)
//         );
//     }    

//     return (

//         <form className='taskEdit-container' onSubmit={onSubmit}>
//         <h2 className='taskEdit-form-title'>Add Task</h2>
//         <input
//         className='taskEdit-input-title'
//         type='text'
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder='Enter Title'
//         required
//         />
//         <textarea
//         className='taskEdit-input-title'
//         type='text'
//         value={task_detail}
//         onChange={(e) => setTaskDetail(e.target.value)}
//         placeholder='Enter Detail'
//         required
//         />

//         <ul className='errorMsg'>
//         {errors.map((error, idx) => (
//             <li className='errors' key={idx}>
//             {error}
//             </li>
//         ))}
//         </ul>

//         <div>
//         <button className='taskEdit-btn taskEdit-submit-btn'>Submit</button>
//         <button
//         className='taskEdit-btn taskEdit-cancel-btn'
//         onClick={() => setShowTaskModal(false)}
//         >
//         Cancel
//         </button>
//     </div>
//     </form>


//     )
// }

// export default TaskEditForm;