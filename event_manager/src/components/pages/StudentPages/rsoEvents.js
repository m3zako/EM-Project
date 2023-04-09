import '../Home.css';
import Events from "../Events/Events"


const rsoEvents = () => {
    return(
        <div className = "home">
            <div className = "title">
                RSO EVENTS
            </div>
            <Events type={2}/>
        </div>
        )
}

export default rsoEvents;
