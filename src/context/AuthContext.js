import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../Firebase';
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    sendEmailVerification, signOut, onAuthStateChanged, sendPasswordResetEmail,
} from "firebase/auth";

const UserContext = React.createContext();


export const AuthContextProvider = (props) => {
    const [user, setUser] = useState({})

    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const verifyUser = (email) => sendEmailVerification(auth)

    const logoutUser = () => signOut(auth)

    const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const forgotPassword = (email) => sendPasswordResetEmail(auth, email)



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (curUser) => {
            setUser(curUser)

            return () => {
                unsubscribe()
            }

        })
    }, [])




    return (
        <UserContext.Provider value={{ createUser, logoutUser, loginUser, user, forgotPassword, verifyUser }}> {props.children} </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}