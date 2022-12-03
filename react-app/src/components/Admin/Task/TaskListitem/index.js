import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TaskDeleteForm from '../../Forms/TaskDeleteForm';
import { Modal } from '../../../../context/Modal';
import './TaskListItem.css'

function TaskListItem({task}){

    const history = useHistory();
    const [showDeleteTaskModal,setShowDeleteTaskModal] = useState(false);
    
    return(
        <div className="TaskListItem-container">

        <div onClick={() => history.push(`/learn/admin/tasks/${task.id}`) } className='TaskListItem-name'>{task?.title}</div>
        <div className='TaskListItem-btns'>

            <a onClick={()=> history.push(`/learn/admin/tasks/${task.id}/edit`)} className="button green task-btns">
                <span className="button-inner"> Edit Task</span>
                <span className="button-bg green"></span>
            </a>
            <a onClick={()=> setShowDeleteTaskModal(true)} className="button green task-btns">
                <span className="button-inner"> Delete Task</span>
                <span className="button-bg green"></span>
            </a>

            {showDeleteTaskModal && (
                <Modal onClose={() => setShowDeleteTaskModal(false)}>
                    <TaskDeleteForm taskId={task.id} setShowDeleteTaskModal={setShowDeleteTaskModal}/>
                </Modal>
                )}
          
        </div>
        </div>

    )

}

export default TaskListItem;