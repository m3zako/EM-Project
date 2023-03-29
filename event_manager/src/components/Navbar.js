import './pages/Home.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <Link to="/home" className="title">
                <span>Event Manager</span>
            </Link>
            <ul className="ul">
                <li className="active">
                    <a href="/home/priv-events">Private Events</a>
                </li>
                <li>
                    <a href="/home/pub-events">Public Events</a>
                </li>
                <li>
                    <a href="/home/RSO-events">RSO Events</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;

/*
export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/home" className="title">Event Manager</a>
            <ul className="ul">
                <li className="active">
                    <a href="/home/priv-events">Private Events</a>
                </li>
                <li>
                    <a href="/home/pub-events">Public Events</a>
                </li>
                <li>
                    <a href="/home/RSO-events">RSO Events</a>
                </li>
            </ul>
        </nav>
    )
}*/