import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {fetchDeleteEnrollment} from '../../../../store/enrollment';


function EnrollmentDeleteForm({  enrollmentId, setShowDeleteEnrollmentModal }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [errors, setErrors] = useState([]);

    const onDelete = async() => {
        dispatch(fetchDeleteEnrollment(enrollmentId))
          .then(setShowDeleteEnrollmentModal(false))
          .catch(async (res) => {
           
            if (res && res.errors) setErrors(res.errors);
          });
    }
  return (
    <div className='modal-container'>
      <ul>{errors && errors.map((error) => <li className='errors' key={error}>{error}</li>)}</ul>
      <p className='modal-form-title'>Are you sure you want to delete this enrollment?</p>
      <div>
        <button className='modal-btn modal-submit-btn' onClick={() => onDelete()}>Delete</button>
        <button className='modal-btn modal-cancel-btn' onClick={() => setShowDeleteEnrollmentModal(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default EnrollmentDeleteForm;
