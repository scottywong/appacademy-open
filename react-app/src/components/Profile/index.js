import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import './Profile.css';

const Profile = () => {

    const sessionUser = useSelector(state => state.session.user);

    return (
        <div className='Profile-container'>
            <div className='ProfileBar-container'>
                <div className='ProfileBar-info'>
                    <h3>{sessionUser.username}</h3>
                    <div className='ProfileBar-circle'> {sessionUser.username[0]}</div>
                    <h3> {sessionUser.email} </h3>
                    <h3> Profile: </h3> {sessionUser.profile}
                </div>
                <div className='ProfileBar-btns'>
                <a onClick={() => window.location.replace('https://docs.google.com/forms/d/e/1FAIpQLSdUkPFK7mkhRQ9dGfyewQa7gIlZW3RrSKTdn5Rp8nWEggP0jw/viewform') } className="button green">
                    <span className="button-inner"> Feedback</span>
                    <span className="button-bg green"></span>
                </a>
                    <LogoutButton/>
                </div>
            </div>
            <div className='Profile-content'>
                <h3>We are currently rebuilding App Academy Open. Please stay tuned and use the feedback button above if you have any comments about what you would like to see on the platform.</h3>
            </div>
        </div>
    )
}

export default Profile;