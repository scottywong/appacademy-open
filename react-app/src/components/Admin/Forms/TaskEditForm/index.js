import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchUpdateTask} from '../../../../store/task';
import QuillEditor from '../../../QuillEditor';
import './TaskEditForm.css';
import { useParams } from 'react-router';
import { fetchGetTaskById } from '../../../../store/task';
import { useEffect } from 'react';
import { isEmptyOrSpaces } from '../../Utils';

function TaskEditForm(){
    
    const dispatch = useDispatch();
    const history = useHistory();
    const {taskId} = useParams();

    const task = useSelector(state => state.task)

    const [id,setId] = useState(false);
    const [title,setTitle] = useState(false);
    const [task_detail,setTaskDetail] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loaded,setIsLoaded] = useState(false);

    useEffect( ()=> {
        dispatch(fetchGetTaskById(taskId));
        setIsLoaded(true);
    },[dispatch])

    useEffect( ()=> {
        if(loaded && task.one_task){
            setId(task.one_task.id);
            setTitle(task.one_task.title);
            setTaskDetail(task.one_task.detail);
        }
    },[task.one_task])


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

        return dispatch(fetchUpdateTask(payload,id))
        .then(async (res) => {
            if(res.ok === false) {
              const data = await res.json()
              if (data && data.errors) setErrors(data.errors)
            } else {
                    history.push(`/learn/admin/tasks/${id}`)
                }
            }
        );
    }    

    const onCancel = async (e) => {
        e.preventDefault();
        history.push(`/learn/admin/tasks/${id}`)
    }

    return loaded && id && ( 
         <div className='TaskEditForm-container'>
           

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
           <p>Length: {task_detail.length}</p>

           <div className='TaskEditForm-btns'>
                <button className='modal-btn modal-submit-btn' onClick={onSubmit}>Save</button>
                <button className='modal-btn modal-cancel-btn' onClick={onCancel}>Cancel</button>
            </div>
        </div>

    )
}

export default TaskEditForm;