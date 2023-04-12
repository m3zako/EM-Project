import './AdminEvents.css';
import Events from "../Events/Events"


const AdminPrivateEvents = () => {
    return(
        <div className = "home">
            <div className = "title">
                PRIVATE EVENTS
            </div>
            <Events type={0}/>
        </div>
        )
}

export default AdminPrivateEvents;
