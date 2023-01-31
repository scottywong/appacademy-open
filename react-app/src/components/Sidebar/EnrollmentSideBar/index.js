import EnrollmentListItemStudent from '../../Enrollment/EnrollmentListItemStudent';
import { useState, useEffect } from 'react';
import './EnrollmentSideBar.css';
import Loader from '../../Loader';

function EnrollmentSideBar({enrollments}){

    const [isLoading, setIsLoading] = useState(true);
 
    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, []);

    return enrollments && (


        <div className='enroll-sidebar-container'>

        {isLoading ? 
        <div className='loadsidebar'> 
            <Loader height='100' width='100' color='#ccc' /> 
        </div> : 
        <>
        <h3>Courses </h3> 
            {enrollments.length > 0 ? enrollments.map(enrollment => (  
                 <EnrollmentListItemStudent enrollment={enrollment} />)): 
            <p style={{textAlign:"center",marginTop:"30px"}}> No assigned courses</p>}
        </>
        
        }
        
        </div>

    )
}
export default EnrollmentSideBar;