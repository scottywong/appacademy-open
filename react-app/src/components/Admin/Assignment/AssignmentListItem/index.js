import { useHistory , useLocation} from 'react-router';
import './AssignmentListItem.css';

function AssignmentListItem({assignment}){

    const history = useHistory();
    const location = useLocation();

    console.log(location.pathname);

    console.log('ali: ', assignment)
    return (
        <div className='AssignmentListItem-container'>
            <div onClick={()=> history.push(`/learn/admin/tasks/${assignment?.Task?.id}`)} className='AssignmentListItem-name'>{assignment?.Task?.title}</div>
            <div className='AssignmentListItem-btns'>
                <button onClick={()=> window.confirm('Are you sure you want to delete this item?')}> Delete Assignment </button>
            </div>
        </div>

    );
}

export default AssignmentListItem;