import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
        const [user,setUser]= useState(null);
        const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const signInWithEmail = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = ()=>{
            signInWithPopup(auth,googleProvider)
            .then((result)=>{
                const loggedUser = result.user;
                console.log(loggedUser);
            })
    }
    const signInWithGithub = ()=>{
            signInWithPopup(auth,githubProvider)
            .then((result)=>{
                const loggedUser = result.user;
                console.log(loggedUser);
            })
    }

    const updateUserData = (user,name,url)=>{
            updateProfile(user,{
                displayName: name,
                photoURL: url,
            })
            .then(()=>{
                //console.log('user name and url updated')
            })
            .catch(err=>{
                //console.log(err)
            })
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
             setUser(loggedUser); 
             setLoading(false);     
        })
        return ()=>{
            unsubscribe();
        }
    },[])
   // console.log(user);
    //console.log(user)
    const logOut=()=>{
        signOut(auth)
        .then()
        .catch()

    }
    
    const authInfo = {
        user,
        createUser,
        signInWithEmail,
        updateUserData,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        loading
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;