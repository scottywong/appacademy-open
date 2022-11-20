import {useHistory} from 'react-router-dom';

import './CourseListItem.css';

function CourseListItem({course}){

    const history = useHistory();

    return (
        <div className='CourseListItem-container'>
            <div onClick={() => history.push(`/learn/admin/courses/${course.id}`) } className='CourseListItem-name'>{course?.title}</div>
                <div className='CourseListItem-btns'>
                    <button onClick={()=> window.confirm('Are you sure you want to delete this item?')}> Delete Course </button>
                </div>
        </div>

    );
}

export default CourseListItem;