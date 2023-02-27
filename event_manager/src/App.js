import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Home from './components/pages/Home'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home/priv-events" element={<Home />} />
      <Route path="/home/pub-events" element={<Home />} />
      <Route path="/home/RSO-events" element={<Home />} />
    </Routes>
  )
}

export default App;