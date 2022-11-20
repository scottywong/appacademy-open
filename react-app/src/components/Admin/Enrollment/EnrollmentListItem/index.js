
import './EnrollmentListItem.css';

function EnrollmentListItem({enrollment}){

    return (
        <div className='EnrollmentListItem-container'>
   
        <div className='EnrollmentListItem-name'>{enrollment?.username}</div>
            <div className='EnrollmentListItem-btns'>
                <button onClick={()=> window.confirm('Are you sure you want to delete this item?')}> Delete Enrollment </button>
            </div>
        </div>
        

    );
}

export default EnrollmentListItem;