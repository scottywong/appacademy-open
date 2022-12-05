import { useHistory , useLocation} from 'react-router';
import { useState } from 'react';
import { Modal } from '../../../../context/Modal';
import TaskDeleteForm from '../../Forms/TaskDeleteForm';
import './AssignmentListItem.css';
import AssignmentDeleteForm from '../../Forms/AssignmentDeleteForm';

function AssignmentListItem({assignment}){

    const history = useHistory();
    const location = useLocation();
    const [showDeleteAssignmentModal,setShowDeleteAssignmentModal] = useState(false);

    return (
        <div className='AssignmentListItem-container'>
             {location.pathname.includes('/courses') && <div onClick={()=> history.push(`/learn/admin/tasks/${assignment?.Task?.id}`)} className='AssignmentListItem-name'>{assignment?.Task?.title}</div>}
             {location.pathname.includes('/tasks') && <div onClick={()=> history.push(`/learn/admin/courses/${assignment?.courseId}`)} className='AssignmentListItem-name'>{assignment?.course_title}</div>}
            <div className='AssignmentListItem-btns'>
                
            <a onClick={()=> setShowDeleteAssignmentModal(true)} className="button green">
                <span className="button-inner"> Delete Assignment</span>
                <span className="button-bg green"></span>
            </a>

            {showDeleteAssignmentModal && (
                <Modal onClose={() => setShowDeleteAssignmentModal(false)}>
                    <AssignmentDeleteForm assignmentId={assignment?.id} setShowDeleteAssignmentModal={setShowDeleteAssignmentModal}  />
                </Modal>
                )}
             
            </div>
        </div>

    );
}

export default AssignmentListItem;