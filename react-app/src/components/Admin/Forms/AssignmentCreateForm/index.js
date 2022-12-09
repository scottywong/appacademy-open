import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation,useHistory } from 'react-router-dom';
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
        .then( (res) => {
            if (res && res.errors){
                setErrors(res.errors)
            } else {
                setShowAssignmentModal(false)
            }
          });
       
    }    

    return(
       
    <div className='AssignmentCreateForm-container'>
        <form className='modal-container' onSubmit={onSubmit}>
        <h2 className='modal-form-title'>Create Assignment</h2>
            <ul className='errorMsg'>
                {errors.map((error, idx) => (
                    <li className='errors' key={idx}>
                    {error}
                    </li>
                ))}
            </ul>
          
            {courseId && <Search type='task' selector={setTaskIdList} selected={taskIdList}/>}
            {taskId && <Search type='course' selector={setCourseIdList} selected={courseIdList}/>}

           

            <div>
                <button className='modal-btn modal-submit-btn'>Submit</button>
                <button
                className='modal-btn modal-cancel-btn'
                onClick={() => setShowAssignmentModal(false)}
                >
                Cancel
                </button>
            </div>
        </form>
    </div>


    )
}

export default AssignmentCreateForm;