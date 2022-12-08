import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LogoutButton from "../../auth/LogoutButton";
import './LearnNavBar.css';
import { useEffect } from "react";


function LearnNavBar({toggleSidebar}){

    const sessionUserProfile = useSelector(state => state.session.user.profile);
    
    const [showMenu,setShowMenu] = useState(true)

    const handleViewSidebar = () => {
      
        if(!showMenu){
            setShowMenu(true);
            toggleSidebar();
            // document.querySelector('.enroll-sidebar-container')?.classList.remove('hide-scrollbar');
            // document.querySelector('.AssignmentSideBar-container')?.classList.remove('hide-scrollbar');
        
        }
        if(showMenu) {
            setShowMenu(false);
            toggleSidebar();
            // document.querySelector('.enroll-sidebar-container')?.classList.add('hide-scrollbar');
            // document.querySelector('.AssignmentSideBar-container')?.classList.remove('hide-scrollbar');
        }
    }


    return (
        <div className='LearnNavBar-container'>
            
        <div className='LearnNavToggle'>
            {!showMenu && <div onClick={handleViewSidebar} className='LearnNavBar-menu'>
                <i className="fa-solid fa-bars fa-2xl"></i>
            </div>}
            {showMenu && <div onClick={handleViewSidebar} className='LearnNavBar-menu'>
                <i className="fa-solid fa-arrow-left-long fa-2xl"></i>
            </div>}
        </div>

        <div className='LearnNavBar-links'>
            <div className='LearnNavBar-linkitem'>
                <NavLink to='/'> Home </NavLink>
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
                <NavLink to="/forum">
                    <i className="fa-solid fa-question"></i>
                </NavLink>
            </div>
            <div className='LearnNavBar-linkitem'>
                <NavLink to="/search"> Search </NavLink>
            </div>
        </div>

        </div>);
}

export default LearnNavBar;