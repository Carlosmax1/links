import { Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth';
import { Link } from 'react-router-dom';
import { db } from '../config/firebase-config';
import { collection, where, query, getDocs } from '@firebase/firestore';
import { DocumentData } from 'firebase/firestore';
import UserInfo from '../components/UserInfo/UserInfo';

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
      <Container fixed sx={{display: 'flex', justifyContent: 'center', marginTop: '1em', flexDirection: 'column', alignItems:"center"}}>
        {currentUser.name &&(
          <UserInfo name={currentUser.name} username={currentUser.username} social_medias={currentUser.social_medias}/>
        )}
      </Container>
    </>
  )
}