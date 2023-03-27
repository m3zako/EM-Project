import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './loginReg.css';
import axios from "axios";

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const handleRegister = async () => {
    console.log(`Registering in as ${username} with password ${password}`);
    try {
      const inputs = {
        "name":username,
        "email":email,
        "password":password,
      }
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch(err) {
      setErr(err.response.data);
    }
  };

  console.log(err);

  return (
    <div className="App">
        <div className='title'> Event Manager</div>
      <div className="login-container">
        <div className="login-form">
            <div className = "App">
                <h1>Register</h1>
            </div>
            <form onSubmit={handleRegister}>
            <div className="form-group">
              <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
              <label htmlFor="username">UserID</label>
            </div>
            <div className="form-group">
              <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} />
              <label htmlFor="email">Student Email</label>
            </div>
            <div className="form-group">
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
              <label htmlFor="password">Password</label>
            </div>
            <button className="button" type="submit">Register</button>
          </form>
          {err && err}
          <div className="App">
            <p> Already have an account?</p>
            <Link to="/login" >Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
