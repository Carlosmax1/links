import { Button } from '@mui/material';
import React from 'react';
import { useAuth } from '../contexts/auth';
import { Link } from 'react-router-dom';

export default function DashBoard(){

  const auth = useAuth();

  return(
    <>
      <h1>Perfil</h1>
      <h2>email: {auth.authData?.email}</h2>
      <h2>uid: {auth.authData?.uid}</h2>
      <Link to='/'><Button onClick={() => auth.logout()} variant='contained'>Sair</Button></Link>
    </>
  )
}