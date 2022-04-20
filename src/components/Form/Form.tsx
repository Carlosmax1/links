import { Button, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import './Form.css';
import React from 'react';

interface FormProps {
  email: string;
  senha: string;
  confirmsenha: string;
  name: string;
  username: string;
};

interface VariantForm{
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

  const[erroPass, setErroPass] = useState(false);

  const verification = () =>{
    if(formstate.senha === formstate.confirmsenha){
      setErroPass(false);
      return;
    }else{
      setErroPass(true);
      return;
    }
  }

  useEffect(() => {
    verification();
  }, [formstate.confirmsenha])

  return (
    <>
      {variant === 'login' ?
        <form className='form-login' onSubmit={(e) => e.preventDefault()}>
          <TextField className='inputs' onChange={(event) => SetFormState({ ...formstate, email: event.currentTarget?.value })} required label='Email' type='email'></TextField>
          <TextField className='inputs' onChange={(event) => SetFormState({ ...formstate, senha: event.currentTarget?.value })} required label='Senha' type='password'></TextField>
          <Button onClick={() => auth.login(formstate.email, formstate.senha)} variant='outlined' type='submit'>Login</Button>
          <Link to='/register' style={{ textDecoration: 'none' }}><Button variant='contained'>Criar conta</Button></Link>
        </form> :
        <form className='form-register'>
          <TextField className='inputs' onChange={(event) => SetFormState({ ...formstate, name: event.currentTarget?.value })} required label='Nome' type='text'></TextField>
          <TextField className='inputs' onChange={(event) => SetFormState({ ...formstate, email: event.currentTarget?.value })} required label='Email' type='email'></TextField>
          <div className='username-container'>
            <p className='username-site-text'>site/</p>
            <TextField className='inputs' onChange={(event) => SetFormState({ ...formstate, username: event.currentTarget?.value })} required label='Username' type='text'></TextField>
          </div>
          <TextField 
            className='inputs' 
            onChange={(event) => SetFormState({ ...formstate, senha: event.currentTarget?.value })} 
            required label='Senha' type='password'
            error={erroPass}
          >
          </TextField>
          <TextField 
            className='inputs' 
            onChange={(event) => SetFormState({ ...formstate, confirmsenha: event.currentTarget?.value })} 
            required label='Confimar senha' type='password'
            error={erroPass}
            helperText={erroPass &&('Senhas diferentes')}
          >
          </TextField>
          <Button disabled={erroPass} variant='contained' type='submit'>Criar conta</Button>
        </form>
      }
    </>
  );
}