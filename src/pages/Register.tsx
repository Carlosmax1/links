import React from 'react';
import Form from '../components/Form/Form';
import Title from '../components/Title/Title';
import Footer from '../components/Footer/Footer';

interface RegisterPageProps{
  name: string;
}

export default function Register({name}: RegisterPageProps){

  document.title = name;
  
  return(
    <>
      <Title name='Register'/>
      <Form variant='register'/>
      <Footer/>
    </>

  )
}