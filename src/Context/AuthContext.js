import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config';
 
 

export const AuthorContext = createContext();
const auth = getAuth(app)


const AuthContext = ({children}) => {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true);

    const createUser =(email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const singin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () =>{
        return signOut(auth);
    }


    useEffect(()=>{
        setLoading(true)
        const unSubscribe = onAuthStateChanged( auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            return  unSubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        singin,
        logOut,
        loading
    }
    return (
         <AuthorContext.Provider value={authInfo}>
             {children}
         </AuthorContext.Provider>
    );
};

export default AuthContext;