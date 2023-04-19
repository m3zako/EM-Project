import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/authContext';
import { makeRequest } from '../../../../axios';
import './adminRsoHub.css';

const AdminRsoHub = () => {
  const { currentUser } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
  const [isInviteMenu, setIsInviteMenu] = useState(false);
  const [visibility, setVisibility] = useState('public');
  const [rsos, setRsos] = useState([]);
  const navigate = useNavigate();
  var currId = 3;

  useEffect(() => {
    const fetchRsos = async () => {
      // const rsosData = await fetchAdminsRsos(currentUser.user_id); // THIS IS THE REAL REQUEST
      const rsosData = DEMO_RSOS(); // TEMPORARY DEMO DATA
      setRsos(rsosData);
    };
  
    fetchRsos();
  }, []);

  useEffect(() => {
    console.log(rsos);
  }, [rsos]);

  const fetchAdminsRsos = async (userId) => {
    try {
      const inputs = {
        "user_id":userId,
      }
      const response = await makeRequest.get("/rsos/getAdminsRsos", {params: inputs})
      return response.data;
    } catch(err) {
      console.error(err.response.data);
    }
  };

  const DEMO_RSOS = () => {
    return [
      {"rso_id": 1, "name": "Gaming", "description": "People who like playing some cool video games."},
      {"rso_id": 2, "name": "Cooking", "description": "People who like cooking some excellent food."},
      {"rso_id": 3, "name": "Painting", "description": "You can only join if you paint pretty pictures."},
    ];
  }
  

  const addRso = (formData) => {
    const newRso = {
      rso_id: 4,
      visibilitiy: 1,
      ...formData,
    };
    setRsos([...rsos, newRso]);
    setShowForm(false);
  };

  const inviteMembers = (formData) => {
    // Handle the invite process here
    console.log("Invite members", formData);
  };

  // FUNCTION TO CREATE NEW RSO
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData);

    if (isInviteMenu) {
      inviteMembers(formEntries);
    } else {
      addRso(formEntries);
    }
  };

  const handleRsoClick = (rso) => {
    // Redirect to the adminRsoOptions and pass it that specific RSO based on the id
    console.log(`Clicked RSO with id: ${rso.rso_id}`);
    navigate(`/adminhome/admin-rso-hub/rso-options/${rso.rso_id}`);
  };

  return (
    <div>
      <button className="add-rso-button" onClick={() => setShowForm(!showForm)}>
        Add Rso
      </button>
      {showForm && (
        <div className="add-rso-container">
          <span className="close-button" onClick={() => setShowForm(false)}>
            &times;
          </span>
          <h2>Add RSO</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">RSO Name</label>
            <input type="text" name="name" placeholder="University Name" />
            <label htmlFor="description">Description</label>
            <textarea name="description" placeholder="Description"></textarea>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" placeholder="Location" />
            <label htmlFor="headcount">Number of Members</label>
            <input type="text" name="headcount" placeholder="Number of Members" />
            <label htmlFor="visibility">Visibility:</label>
            <select
                id="visibility"
                value={visibility}
                onChange={(e) => setVisibility(e.target.value)}
            >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="rso">RSO</option>
            </select>
            <button className="submit-button" type="submit">
              Add
            </button>
            {/* {!isInviteMenu && (
              <>
                <label htmlFor="rsoname">RSO Name</label>
                <input type="text" name="rsoname" placeholder="University Name" />
                <label htmlFor="desc">Description</label>
                <textarea name="desc" placeholder="Description"></textarea>
                <label htmlFor="location">Location</label>
                <input type="text" name="location" placeholder="Location" />
                <label htmlFor="numofmembers">Number of Members</label>
                <input type="text" name="numofmembers" placeholder="Number of Members" />
              </>
            )}
            {isInviteMenu && (
              <>
                <label htmlFor="email1">Student Email 1</label>
                <input type="email" name="email1" placeholder="Student Email 1" /><br />
                <label htmlFor="email2">Student Email 2</label>
                <input type="email" name="email2" placeholder="Student Email 2" /><br />
                <label htmlFor="email3">Student Email 3</label>
                <input type="email" name="email3" placeholder="Student Email 3" /><br />
                <label htmlFor="email4">Student Email 4</label>
                <input type="email" name="email4" placeholder="Student Email 4" /><br />
              </>
            )}
            <div className="form-buttons">
              <div className="switch-buttons">
                <button
                  className="switch-form-view"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsInviteMenu(false);
                  }}
                >
                  General Form
                </button>
                <button
                  className="switch-form-view"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsInviteMenu(true);
                  }}
                >
                  Invite Menu
                </button>
              </div>
              {!isInviteMenu && (
                <button className="submit-button" type="submit">
                  Add
                </button>
              )}
            </div> */}
          </form>
        </div>
      )}  
      <div style={{ height: "200px", overflowY: "scroll" }}>
        <table className="rso-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {rsos.map((rso) => (
              <tr key={rso.rso_id} onClick={() => handleRsoClick(rso)}>
                <td>{rso.name}</td>
                <td>{rso.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminRsoHub;
