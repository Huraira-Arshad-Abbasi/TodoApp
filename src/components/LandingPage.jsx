import { Link } from 'react-router-dom';
import Notification from './Notification'
import '../css/LandingPage.css';
const LandingPage = () => {
    return (
        <div className='main__container'>
            <Notification />
            <nav>
                <div className="logo">
                    {/* <img width='55rem' src={logo} alt="" /> */}
                    <div className="name">Sticky Notes</div>
                </div>
                <div className="nav__links">
                    
                </div>
                <div className="navBtn">
                    <button className="bg-red-600 rounded-lg border-none font-semibold font-sans px-4 py-2 text-white"><Link to="/register">Start for free</Link></button>
                </div>
            </nav>
            <div className='main'>
                <div className="container">
                    <h2>Organize your work <br /> and life, finally.</h2>
                    <p>Become focused, organized, and calm with Todolist. The world{"'"}s #1 <br /> task manager and to-do list app.</p>
                    <div className="btn">
                        <button className="bg-red-600 rounded-lg border-none font-semibold font-sans px-4 py-2 text-white"><Link to="/register">Start for free</Link></button>
                    </div>
                </div>
                <div className="img">
                    {/* <img src={Img} alt="" /> */}
                </div>
                <div className="container c_2">
                    <h2>Gain calmness and clarity with the <br /> world{"'"}s most beloved productivity app</h2>
                    <p>337000+ ★★★★★ reviews on Google Play and App Store</p>
                    <div className="btn">
                        <button className="bg-red-600 rounded-lg border-none font-semibold font-sans px-4 py-2 text-white"><Link to="/register">Start for free</Link></button>
                    </div>
                </div>
            </div>
            <div className="Footer">
                <div className="upper_content">
                    <div className="left">
                        <div className="logo">
                            {/* <img width='55rem' src={logo} alt="" /> */}
                            <div className="name">
                                Sticky Notes
                            </div>
                        </div>
                        <p><i>Join those who organize work and life with this app.</i></p>
                    </div>
                </div>
                <div className="bottom_footer">
                    <div className="left">
                        <ul>
                            <li>Security</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </ul>
                    </div>
                    <div className="FooterBtn">
                        <button type="button">English</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
