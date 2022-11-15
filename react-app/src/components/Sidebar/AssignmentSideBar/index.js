import AssignmentListItemStudent from '../../Assignment/AssignmentListItemStudent'

function AssignmentSideBar({assignments}){


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