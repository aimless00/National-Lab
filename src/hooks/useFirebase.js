import initilizeAuthentication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
        signInEmailPassword


    }
}

export default useFirebase;