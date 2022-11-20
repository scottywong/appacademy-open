import './AssignmentListItem.css';

function AssignmentListItem({assignment}){

    return (
        <div className='AssignmentListItem-container'>
            <div className='AssignmentListItem-name'>{assignment?.username}</div>
            <div className='AssignmentListItem-btns'>
                <button onClick={()=> window.confirm('Are you sure you want to delete this item?')}> Delete Assignment </button>
            </div>
        </div>

    );
}

export default AssignmentListItem;