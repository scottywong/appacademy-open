import { useSelector, useDispatch } from 'react-redux';
import { fetchGetEnrollmentsByCourseId } from '../../../../store/enrollment';
import { useEffect ,useState} from 'react';
import EnrollmentListItem from '../EnrollmentListItem';
import './EnrollmentList.css';

function EnrollmentList({courseId}){
    const dispatch = useDispatch();
    const enrollments = useSelector(state => state.enrollment);
    const [enrollmentList,setEnrollmentList] = useState(false);

    useEffect (() => {
        if(enrollments.enrollments){
            setEnrollmentList(Object.values(enrollments.enrollments));
        }
    },[enrollments])

    useEffect (() => {
        dispatch(fetchGetEnrollmentsByCourseId(courseId));
    },[dispatch])

    return  enrollmentList && (

        <div className="EnrollmentList-container"> 
        <h1> Enrollment List </h1>
            {enrollmentList?.map( enrollment =>  <EnrollmentListItem enrollment={enrollment} key={enrollment.id} /> )}
            {enrollmentList?.length === 0 && <p>No enrollments to display.</p>}
        </div>
    )
}

export default EnrollmentList;