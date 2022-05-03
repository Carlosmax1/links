import './Social.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import {
  GitHub,
  Facebook,
  LinkedIn,
  Twitter,
  WhatsApp,
  YouTube,
  Reddit,
} from '@mui/icons-material';
import { TextField } from '@mui/material';

const hoverInputSocial = {
  '& .MuiOutlinedInput-root': {
    fontSize: 19,
    ':hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: "#55048B",
      }
    }
  },
  '& .MuiInputLabel-root': {
    fontSize: 18,
  },
  '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: "#717173",
  },
  '& .MuiInputLabel-root.Mui-disabled': {
    color: '#717173'
  },
  margin: 2
}

export default function Social() {
  return (
    <>
      <div className='box__social'>
        <div className='social__list-container'>
          <TextField
            label='instagram'
            className='input__social'
            sx={hoverInputSocial}
            InputProps={{
              startAdornment: (
                <InstagramIcon sx={{ color: '#8d1373' }} />
              )
            }}
          />
          <TextField
            label='github'
            sx={hoverInputSocial}
            className='input__social'
            InputProps={{
              startAdornment: (
                <GitHub />
              )
            }}
          />
          <TextField
            label='facebook'
            sx={hoverInputSocial}
            className='input__social'
            InputProps={{
              startAdornment: (
                <Facebook sx={{ color: "#3b5999" }} />
              )
            }}
          />
          <TextField
            label='linkedin'
            sx={hoverInputSocial}
            className='input__social'
            InputProps={{
              startAdornment: (
                <LinkedIn sx={{ color: "#0A66C2" }} />
              )
            }}
          />
          <TextField
            label='twitter'
            sx={hoverInputSocial}
            className='input__social'
            InputProps={{
              startAdornment: (
                <Twitter sx={{ color: '#55acee' }} />
              )
            }}
          />
          <TextField
            label='whatsapp'
            sx={hoverInputSocial}
            className='input__social'
            type='tel'
            InputProps={{
              startAdornment: (
                <WhatsApp sx={{ color: '#4ECB5C' }} />
              )
            }}
          />
          <TextField
            label='youtube'
            sx={hoverInputSocial}
            className='input__social'
            InputProps={{
              startAdornment: (
                <YouTube sx={{ color: '#EF4444' }} />
              )
            }}
          />
          <TextField
            label='reddit'
            sx={hoverInputSocial}
            className='input__social'
            InputProps={{
              startAdornment: (
                <Reddit sx={{ color: '#FF4500' }} />
              )
            }}
          />
          <TextField
            label='discord'
            sx={hoverInputSocial}
            className='input__social'
          />
          <TextField
            label='tiktok'
            sx={hoverInputSocial}
            className='input__social'
          />
          <TextField
            label='spotify'
            sx={hoverInputSocial}
            className='input__social'
          />
        </div>
      </div>
    </>
  )
};