import aaLogo from "../../../assets/aa-logo.svg";
import { NavLink } from "react-router-dom";
import LogoutButton from "../../auth/LogoutButton";

import './HomeNavigationBar.css';

function HomeNavigationBar(){

    return  (
    
    <div className='HomeNavigationBar-container'>
     
        <img className="app-academy-logo" src={aaLogo}></img>

        <div className='HomeNavigationBar-items'>

            <li>
                <NavLink className='nav-item' to='/' exact={true} activeClassName='active'>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink className='nav-item' to='/demo-login' exact={true} activeClassName='active'>
                    Demo
                </NavLink>
            </li>
            <li>
                <NavLink className='nav-item' to='/login' exact={true} activeClassName='active'>
                    Login
                </NavLink>
            </li>
            <li>
                <NavLink className='nav-item' to='/sign-up' exact={true} activeClassName='active'>
                    Sign Up
                </NavLink>
            </li>

        </div>
    </div>
    )
}

export default HomeNavigationBar;