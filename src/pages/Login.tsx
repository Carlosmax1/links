import React from 'react';
import Form from '../components/Form/Form';
import Title from '../components/Title/Title';
import { useEffect } from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../config/firebase-config';
import Footer from '../components/Footer/Footer';

interface LoginPageProps{
  name: string
}

export default function Login({name}: LoginPageProps){

  document.title = name;
  const userCollection = collection(db, 'users');

  useEffect(() =>{
    const getUsers = async () =>{
      const data = await getDocs(userCollection);
      console.log(
        data.docs.map((doc) => ({...doc.data(), id: doc.id}))
      );
    }
  },[])

  return(
    <> 
      <Title name='Login' />
      <Form variant='login' />
      <Footer/>
    </>
    
  )
}