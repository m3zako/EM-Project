import './pages/StudentPages/Home.css'
import {Link} from 'react-router-dom';

function SANavbar () {
    return (
        <nav>
            <div className="nav">
                <Link to="/sahome" className="title">
                    <span>Event Manager Super Admin</span>
                </Link>
                <ul className="ul">
                    <li className="active">
                        <Link to="/sahome/universities">Universities</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default SANavbar;
