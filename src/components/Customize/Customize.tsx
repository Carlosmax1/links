import './Customize.css';
import PersonIcon from '@mui/icons-material/Person';
import ImageIcon from '@mui/icons-material/Image';
import Form from '../Form/Form';

export default function Customize() {

  function getFilePicture() {

  }

  return (
    <>
      <div className='box__customize'>
        <div className='user__images'>
          <div className='user__images-profile-container'>
            <h2 style={{ marginLeft: 15 }} className='user__images-profile-title'>Perfil</h2>
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} className='user__images-profile' onClick={getFilePicture}>
              <PersonIcon style={{ color: '#717173', width: 40, height: 40 }} />
            </div>
          </div>
          <div className='user__images-bg-container'>
            <h2 className='user__images-bg-title'>Fundo</h2>
            <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }} className='user__images-bg'>
              <ImageIcon style={{ color: '#717173', width: 40, height: 40 }} />
            </div>
          </div>
        </div>
        <Form variant='customizar' />
      </div>
    </>
  )
}