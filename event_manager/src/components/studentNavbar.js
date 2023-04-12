import './pages/StudentPages/Home.css'
import {Link} from 'react-router-dom';

function StudentNavbar () {
    return (
        <nav>
            <div className="nav">
                <Link to="/home" className="title">
                    <span>Event Manager Student</span>
                </Link>
                <ul className="ul">
                    <li className="active">
                        <Link to="/home/priv-events">Private Events</Link>
                    </li>
                    <li>
                        <Link to="/home/pub-events">Public Events</Link>
                    </li>
                    <li>
                        <Link to="/home/rso-events">RSO Events</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default StudentNavbar;
