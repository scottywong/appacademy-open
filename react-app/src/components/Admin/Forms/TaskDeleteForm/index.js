import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { fetchDeleteTask } from '../../../../store/task';


function TaskDeleteForm({  taskId, setShowDeleteTaskModal, refreshTaskList }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [errors, setErrors] = useState([]);

    const onDelete = () => {
        dispatch(fetchDeleteTask(taskId))
          .then(() => setShowDeleteTaskModal(false))
          .then(refreshTaskList() )
          .then(refreshTaskList() )
          .then(history.push('/learn/admin'))
          .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
          });
    }
  return (
    <div className='modal-container'>
      <ul>{errors && errors.map((error) => <li className='errors' key={error}>{error}</li>)}</ul>
      <p className='modal-form-title'>Are you sure you want to delete this task?</p>
      <div>
        <button className='modal-btn modal-submit-btn' onClick={() => onDelete()}>Delete</button>
        <button className='modal-btn modal-cancel-btn' onClick={() => setShowDeleteTaskModal(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default TaskDeleteForm;
