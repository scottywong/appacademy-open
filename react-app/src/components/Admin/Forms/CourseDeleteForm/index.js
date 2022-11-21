import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchDeleteCourse } from '../../../../store/course';


function CourseDeleteForm({  courseId, setShowDeleteCourseModal, refreshCourseList }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [errors, setErrors] = useState([]);

    const onDelete = () => {
        dispatch(fetchDeleteCourse(courseId))
          .then(() => setShowDeleteCourseModal(false))
          .then(refreshCourseList() )
          .then(refreshCourseList() )
          .then(history.push('/learn/admin'))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }
  return (
    <div className='modal-container'>
      <ul>{errors && errors.map((error) => <li className='errors' key={error}>{error}</li>)}</ul>
      <p className='modal-form-title'>Are you sure you want to delete this course?</p>
      <div>
        <button className='modal-btn modal-submit-btn' onClick={() => onDelete()}>Delete</button>
        <button className='modal-btn modal-cancel-btn' onClick={() => setShowDeleteCourseModal(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default CourseDeleteForm;
