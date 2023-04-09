import './Home.css';
import './Events/Events.css'
import Events from "./Events/Events"


const Home = () => {
    return(
        <div className = "home">
            <div className = "title">
                ALL EVENTS
            </div>
            <div className = "event-container">
                <Events type={0} />
                <Events type={1} />
                <Events type={2} />
            </div>
        </div>
        )
}

export default Home;
