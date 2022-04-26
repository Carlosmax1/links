import React, { useState } from 'react';
import { useAuth } from '../contexts/auth';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import Customize from '../components/Customize/Customize';
import Footer from '../components/Footer/Footer';

interface DashBoardProps {
  name: string;
}

export default function DashBoard({ name }: DashBoardProps) {

  const auth = useAuth();
  const [file, setFile] = useState<FileList>();
  
  document.title = `${name} - ${auth.userData.name} | ${auth.nav}`;

  return (
    <>
      {auth.userData.name && (
        <Menu 
          name={auth.userData.name} 
          username={auth.userData.username} 
          social_medias={auth.userData.social_medias}
        />
      )}
      {auth.nav == 'customizar' &&(
        <>
          <Customize/>
        </>
      )}
      <Footer/>
    </>
  )
}