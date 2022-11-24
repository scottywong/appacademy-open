import { useHistory } from 'react-router-dom';
import './TaskListItem.css'

function TaskListItem({task}){

    const history = useHistory();

    return(
        <div className="TaskListItem-container">

        <div onClick={() => history.push(`/learn/admin/tasks/${task.id}`) } className='TaskListItem-name'>{task?.title}</div>
        <div className='TaskListItem-btns'>

            <a onClick={()=> ''} className="button green task-btns">
                <span className="button-inner"> Edit Task</span>
                <span className="button-bg green"></span>
            </a>
            <a onClick={()=> window.confirm('Are you sure you want to delete this item?')} className="button green task-btns">
                <span className="button-inner"> Delete Task</span>
                <span className="button-bg green"></span>
            </a>
            {/* <button className='green-btn'> Edit Task</button>
            <button className='green-btn' onClick={()=> window.confirm('Are you sure you want to delete this item?')}> Delete Task </button> */}
        </div>
        </div>

    )

}

export default TaskListItem;