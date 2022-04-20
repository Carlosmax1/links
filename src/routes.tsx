import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';

export default function MyRoutes(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login name='Login' />} />
        <Route path='/register' element={<Register name='Register' />} />
      </Routes>
    </Router>
  )
}