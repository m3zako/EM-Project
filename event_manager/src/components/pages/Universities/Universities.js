import React, {useState} from "react";
import "./Universities.css";
import University from "../University/University";

const Universities = ({type}) => {
  const [showForm, setShowForm] = useState(false);
  const [universities, setUniversities] = useState([
    {
      // type: private = 0, public = 1, rso = 2
      uniID: 1,
      visibility: 1,
      uniname: "University of Central Florida",
      desc: "this is the description where we meet and stuff",
      location: "orlando",
      numofstudents: "50,000",
      pictures: "pictures?"
    }
  ]);

  const filteredUni = universities.filter(university => university.type === type);

  const addUniversity = (formData) => {
    const newUniversity = {
      uniID: universities.length + 1,
      visibilitiy: 1,
      ...formData,
      type,
    };
    setUniversities([...universities, newUniversity]);
    setShowForm(false);
  };

  return (
    <div className="events">
  {filteredUni.map((university) => (
    <University university={university} key={university.id} />
  ))}
  <button className="add-university-button" onClick={() => setShowForm(!showForm)}>Add University</button>
  {showForm && (
    <div className="add-university-container">
      <span className="close-button" onClick={() => setShowForm(false)}>
          &times;
        </span>
      <h2>Add University</h2>
      <form onSubmit={(e) => { 
        e.preventDefault(); 
        const formData = new FormData(e.target);
        addUniversity(Object.fromEntries(formData)); 
        }}>
        <label htmlFor="uniname">University Name</label>
        <input type="text" name="uniname" placeholder="University Name" />
        <label htmlFor="desc">Description</label>
        <textarea name="desc" placeholder="Description"></textarea>
        <label htmlFor="location">Location</label>
        <input type="text" name="location" placeholder="Location" />
        <label htmlFor="numofstudents">Number of Students</label>
        <input type="text" name="numofstudents" placeholder="Number of Students" />
        <input type="submit" value="Add" />
      </form>
    </div>
  )}
</div>
  );
};

export default Universities;
