/* Options for an admin to create or delete afilliated RSOs.
// Display a list of all the RSOs that the admin manages
*/
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminRsoHub.css';

const AdminRsoHub = () => {
    const [rsos, setRsos] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchRsos = async () => {
            // Fetch all of this admin's RSOs
            setRsos([{id: 0, name: "Gaming"}, {id: 1, name: "Cooking"}, {id: 2, name: "Racecar Driving"}])
        };

        fetchRsos();
    }, []);

    const handleRsoClick = (id) => {
        // Redirect to the adminRsoOptions and pass it that specific RSO based on the id
        console.log(`Clicked RSO with id: ${id}`);
        navigate(`/adminhome/admin-rso-hub/rso-options/${id}`);
    };

    const handleCreateNewrso = () => {
        // Create a new RSO.
        // Need to somehow ensure that 4 extra accounts are going to be present in order to make this RSO active.
        console.log('Create new rso');
    };

    return (
    <div>
        <button onClick={handleCreateNewrso}>Create New rso</button>
        <div style={{ height: '200px', overflowY: 'scroll' }}>
          <table className="rso-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {rsos.map((rso) => (
                <tr key={rso.id} onClick={() => handleRsoClick(rso.id)}>
                  <td>{rso.id}</td>
                  <td>{rso.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AdminRsoHub;
