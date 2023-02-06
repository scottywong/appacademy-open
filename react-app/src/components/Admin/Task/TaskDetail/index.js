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
    const {taskId} = useParams();

    const task = useSelector(state => state.task);

    const [showDeleteTaskModal,setShowDeleteTaskModal] = useState(false);
    const [showAssignmentModal,setShowAssignmentModal] = useState(false);
    const [oneTask,setOneTask] = useState(false);
    const [loaded,setIsLoaded] = useState(false);

    useEffect(()=> {
        dispatch(fetchGetTaskById(taskId))
        setIsLoaded(true);
    },[dispatch]);

    useEffect(()=> {
        if(task?.one_task) setOneTask(task.one_task)
    },[task,task.one_task])

    useEffect(()=> {
        dispatch(fetchGetAssignmentsByCourseId(oneTask?.courseId));
    },[oneTask])

    return loaded && (oneTask && 
    (

        <div className='TaskDetail-container'>
            <div class="overlay">
                <p>Sorry, this experience is not possible below 768px.</p>
            </div>
            <div className='TaskDetail-left-container'>
                <div className='TaskDetail-left'>
                    <h1 className='TaskDetail-title'> {oneTask?.title} </h1>
                    <div className='TaskDetail-btns'>


                    {location.pathname.includes('/edit') && 
                        <a onClick={()=> history.push(`/learn/admin/tasks/${taskId}`)} className="button green detail-btn">
                            <span className="button-inner detail-btn-text">View Task</span>
                            <span className="button-bg green"></span>
                        </a>
                    }
                    {!location.pathname.includes('/edit') && 
                        <a onClick={()=> history.push(`/learn/admin/tasks/${taskId}/edit`)} className="button green detail-btn">
                            <span className="button-inner detail-btn-text">Edit Task</span>
                            <span className="button-bg green"></span>
                        </a>
                    }

                        <a onClick={() => setShowDeleteTaskModal(true)} className="button green detail-btn">
                            <span className="button-inner detail-btn-text">Delete Task</span>
                            <span className="button-bg green"></span>
                        </a>
                        {showDeleteTaskModal && (
                        <Modal onClose={() => setShowDeleteTaskModal(false)}>
                            <TaskDeleteForm taskId={oneTask.id} setShowDeleteTaskModal={setShowDeleteTaskModal} />
                        </Modal>
                        )}

            
                        <a onClick={()=>setShowAssignmentModal(true)} className="button green detail-btn">
                            <span className="button-inner detail-btn-text">Add Assignment</span>
                            <span className="button-bg green"></span>
                        </a>
                        {showAssignmentModal && (
                        <Modal onClose={() => setShowAssignmentModal(false)}>
                            <AssignmentCreateForm setShowAssignmentModal={setShowAssignmentModal} type="task"/>
                        </Modal>
                        )}
                 
                    </div>
                </div>
                <div className='TaskDetail-lists'>
                <AssignmentList taskId={taskId} />
                </div>
            </div>

            <div className='TaskDetail-detail-container'>

                {location.pathname.includes('/edit') && <div className='TaskDetail'> <TaskEditForm /> </div> }
                {!location.pathname.includes('/edit') && 
                (<div className='TaskDetail'>
                    <h1 className='TaskDetail-title'> {oneTask?.title} </h1>
                 <div  dangerouslySetInnerHTML={{__html: oneTask?.detail}}/>
                 </div>) }
              
            </div>
        </div>
    ) || 
    (!oneTask && ( <main style={{ padding: "1rem" }}>
    <p>Sorry, the page couldn't be found.</p>
    </main>))
    )
}

export default TaskDetail;