import React from 'react';
import { useEffect, useState } from 'react';
import { db } from '../config/firebase-config';
import { collection, where, query, getDocs } from '@firebase/firestore';
import { DocumentData } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

export default function Profile(){

  const [currentUser, setCurrentUser] = useState({} as DocumentData);

  const userParams = useParams();
  
  document.title = `${userParams.username}`

  useEffect(() => {
    async function getUser() {
      const UserCollection = collection(db, "users");
      const q = query(UserCollection, where('username', '==', userParams.username));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setCurrentUser(doc.data());
      });
    };
    getUser();
  }, []);

  return(
    <>
      <h1>Nome: {currentUser.name}</h1>
    </>
  )
};