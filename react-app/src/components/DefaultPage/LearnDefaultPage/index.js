import {useSelector} from 'react-redux';
import './LearnDefaultPage.css';


function LearnDefaultPage(){

    const sessionUser = useSelector(state=> state.session.user)

    return (

        <div className='LearnDefaultPage-container'>
                <div className='learnpage-title-container'><h1>Hello, {sessionUser.username} </h1></div>
                <p>🚀 Welcome to Build Academy 🚀</p>
        </div>

    )
}

export default LearnDefaultPage;
