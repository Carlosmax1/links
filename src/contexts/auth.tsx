import React, { ReactNode } from 'react';
import { useState, useContext, createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../config/firebase-config';

import {collection, addDoc, CollectionReference, where, query, getDocs, DocumentData} from 'firebase/firestore';
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
  nav: string;
  userData: DocumentData
  navChange: (nav: string) => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({children}: UserContextProps) => {
  
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setIsLoading] = useState(false);
  const [erro, setErro] = useState(false);
  const [nav, setNav] = useState('customizar');
  const [userData, setUserData] = useState({} as DocumentData);

  useEffect(() => {
    const loadStorage = () =>{
      const authData = JSON.parse(localStorage.getItem("@AuthData") || '{}');
      const userData = JSON.parse(localStorage.getItem("@UserData") || '{}');
      if(authData && !userData){
        setAuthData(authData);
        getUser(authData.uid);
      }else if(authData && userData){
        setAuthData(authData);
        setUserData(userData);
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
          getUser(UserCredential.user.uid);
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

  async function getUser(uid: string) {
    const UserCollection = collection(db, "users");
    const q = query(UserCollection, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserData(doc.data());
      localStorage.setItem("@UserData", JSON.stringify(doc.data()));
    });
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
    setUserData({});
    localStorage.removeItem("@AuthData");
    localStorage.removeItem("@UserData");
    return;
  };

  function navChange(nav: string){
    if(nav == 'customizar'){
      setNav('customizar');
      return;
    }
    if(nav == 'links'){
      setNav('links');
      return;
    }
    if(nav == 'social'){
      setNav('social');
      return;
    }
    if(nav == 'estatisticas'){
      setNav('estatisticas');
      return;
    }
  }

  return (
    <AuthContext.Provider value={{login, logout, register ,authData, isLoading, erro, nav, navChange, userData}}>
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

