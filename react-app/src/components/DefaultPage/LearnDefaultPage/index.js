import {useSelector} from 'react-redux';
import './LearnDefaultPage.css';


function LearnDefaultPage(){

    const sessionUser = useSelector(state=> state.session.user)

    console.log(sessionUser)
    return (

        <div className='LearnDefaultPage-container'>
                <div className='learnpage-title-container'><h1>Hello, {sessionUser.username} </h1></div>
                <p>This is your home page.</p>
        </div>

    )
}

export default LearnDefaultPage;
