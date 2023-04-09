import './pages/Home.css'
import {Link} from 'react-router-dom';

function Navbar () {
    return (
        <nav>
            <div className="nav">
                <Link to="/home" className="title">
                    <span>Event Manager</span>
                </Link>
                <ul className="ul">
                    <li className="active">
                        <Link to="/priv-events">Private Events</Link>
                    </li>
                    <li>
                        <Link to="/pub-events">Public Events</Link>
                    </li>
                    <li>
                        <Link to="/rso-events">RSO Events</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
