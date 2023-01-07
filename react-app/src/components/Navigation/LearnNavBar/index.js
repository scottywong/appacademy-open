import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import './LearnNavBar.css';
import { useLocation ,useHistory} from "react-router";

function LearnNavBar({toggleSidebar}){

    const sessionUserProfile = useSelector(state => state.session.user.profile);
    const location = useLocation();
    const history = useHistory();

    const showToggle = location.pathname.includes('/enrollments') || location.pathname === '/learn/home'
    const isTaskPage = location.pathname.includes('/learn/admin/tasks/')
    const isCoursePage = location.pathname.includes('/learn/admin/courses/')
    const [showMenu,setShowMenu] = useState(true)

    const LearnNavBarClass= showToggle && showMenu ? 'LearnNavBar-container LearnNavBar-shortwidth' : 'LearnNavBar-container LearnNavBar-fullwidth';

    const handleViewSidebar = () => {
      
        if(!showMenu){
            setShowMenu(true);
            toggleSidebar();
        
        }
        if(showMenu) {
            setShowMenu(false);
            toggleSidebar();
        }
    }

    const goAdminHome = () => {
        history.push('/learn/admin')
    }

    return (
        <div className='LearnNavBar-wrapper'>
            <div className={LearnNavBarClass}>
                
            <div className='LearnNavToggle'>
                {(isTaskPage || isCoursePage )&& <div onClick={goAdminHome} className='LearnNavBar-menu'>
                <i class="fa-solid fa-house-flag fa-2xl"> </i>
                </div>}

                {!showMenu && showToggle &&  <div onClick={handleViewSidebar} className='LearnNavBar-menu'>
                    <i className="fa-solid fa-bars fa-2xl"></i>
                </div>}

                {showMenu && showToggle && <div onClick={handleViewSidebar} className='LearnNavBar-menu'>
                    <i className="fa-solid fa-arrow-left-long fa-2xl"></i>
                </div>}
            </div>

            <div className='LearnNavBar-links'>
                <div className='LearnNavBar-linkitem'>
                    <NavLink to='/learn/home'> Home </NavLink>
                </div>
                <div className='LearnNavBar-linkitem'>
                    <NavLink to='/learn/home'> Learn </NavLink>
                </div>
                <div className='LearnNavBar-linkitem'>
                    <NavLink to="/learn/profile"> Profile </NavLink>
                </div>
                {sessionUserProfile ==='Admin' && <div className='LearnNavBar-linkitem'>
                    <NavLink to='/learn/admin'> Admin </NavLink>
                </div>}
                <div className='LearnNavBar-linkitem'>
                    <NavLink to={{pathname: "https://forum.appacademy.io/"}} target="_blank">
                        <i className="fa-solid fa-question"></i>
                    </NavLink>
                </div>
            </div>

            </div>
        </div>);
}

export default LearnNavBar;