import { NavLink } from "react-router-dom";
import LogoutButton from "../../auth/LogoutButton";
import './LearnNavBar.css';


function LearnNavBar(){

    return (
        <div className='LearnNavBar-container'>
        <div className='LearnNavBar-menu'>
            <i className="fa-solid fa-bars fa-2xl"></i>
        </div>
        <div className='LearnNavBar-links'>
            <div className='LearnNavBar-linkitem'>
                <NavLink to="/profile"> Profile </NavLink>
            </div>
            <div className='LearnNavBar-linkitem'>
                <NavLink to="/forum">
                    <i className="fa-solid fa-question"></i>
                </NavLink>
            </div>
            <div className='LearnNavBar-linkitem'>
                <NavLink to="/search"> Search </NavLink>
            </div>
            <div className='LearnNavBar-linkitem'>
                <LogoutButton/>
            </div>
        </div>

        </div>);
}

export default LearnNavBar;