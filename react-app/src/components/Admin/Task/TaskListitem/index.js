import { useHistory } from 'react-router-dom';
import './TaskListItem.css'

function TaskListItem({task}){

    const history = useHistory();

    return(
        <div className="TaskListItem-container">

        <div onClick={() => history.push(`/learn/admin/tasks/${task.id}`) } className='TaskListItem-name'>{task?.title}</div>
        <div className='TaskListItem-btns'>
            <button> Edit Task</button>
            <button onClick={()=> window.confirm('Are you sure you want to delete this item?')}> Delete Task </button>
        </div>
        </div>

    )

}

export default TaskListItem;