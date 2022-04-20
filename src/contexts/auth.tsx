import React, { ReactNode } from 'react';
import { useState, useContext, createContext } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../config/firebase-config';

type UserContextProps = {
  children: ReactNode
}

export interface AuthData {
  token: string;
  email: string;
  name: string;
};

export interface AuthContextData {
  login: (email: string, senha: string) => Promise<void>
  logout: () => Promise<void>
  authData?: AuthData;
  isLoading: boolean;
  erro: boolean;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}: UserContextProps) => {
  
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setisLoading] = useState(false);
  const [erro, setErro] = useState(false);

  async function login(email:string, senha:string){
    await signInWithEmailAndPassword(auth, email, senha)
      .then((response) => console.log(response))
        .catch((error) => console.log(error))
  };

  async function logout() {
    setAuthData(undefined);
    await signOut(auth)
      .then((response) => console.log(response))
        .catch((error) => console.log(error))
  }

  return (
    <AuthContext.Provider value={{login, logout, authData, isLoading, erro}}>
      {children}
    </AuthContext.Provider>
  );

};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

