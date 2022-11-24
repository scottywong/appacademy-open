import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "../../auth/LogoutButton";
import './LearnNavBar.css';


function LearnNavBar(){

    const sessionUserProfile = useSelector(state => state.session.user.profile);
    
    return (
        <div className='LearnNavBar-container'>
        <div className='LearnNavBar-menu'>
            <i className="fa-solid fa-bars fa-2xl"></i>
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