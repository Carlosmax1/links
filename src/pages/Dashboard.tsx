import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth';
import { Link } from 'react-router-dom';
import { db } from '../config/firebase-config';
import { collection, where, query, getDocs } from '@firebase/firestore';
import { DocumentData } from 'firebase/firestore';

interface DashBoardProps{
  name: string;
}

export default function DashBoard({name} : DashBoardProps) {

  const auth = useAuth();
  const [currentUser, setCurrentUser] = useState({} as DocumentData);
  const [file, setFile] = useState<FileList>();

  document.title = `${name} - ${currentUser.name}`;

  useEffect(() => {
    async function getUser() {
      const UserCollection = collection(db, "users");
      const q = query(UserCollection, where('uid', '==', auth.authData?.uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setCurrentUser(doc.data());
      });
    };
    getUser();
  }, []);

  return (
    <>
      <img src={currentUser.url_profile}></img>
      <form onSubmit={(e) => e.preventDefault()}>
        <input onChange={(e) => setFile(e.target.files || undefined)} type='file'></input>
        <button type='submit'>Enviar</button>
      </form>
      <h1>Perfil</h1>
      <h2>email: {auth.authData?.email}</h2>
      <h2>uid: {auth.authData?.uid}</h2>
      <h2>nome: {currentUser.name}</h2>
      <h2>apelido: {currentUser.username}</h2>
      <Link to='/'><Button onClick={() => auth.logout()} variant='contained'>Sair</Button></Link>
    </>
  )
}