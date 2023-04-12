import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AdminRsoOptions = () => {
    const { rsoId } = useParams();          // RSO id passed from the hub
    const [rso, setRso] = useState(null);
    const navigate = useNavigate();         

    useEffect(() => {
        const fetchRso = async () => {
          // Fetch the RSO data based on the rsoId
          return({id: rsoId, name: "Fetched Name"})
        };
    
        fetchRso();
      }, [rsoId]);

    return(
        <div className = "home">
            <button onClick={() => {navigate('/adminhome/admin-rso-hub');}}>Back to RSO Hub</button>
            <div>                
                Ayy lmao
            </div>
        </div>
    )
}

export default AdminRsoOptions;
