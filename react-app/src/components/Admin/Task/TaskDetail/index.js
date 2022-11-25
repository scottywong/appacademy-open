import { useHistory, useLocation, useParams } from 'react-router';
import { useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetTaskById , fetchGetTasks} from '../../../../store/task';
import AssignmentList from '../../Assignment/AssignmentList';
import { Modal } from '../../../../context/Modal';
import TaskDeleteForm from '../../Forms/TaskDeleteForm';
import TaskEditForm from '../../Forms/TaskEditForm';
import './TaskDetail.css';

function TaskDetail(){
    
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    console.log('pathname: ', location.pathname);
    const {taskId} = useParams();

    const task = useSelector(state => state.task?.one_task);
    const [showEditTaskModal,setShowEditTaskModal] = useState(false);
    const [showDeleteTaskModal,setShowDeleteTaskModal] = useState(false);
    
    const refreshTaskList = () => {

        dispatch(fetchGetTasks());
    }
    const refreshOneTask = () => {

        dispatch(fetchGetTaskById(taskId));
    }

    useEffect(()=> {
        refreshOneTask();
    },[dispatch]);

    return (

        <div className='TaskDetail-container'>
            <h1 className='TaskDetail-title'> {task?.title} </h1>
            <div className='TaskDetail-btns'>
                <a onClick={()=> history.push(`/learn/admin/tasks/${taskId}/edit`)} className="button green">
                    <span className="button-inner">Edit Task</span>
                    <span className="button-bg green"></span>
                </a>

                <a onClick={() => setShowDeleteTaskModal(true)} className="button green">
                    <span className="button-inner">Delete Task</span>
                    <span className="button-bg green"></span>
                </a>
                {showDeleteTaskModal && (
                <Modal onClose={() => setShowDeleteTaskModal(false)}>
                    <TaskDeleteForm taskId={task.id} setShowDeleteTaskModal={setShowDeleteTaskModal} refreshTaskList={refreshTaskList} />
                </Modal>
                )}
                <a className="button green">
                    <span className="button-inner">Add Assignment</span>
                    <span className="button-bg green"></span>
                </a>
            </div>
            <div className='TaskDetail-detail-container'>
            {location.pathname.includes('/edit') && <TaskEditForm task={task} refreshOneTask={refreshOneTask} /> }
            {!location.pathname.includes('/edit') && <div className='TaskDetail-detail'> {task?.detail} </div>}
                <div className='TaskDetail-lists'>
                    <AssignmentList taskId={taskId}/>
                </div>
            </div>
        </div>
    );
}

export default TaskDetail;