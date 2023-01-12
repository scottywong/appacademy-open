import heroImage from '../../../assets/heroimage.jpeg';
import { useHistory } from 'react-router';
import './HomePage.css';

function HomePage(){

    const history = useHistory();

    return (

        <div className='HomePage-container'>

            <div className='HomePage-cta'>
                <div className='HomePage-cta-header'>
                Learn to code online for <span class="text-span-7">free</span>
                </div>
                <div className='HomePage-cta-subheader'>
                Get access to Build Academy’s entire online full-stack curriculum for free. No catch, no strings attached.
                </div>
                <div className='HomePage-cta-btns'>
                <a onClick={() => history.push('/sign-up')} className="button">
                    <span className="button-inner"> Sign up for a free account</span>
                    <span className="button-bg"></span>
                </a>
                    <div>
                        Already have an account? <a className='login-cta' href='/login'>Login here</a>
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
