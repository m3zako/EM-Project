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
                        <Link to="/adminhome/admin-rso-hub">RSO Options</Link>
                    </li>
                    <li className="active">
                        <Link to="/adminhome/adminpriv-events">Private Events</Link>
                    </li>
                    <li>
                        <Link to="/adminhome/adminpub-events">Public Events</Link>
                    </li>
                    <li>
                        <Link to="/adminhome/adminrso-events">RSO Events</Link>
                    </li>


                    
                </ul>
            </div>
        </nav>
    )
}

export default AdminNavbar;
