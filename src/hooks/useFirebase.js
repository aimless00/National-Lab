import initilizeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

initilizeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    const setUserName = (name) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }

    const registerEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }

        });
    }, [])
    return {
        user,
        handleGoogleSignIn,
        logOut,
        registerEmailPassword,
        signInEmailPassword,
        setUserName


    }
}

export default useFirebase;