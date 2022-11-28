import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchCreateEnrollment} from '../../../../store/enrollment';
import { useLocation } from 'react-router';
import './EnrollmentCreateForm.css';

function EnrollmentCreateForm({id,setShowEnrollmentModal,refreshEnrollmentList}){

    const dispatch = useDispatch();
    const history = useHistory();

    const [courseId,setCourseId] = useState(id);
    const [userId,setUserId] = useState('');
    const [errors, setErrors] = useState([]);
    const [query, setQuery] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            userId,
            courseId
        };

        return dispatch(fetchCreateEnrollment(payload))
        .then(refreshEnrollmentList())
        .then(refreshEnrollmentList())
        .then(
            (res) => history.push(`/learn/admin/courses/${courseId}`)
        );
    }    

    return(
       
    <div className='EnrollmentCreateForm-container'>
        <form className='modal-container' onSubmit={onSubmit}>
            <h2 className='modal-form-title'>Create Enrollment</h2>

            <input placeholder="Enter Post Title" onChange={event => setQuery(event.target.value)} />
        {
            // Data.filter(post => {
            // if (query === '') {
            //     return post;
            // } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            //     return post;
            // }
            // }).map((post, index) => (
            // <div className="box" key={index}>
            //     <p>{post.title}</p>
            //     <p>{post.author}</p>
            // </div>
            // ))
        }
            <input
            className='modal-input-title'
            type='text'
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            placeholder='Enter courseId'
            required
            />
            <input
            className='modal-input-title'
            type='text'
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder='Enter userId'
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