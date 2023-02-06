
import EnrollmentDeleteForm from '../../Forms/EnrollmentDeleteForm';
import { useState } from 'react';
import { Modal } from '../../../../context/Modal';


import './EnrollmentListItem.css';

function EnrollmentListItem({enrollment}){
    const [showDeleteEnrollmentModal,setShowDeleteEnrollmentModal] = useState(false);

    return (
        <div className='EnrollmentListItem-container'>
   
        <div className='EnrollmentListItem-name'>{enrollment?.username}</div>
            <div className='EnrollmentListItem-btns'>
                
                <a onClick={()=> setShowDeleteEnrollmentModal(true)} className="button green eli-btns detail-btn">
                    <span className="button-inner detail-btn-text"> Delete Enrollment</span>
                    <span className="button-bg green"></span>
                </a>
                {showDeleteEnrollmentModal && (
                <Modal onClose={() => setShowDeleteEnrollmentModal(false)}>
                    <EnrollmentDeleteForm enrollmentId={enrollment.id} setShowDeleteEnrollmentModal={setShowDeleteEnrollmentModal} />
                </Modal>
                )}
            </div>
        </div>
        

    );
}

export default EnrollmentListItem;