
import './EnrollmentListItem.css';

function EnrollmentListItem({enrollment}){

    console.log('the enrollment: ', enrollment)
    return (
        <div className='EnrollmentListItem-container'>
   
        <div className='EnrollmentListItem-name'>{enrollment?.username}</div>
            <div className='EnrollmentListItem-btns'>
                
                <a onClick={()=> window.confirm('Are you sure you want to delete this item?')} className="button green">
                    <span className="button-inner"> Delete Enrollment</span>
                    <span className="button-bg green"></span>
                </a>
                {/* <button onClick={()=> window.confirm('Are you sure you want to delete this item?')}> Delete Enrollment </button> */}
            </div>
        </div>
        

    );
}

export default EnrollmentListItem;