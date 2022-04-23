import { Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import { hoverInput, buttonStyle } from '../../theme/theme';
import './Form.css';
import React from 'react';

interface FormProps {
  email: string;
  senha: string;
  confirmsenha: string;
  name: string;
  username: string;
};
interface VariantForm {
  variant?: 'login' | 'register';
}

export default function Form({ variant }: VariantForm) {

  const auth = useAuth();

  const [formstate, SetFormState] = useState<FormProps>({
    email: '',
    senha: '',
    name: '',
    username: '',
    confirmsenha: '',
  });

  const [erroPass, setErroPass] = useState(false);

  const verification = () => {
    if (formstate.senha === formstate.confirmsenha) {
      setErroPass(false);
      return;
    } else {
      setErroPass(true);
      return;
    }
  };

  useEffect(() => {
    verification();
  }, [formstate.confirmsenha])

  return (
    <>
      {variant === 'login' ?
        <form className='form-login' onSubmit={(e) => e.preventDefault()}>
          <TextField
            color='primary' className='inputs'
            onChange={(event) => SetFormState({ ...formstate, email: event.currentTarget?.value })}
            required
            label='Email'
            type='email'
            sx={hoverInput}
          >
          </TextField>
          <TextField className='inputs'
            onChange={(event) => SetFormState({ ...formstate, senha: event.currentTarget?.value })}
            required
            label='Senha'
            type='password'
            sx={hoverInput}
          >
          </TextField>
          <Button
            className='btn-login'
            onClick={() => auth.login(formstate.email, formstate.senha)} variant='outlined'
            type='submit'
            color='secondary'
            sx={buttonStyle}
          >
            Login</Button>
          <Link to='/register' style={{ textDecoration: 'none' }}><Button variant='contained' className='btn-createA'sx={buttonStyle} color='primary'>Criar conta</Button></Link>
          <span className='forget__pass'>Esqueci minha senha</span>
        </form> :
        <form className='form-register' onSubmit={(e) => e.preventDefault()} >
          <TextField sx={hoverInput} className='inputs' onChange={(event) => SetFormState({ ...formstate, name: event.currentTarget?.value })} required label='Nome' type='text'></TextField>
          <TextField sx={hoverInput} className='inputs' onChange={(event) => SetFormState({ ...formstate, email: event.currentTarget?.value })} required label='Email' type='email'></TextField>
          <div className='username-container'>
            <p className='username-site-text' style={{
              color: "#bdbdbd"
            }}>site/</p>
            <TextField sx={hoverInput} className='inputs' onChange={(event) => SetFormState({ ...formstate, username: event.currentTarget?.value })} required label='Username' type='text'></TextField>
          </div>
          <TextField
            className='inputs'
            onChange={(event) => SetFormState({ ...formstate, senha: event.currentTarget?.value })}
            required label='Senha' type='password'
            error={erroPass}
            sx={hoverInput} 
          >
          </TextField>
          <TextField
            className='inputs'
            onChange={(event) => SetFormState({ ...formstate, confirmsenha: event.currentTarget?.value })}
            required label='Confimar senha' type='password'
            error={erroPass}
            helperText={erroPass && ('Senhas diferentes')}
            sx={hoverInput} 
          >
          </TextField>
          <Button onClick={() => auth.register(formstate.email, formstate.senha, formstate.name, formstate.username)} disabled={erroPass} variant='contained' sx={buttonStyle} className='btn-createA' type='submit'>Criar conta</Button>
        </form>
      }
    </>
  );
};