import React from 'react';
import './Title.css'

interface TitleProps{
  name: string
}

export default function Title({name}: TitleProps){
  return(
    <>
      <h1 className='ptitle'>{name}</h1>
    </>
  )
}