import React from 'react';
import './Customize.css'

export default function Customize() {
  return (
    <>
      <div className='box__customize'>
        <div className='user__images'>
          <div className='user__images-profile-container'>
            <h2 style={{marginLeft: 15}} className='user__images-profile-title'>Perfil</h2>
            <div className='user__images-profile'></div>
          </div>
          <div className='user__images-bg-container'>
            <h2 className='user__images-bg-title'>Fundo</h2>
            <div className='user__images-bg'></div>
          </div>  
        </div>
      </div>
    </>
  )
}