import "./Events.css";
import Event from "../Event/Event";

const Events = () => {

    const events = [
        {
            eventid: 1,
            uniID: 1,
            rsoID: 1,
            visibility: 1,
            name: "Event",
            category: "stuff",
            desc: "this is the description where we meet and stuff",
            timedate: "8:00 AM Tuesday February 48",
            location: "antarctica (he wants us to do x and y coords but idk)",
            contactphone: "number here",
            contactemail: "email here"
        },
        {
          eventid: 2,
          uniID: 1,
          rsoID: 1,
          visibility: 1,
          name: "Event 2",
          category: "stuff",
          desc: "this is the description where we meet and stuff",
          timedate: "8:00 AM Tuesday February 48",
          location: "antarctica (he wants us to do x and y coords but idk)",
          contactphone: "number here",
          contactemail: "email here"
        }
    ];

    return <div className="events">
        {events.map(event=>(
            <Event event={event} key={event.id}/>
        ))}
    </div>
};

export default Events;