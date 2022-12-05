import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchCreateEnrollments} from '../../../../store/enrollment';
import { useParams } from 'react-router';
import './EnrollmentCreateForm.css';
import Search from '../../Search';
import { useEffect } from 'react';
import { fetchUsers } from '../../../../store/user';

function EnrollmentCreateForm({setShowEnrollmentModal}){

    const dispatch = useDispatch();
    const history = useHistory();
    const {courseId} = useParams();

    const [theCourseId,setCourseId] = useState(courseId);
    const [userIdList,setUserIdList] = useState(new Set());
    const [errors, setErrors] = useState([]);

    // useEffect( () =>{
    //     dispatch(fetchUsers());
    // },[dispatch])

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {

            course:parseInt(theCourseId),
            userid_list:Array.from(userIdList)
        }

        return dispatch(fetchCreateEnrollments(payload))
        .then(
            (res) => history.push(`/learn/admin/courses/${courseId}`)
        )
        .then( setShowEnrollmentModal(false));
    }    

    return(
       
    <div className='EnrollmentCreateForm-container'>

       
        <form className='modal-container' onSubmit={onSubmit}>
            <h2 className='modal-form-title'>Create Enrollment</h2>

            <Search type='user' selector={setUserIdList} selected={userIdList}/>

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
                onClick={() => setShowEnrollmentModal(false)}
                >
                Cancel
                </button>
        </div>
        </form>
    </div>


    )
}

export default EnrollmentCreateForm;