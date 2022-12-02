import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchDeleteAssignment } from '../../../../store/assignment';
import './AssignmentDeleteForm.css';

function AssignmentDeleteForm({  assignmentId, setShowDeleteAssignmentModal, refreshAssignmentList }) {
    const dispatch = useDispatch();
    const history = useHistory();
    // const location = useLocation();

    const [errors, setErrors] = useState([]);
    const goAdminHome = () => {
        history.push('/learn/admin')
    }

    const onDelete = () => {
        dispatch(fetchDeleteAssignment(assignmentId))
          .then(() => setShowDeleteAssignmentModal(false))
          .then(refreshAssignmentList() )
          .then(refreshAssignmentList() )
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
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
