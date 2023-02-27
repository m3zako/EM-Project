import './pages/Home.css'

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
}