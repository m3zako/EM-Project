import './AdminEvents.css';
import Events from "../Events/Events"


const AdminRsoEvents = () => {
    return(
        <div className = "home">
            <div className = "title">
                RSO EVENTS
            </div>
            <Events type={2}/>
        </div>
    )
}

export default AdminRsoEvents;
