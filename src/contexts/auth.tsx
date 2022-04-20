import React, { ReactNode } from 'react';
import { useState, useContext, createContext, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../config/firebase-config';

type UserContextProps = {
  children: ReactNode
}

export interface AuthData {
  uid: string;
  email: string | null;
  name?: string;
};

export interface AuthContextData {
  login: (email: string, senha: string) => Promise<void>
  logout: () => void;
  authData?: AuthData;
  isLoading: boolean;
  erro: boolean;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}: UserContextProps) => {
  
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setisLoading] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const loadStorage = () =>{
      const user = JSON.parse(sessionStorage.getItem("@AuthData") || '{}');
      if(user){
        setAuthData(user);
      }else{
        return;
      }
    }
    loadStorage();
  },[])

  async function login(email:string, senha:string){
    await signInWithEmailAndPassword(auth, email, senha)
      .then((UserCredential) => {
        if(UserCredential){
          setAuthData({uid:UserCredential.user.uid, email: UserCredential.user.email});
          sessionStorage.setItem("@AuthData", JSON.stringify({uid:UserCredential.user.uid, email: UserCredential.user.email}));
        }
      })
        .catch((error) => {
          if(error){
            setErro(true);
          }
        });
  };

  console.log(authData);

  function logout() {
    setAuthData(undefined);
    sessionStorage.removeItem("@AuthData");
    return;
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

