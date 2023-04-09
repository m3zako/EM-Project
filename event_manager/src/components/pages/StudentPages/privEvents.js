import '../Home.css';
import Events from "../Events/Events"


const PrivateEvents = () => {
    return(
        <div className = "home">
            <div className = "title">
                PRIVATE EVENTS
            </div>
            <Events type={0}/>
        </div>
        )
}

export default PrivateEvents;
