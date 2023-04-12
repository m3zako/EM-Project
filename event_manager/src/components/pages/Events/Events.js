import React from "react";
import "./Events.css";
import Event from "../Event/Event";

const Events = ({type}) => {

  const events = [
    {
      // type: private = 0, public = 1, rso = 2
      type: 0,
      eventid: 1,
      uniID: 1,
      rsoID: 1,
      visibility: 1,
      name: "private event",
      category: "stuff",
      desc: "this is the description where we meet and stuff",
      timedate: "8:00 AM Tuesday February 48",
      location: "antarctica (he wants us to do x and y coords but idk)",
      contactphone: "number here",
      contactemail: "email here",
    },
    {
      type: 1,
      eventid: 2,
      uniID: 1,
      rsoID: 1,
      visibility: 1,
      name: "public event",
      category: "stuff",
      desc: "this is the description where we meet and stuff",
      timedate: "8:00 AM Tuesday February 48",
      location: "antarctica (he wants us to do x and y coords but idk)",
      contactphone: "number here",
      contactemail: "email here",
    },
    {
      type: 2,
      eventid: 2,
      uniID: 1,
      rsoID: 1,
      visibility: 1,
      name: "rso event",
      category: "stuff",
      desc: "this is the description where we meet and stuff",
      timedate: "8:00 AM Tuesday February 48",
      location: "antarctica (he wants us to do x and y coords but idk)",
      contactphone: "number here",
      contactemail: "email here",
    },
  ];

  const filteredEvents = events.filter(event => event.type === type);

  return (
    <div className="events">
      {filteredEvents.map((event) => (
        <Event event={event} key={event.id} />
      ))}
    </div>
  );
};

export default Events;
