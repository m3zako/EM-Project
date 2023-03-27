import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';
import './loginReg.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // perform login validation
    console.log(`Logging in as ${email} with password ${password}`);
  }

  return (
    <div className="App">
        <div className='title'>Event Manager</div>
      <div className="login-container">
        <div className="login-form">
            <div className = "App">
                <h1>Login</h1>
            </div>
            <form onSubmit={handleLogin}>
            <div className="form-group">
              <input type="text" id="username" value={email} onChange={e => setEmail(e.target.value)} />
              <label htmlFor="username">Email</label>
            </div>

            <div className="form-group">
              <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
              <label htmlFor="password">Password</label>
            </div>
            <button className="button" type="submit">Login</button>
          </form>
          <div className="App">
            <p> Don't have an account?</p>
            <Link to="/register" component={Register}>Register</Link>
            <Link to="/home/priv-events" > Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
