import './pages/StudentPages/Home.css'
import {Link} from 'react-router-dom';

function AdminNavbar () {
    return (
        <nav>
            <div className="nav">
                <Link to="/adminhome" className="title">
                    <span>Event Manager Admin</span>
                </Link>
                <ul className="ul">
                    <li className="active">
                        <Link to="/adminhome/priv-events">Private Events</Link>
                    </li>
                    <li>
                        <Link to="/adminhome/pub-events">Public Events</Link>
                    </li>
                    <li>
                        <Link to="/adminhome/rso-events">RSO Events</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AdminNavbar;
