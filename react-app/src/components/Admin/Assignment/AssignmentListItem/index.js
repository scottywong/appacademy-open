import { useHistory , useLocation} from 'react-router';
import { useState } from 'react';
import { Modal } from '../../../../context/Modal';
import TaskDeleteForm from '../../Forms/TaskDeleteForm';
import './AssignmentListItem.css';
import AssignmentDeleteForm from '../../Forms/AssignmentDeleteForm';

function AssignmentListItem({assignment,refreshAssignmentList}){

    const history = useHistory();
    const location = useLocation();

    console.log(location.pathname);
    const [showDeleteAssignmentModal,setShowDeleteAssignmentModal] = useState(false);

    console.log('ali: ', assignment)
    return (
        <div className='AssignmentListItem-container'>
            <div onClick={()=> history.push(`/learn/admin/tasks/${assignment?.Task?.id}`)} className='AssignmentListItem-name'>{assignment?.Task?.title}</div>
            <div className='AssignmentListItem-btns'>
                
            <a onClick={()=> setShowDeleteAssignmentModal(true)} className="button green">
                <span className="button-inner"> Delete Assignment</span>
                <span className="button-bg green"></span>
            </a>

            {showDeleteAssignmentModal && (
                <Modal onClose={() => setShowDeleteAssignmentModal(false)}>
                    <AssignmentDeleteForm assignmentId={assignment?.id} setShowDeleteAssignmentModal={setShowDeleteAssignmentModal} refreshAssignmentList={refreshAssignmentList} />
                </Modal>
                )}
                {/* <button onClick={()=> window.confirm('Are you sure you want to delete this item?')}> Delete Assignment </button> */}
            </div>
        </div>

    );
}

export default AssignmentListItem;