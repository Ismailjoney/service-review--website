import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import app from '../Firebase/firebase.config';



export const AuthorContext = createContext();
const auth = getAuth(app)


const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const singin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const loginProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    // const updateUserProfile =(userInfo) => {
    //     setLoading(true)
    //     return  updateProfile(auth.currentUser, userInfo)
    // }
    const logOut = () =>{
        localStorage.removeItem('service-review');
        return signOut(auth);
    }

    const emailVerify = ( ) => {
        return sendEmailVerification(auth.currentUser)

    }
    const passReset = email => {
        return sendPasswordResetEmail(auth, email)
    }


    useEffect(() => {
        setLoading(true)
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        singin,
        loginProvider,
        emailVerify,
        logOut,
        passReset,
    }
    return (
        <AuthorContext.Provider value={authInfo}>
            {children}
        </AuthorContext.Provider>
    );
};

export default AuthContext;