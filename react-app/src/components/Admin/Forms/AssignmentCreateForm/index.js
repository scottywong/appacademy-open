import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchCreateAssignments} from '../../../../store/assignment';
import './AssignmentCreateForm.css';
import Search from '../../Search';
import { useParams } from 'react-router';

function AssignmentCreateForm({setShowAssignmentModal}){

    const dispatch = useDispatch();
    const history = useHistory();
    const {taskId,courseId} = useParams();

    const parentType = courseId ? 'course': 'task'

    const [courseIdList,setCourseIdList] = useState(new Set());
    const [taskIdList,setTaskIdList] = useState(new Set());
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();
 
        const payload = {
            parent_type:parentType,
            course:parseInt(courseId),
            task:parseInt(taskId),
            taskid_list:Array.from(taskIdList),
            courseid_list:Array.from(courseIdList)
        };

        return dispatch(fetchCreateAssignments(payload))
        .then( async (res) => {

            if(res.ok === false) {
              const data = await res.json()

              if (data && data.errors) setErrors(data.errors)
            } else {
                setShowAssignmentModal(false)
            }
          });
       
    }    

    return(
       
    <div className='modal-container'>

        <div id='modal-close' onClick={() => setShowAssignmentModal(false)}> <i class="fa-regular fa-circle-xmark fa-2xl"></i></div>
        
        <div className='modal-container'>

        <h2 className='modal-form-title'>Add Assignments</h2>
            <ul className='errorMsg'>
                {errors.map((error, idx) => (
                    <li className='errors' key={idx}>
                    {error}
                    </li>
                ))}
            </ul>
          
            {courseId && <Search type='task' lookupId={courseId} selector={setTaskIdList} selected={taskIdList}/>}
            {taskId && <Search type='course' lookupId={taskId} selector={setCourseIdList} selected={courseIdList}/>}

            <div className='modal-btn-container'>
                <button onClick={onSubmit}className='modal-btn modal-submit-btn'>Submit</button>
                <button
                className='modal-btn modal-cancel-btn'
                onClick={() => setShowAssignmentModal(false)}
                >
                Cancel
                </button>
            </div>
        </div>
    </div>


    )
}

export default AssignmentCreateForm;