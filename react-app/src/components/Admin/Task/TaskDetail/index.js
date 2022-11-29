import { useHistory, useLocation, useParams } from 'react-router';
import { useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetTaskById , fetchGetTasks} from '../../../../store/task';
import AssignmentList from '../../Assignment/AssignmentList';
import { Modal } from '../../../../context/Modal';
import TaskDeleteForm from '../../Forms/TaskDeleteForm';
import TaskEditForm from '../../Forms/TaskEditForm';
import './TaskDetail.css';
import { fetchGetAssignmentsByCourseId } from '../../../../store/assignment';
import AssignmentCreateForm from '../../Forms/AssignmentCreateForm';

function TaskDetail(){
    
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    console.log('pathname: ', location.pathname);
    const {taskId} = useParams();

    const task = useSelector(state => state.task?.one_task);
    const [showEditTaskModal,setShowEditTaskModal] = useState(false);
    const [showDeleteTaskModal,setShowDeleteTaskModal] = useState(false);
    const [showAssignmentModal,setShowAssignmentModal] = useState(false);
    const [showDeleteAssignmentModal,setShowDeleteAssignmentModal] = useState(false);

    const refreshTaskList = () => {
        dispatch(fetchGetTasks());
    }
    const refreshOneTask = () => {
        dispatch(fetchGetTaskById(taskId));
    }
    const refreshAssignmentList = () => {
        dispatch(fetchGetAssignmentsByCourseId(task?.courseId));
    }

    useEffect(()=> {
        dispatch(fetchGetTaskById(taskId))
        .then( dispatch(fetchGetAssignmentsByCourseId(task?.courseId)))
    },[dispatch]);

    return (

        <div className='TaskDetail-container'>
            <div className='TaskDetail-left-container'>
                <div className='TaskDetail-left'>
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
                        <a onClick={()=>setShowAssignmentModal(true)} className="button green">
                            <span className="button-inner">Add Assignment</span>
                            <span className="button-bg green"></span>
                        </a>
                        {showAssignmentModal && (
                        <Modal onClose={() => setShowAssignmentModal(false)}>
                            <AssignmentCreateForm setShowAssignmentModal={setShowAssignmentModal} refreshAssignmentList={refreshAssignmentList} />
                        </Modal>
                        )}
                    </div>
                </div>
                <div className='TaskDetail-lists'>
                <AssignmentList taskId={taskId} refreshAssignmentList={refreshAssignmentList} />
                </div>
            </div>

            <div className='TaskDetail-detail-container'>

                {location.pathname.includes('/edit') && <div className='TaskDetail'> <TaskEditForm task={task} refreshOneTask={refreshOneTask} /> </div> }
                {/* {!location.pathname.includes('/edit') && <div className='TaskDetail-detail'> {task?.detail} </div>} */}
                {!location.pathname.includes('/edit') && <div className='TaskDetail' dangerouslySetInnerHTML={{__html: task?.detail}}></div> }
              
            </div>
        </div>
    );
}

export default TaskDetail;