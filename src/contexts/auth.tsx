import React, { ReactNode } from 'react';
import { useState, useContext, createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../config/firebase-config';
import {collection, addDoc, CollectionReference} from 'firebase/firestore';
import {db} from '../config/firebase-config';

type UserContextProps = {
  children: ReactNode
}

export interface AuthData {
  uid: string;
  email: string | null;
  name?: string;
  username?: string;
  url_profile?: string;
};

export interface AuthContextData {
  login: (email: string, senha: string) => Promise<void>
  register: (email: string, senha: string, name:string, username:string) => Promise<void>
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
      const user = JSON.parse(localStorage.getItem("@AuthData") || '{}');
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
          localStorage.setItem("@AuthData", JSON.stringify({uid:UserCredential.user.uid, email: UserCredential.user.email}));
        }
      })
        .catch((error) => {
          if(error){
            setErro(true);
          }
        });
  };

  async function saveUserDB(userCollection: CollectionReference, data: object) {
    await addDoc(userCollection, data)
      .then((response) => console.log(response))
        .catch((error) => console.log(error));
  };

  async function register(email:string, senha:string, name:string, username:string){
    await createUserWithEmailAndPassword(auth, email, senha)
      .then((response) => {
        if(response){
          const userCollection = collection(db, 'users');
          saveUserDB(userCollection, {name: name, email: email, uid:response.user.uid, username: username, url_profile: '/'})
        }
      })
        .catch((error) => console.log(error));
  };

  function logout() {
    setAuthData(undefined);
    localStorage.removeItem("@AuthData");
    return;
  };

  return (
    <AuthContext.Provider value={{login, logout, register ,authData, isLoading, erro}}>
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

