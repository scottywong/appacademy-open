import heroImage from '../../../assets/heroimage.jpeg';
import { useHistory } from 'react-router';
import './HomePage.css';

function HomePage(){

    const history = useHistory();
    
    return (

        <div className='HomePage-container'>

            <div className='HomePage-cta'>
                <div className='HomePage-cta-header'>
                Learn to code online for free
                </div>
                <div className='HomePage-cta-subheader'>
                Get access to App Academy’s entire online full-stack curriculum for free. No catch, no strings attached.
                </div>
                <div className='HomePage-cta-btns'>
                    <button onClick={() => history.push('/login')} id='HomePage-signup-btn'>Sign up for a free account</button>
                    <div>
                        Already have an account? <a>Login here</a>
                    </div>
                </div>         
            </div>
            <div className='HomePage-hero'>
                <img src={heroImage} className='HomePage-hero-img'></img>
            </div>

        </div>
    )
}

export default HomePage;
