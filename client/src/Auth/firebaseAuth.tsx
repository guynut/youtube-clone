import React, { ReactNode } from 'react';
import { auth, provider } from './FirebaseConfig';
import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signInWithRedirect, User as FirebaseUser } from 'firebase/auth';
import { FierbaseUser } from '../data/types';

interface AuthContextType {
  currentUser: FierbaseUser | null;
}

export const AuthContext = createContext<AuthContextType>({ currentUser: null });

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FierbaseUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: FirebaseUser | null) => {
      if (user) {
        const { uid, email, displayName } = user;
        setCurrentUser({ uid, email: email || '', displayName: displayName || '' });
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const SignInButton: React.FC = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        try {
            await signInWithRedirect(auth, provider);
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <button className="w-fit p-2 px-4 rounded-full bg-neutral-700 text-white ring-1 ring-blue-500" onClick={signInWithGoogle}>
            <img src="/public/icons/icon-google.svg" alt="" /> Sign in with Google
        </button>
    );
};

export const signInFirebase = async () => {
  try {
      await signInWithRedirect(auth, provider);
  } catch (err) {
      console.error(err);
  }
};
