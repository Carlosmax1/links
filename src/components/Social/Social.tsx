import './Social.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import 
{ 
  GitHub, 
  Facebook, 
  LinkedIn, 
  Twitter,
  WhatsApp,
} from '@mui/icons-material';
import { TextField } from '@mui/material';
import { hoverInput } from '../../theme/theme';

export default function Social() {
  return (
    <>
      <div className='box__social'>
        <div className='social__list-container'>
          <TextField
            label='instagram'
            className='input__social'
            sx={hoverInput}
            InputProps={{
              startAdornment: (
                <InstagramIcon sx={{ color: '#8d1373' }} />
              )
            }}
          />
          <TextField
            label='github'
            sx={hoverInput}
            className='input__social'
            InputProps={{
              startAdornment: (
                <GitHub />
              )
            }}
          />
          <TextField
            label='facebook'
            sx={hoverInput}
            className='input__social'
            InputProps={{
              startAdornment: (
                <Facebook sx={{ color: "#3b5999" }} />
              )
            }}
          />
          <TextField
            label='linkedin'
            sx={hoverInput}
            className='input__social'
            InputProps={{
              startAdornment: (
                <LinkedIn sx={{ color: "#3b5999" }} />
              )
            }}
          />
          <TextField
            label='twitter'
            sx={hoverInput}
            className='input__social'
            InputProps={{
              startAdornment: (
                <Twitter sx={{ color: '#55acee' }} />
              )
            }}
          />
          <TextField
            label='whatsapp'
            sx={hoverInput}
            className='input__social'
            type='tel'
            InputProps={{
              startAdornment: (
                <WhatsApp sx={{ color: '#4ECB5C' }} />
              )
            }}
          />
        </div>
      </div>
    </>
  )
};