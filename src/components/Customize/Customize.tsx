import './Customize.css';
import PersonIcon from '@mui/icons-material/Person';
import ImageIcon from '@mui/icons-material/Image';
import Form from '../Form/Form';
import {useState} from 'react';

export default function Customize() {

  const [filePictureProfile, setFilePictureProfile] = useState<FileList>();
  const [fileBg, setFileBg] = useState(null);

  return (
    <>
      <div className='box__customize'>
        <div className='user__images'>
          <label className='input__images-profile'>
            <input onChange={(e) => setFilePictureProfile(e.target.files || undefined)} type='file' />
            <div className='user__images-profile-container'>
              <h2 style={{ marginLeft: 15 }} className='user__images-profile-title'>Perfil</h2>
              <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} className='user__images-profile'>
                <PersonIcon style={{ color: '#717173', width: 40, height: 40 }} />
              </div>
            </div>
          </label>
          <div className='user__images-bg-container'>
            <label>
              <h2 className='user__images-bg-title'>Fundo</h2>
              <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} className='user__images-bg'>
                <ImageIcon style={{ color: '#717173', width: 40, height: 40 }} />
              </div>
              <input type='file' />
            </label>
          </div>
        </div>
        <Form variant='customizar' />
      </div>
    </>
  )
}