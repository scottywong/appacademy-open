import AssignmentListItemStudent from '../../Assignment/AssignmentListItemStudent';
import './AssignmentSideBar.css';

function AssignmentSideBar({assignments}){

    console.log('AssignmentSideBar: ', assignments)

    return (
        <div className="AssignmentSideBar-container">

            {assignments && assignments.map(
                
                assignment => {
                return <AssignmentListItemStudent assignment={assignment}/>
                }
            )}

        </div>
        );


}

export default AssignmentSideBar;