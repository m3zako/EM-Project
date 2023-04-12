import './Home.css';
import Events from "../Events/Events"

const PubEvents = () => {
    return(
        <div className = "home">
            <div className = "title">
                PUBLIC EVENTS
            </div>
            <Events type={1}/>
        </div>
        )
}

export default PubEvents;