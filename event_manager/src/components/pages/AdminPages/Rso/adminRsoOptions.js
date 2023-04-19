import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { makeRequest } from '../../../../axios';

const AdminRsoOptions = () => {
    const { rso_id } = useParams();          // RSO passed from the hub
    const navigate = useNavigate();         
    const [rso, setRso] = useState({});
    console.log(rso)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [headcount, setHeadcount] = useState(0);

    // Fetch RSO data here and update the state
    useEffect(() => {

        const fetchRsoData = async (rsoId) => { 
            try {
                const inputs = {
                    "rso_id": rsoId,
                };
                const response = await makeRequest.get("/rsos/get", { params: inputs });
                return response.data;
            } catch (err) {
                console.error(err.response.data);
            }
        };
        if(rso_id){
            setRso(fetchRsoData(rso_id));
        }
    }, [rso_id]);

    return(
        <>
            <div className="home">
                <button onClick={() => {navigate('/adminhome/admin-rso-hub');}}>Back to RSO Hub</button>
                <div>                
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={rso.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        value={rso.description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <br />
                    <label htmlFor="headcount">Headcount:</label>
                    <input
                        type="number"
                        id="headcount"
                        value={rso.headcount}
                        onChange={(e) => setHeadcount(e.target.value)}
                    />
                </div>
            </div>
        </>
    )
}

export default AdminRsoOptions;
