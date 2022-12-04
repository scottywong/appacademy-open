import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchDeleteAssignment } from '../../../../store/assignment';
import './AssignmentDeleteForm.css';

function AssignmentDeleteForm({  assignmentId, setShowDeleteAssignmentModal }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [errors, setErrors] = useState([]);
    const goAdminHome = () => {
        history.push('/learn/admin')
    }

    const onDelete = () => {
        dispatch(fetchDeleteAssignment(assignmentId))
        .then( setShowDeleteAssignmentModal(false))
        .catch(async (res) => {
            if (res && res.errors) setErrors(res.errors);
          });
    }
  return (
    <div className='modal-container'>
      <ul>{errors && errors.map((error) => <li className='errors' key={error}>{error}</li>)}</ul>
      <p className='modal-form-title'>Are you sure you want to delete this assignment?</p>
      <div>
        <button className='modal-btn modal-submit-btn' onClick={() => onDelete()}>Delete</button>
        <button className='modal-btn modal-cancel-btn' onClick={() => setShowDeleteAssignmentModal(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default AssignmentDeleteForm;
