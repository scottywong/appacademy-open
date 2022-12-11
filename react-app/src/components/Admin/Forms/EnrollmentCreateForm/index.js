import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchCreateEnrollments} from '../../../../store/enrollment';
import { useParams } from 'react-router';
import './EnrollmentCreateForm.css';
import Search from '../../Search';

function EnrollmentCreateForm({setShowEnrollmentModal}){

    const dispatch = useDispatch();
    const history = useHistory();
    const {courseId} = useParams();

    const [theCourseId,setCourseId] = useState(courseId);
    const [userIdList,setUserIdList] = useState(new Set());
    const [errors, setErrors] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {

            course:parseInt(theCourseId),
            userid_list:Array.from(userIdList)
        }

        return dispatch(fetchCreateEnrollments(payload))
        .then( async (res) => {

            if(res.ok === false) {
              const data = await res.json()

              if (data && data.errors) setErrors(data.errors)
            } else {
                setShowEnrollmentModal(false)
            }
          });

    }    

    return(
       
    <div className='modal-container'>

        <div id='modal-close' onClick={() => setShowEnrollmentModal(false)}> <i class="fa-regular fa-circle-xmark fa-2xl"></i></div>

        <form className='modal-container' onSubmit={onSubmit}>
            <h2 className='modal-form-title'>Create Enrollment</h2>

            <ul className='errorMsg'>
            {errors.map((error, idx) => (
                <li className='errors' key={idx}>
                {error}
                </li>
            ))}
            </ul>

            <Search type='user' lookupId={courseId} selector={setUserIdList} selected={userIdList}/>

            <div className='modal-btn-container'>
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