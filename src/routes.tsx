import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Login from './pages/Login';
import DashBoard from './pages/Dashboard';
import Register from './pages/Register';
import { useAuth } from './contexts/auth';

export default function MyRoutes(){

  const auth = useAuth();
  
  return(
    <Router>
      <Routes>
      {auth.authData?.uid ?
      <>
        <Route path='/dashboard' element={<DashBoard/>} />
        <Route path='/' element={<Navigate to='/dashboard'/>} />
      </>
      : 
        <>
          <Route path='/' element={<Login name='Login'/>} />
          <Route path='/register' element={<Register name='Register'/>} />
        </>
      }
      </Routes>
    </Router>
  )
}