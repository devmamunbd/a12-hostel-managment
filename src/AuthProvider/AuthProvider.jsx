/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase.init"


 export const AuthContext = createContext(null)
 const googlrProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    //createUser
  const createUser =(email, password)=> {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }  


    //singIn
    const singIn=(email, password)=> {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }

    //updateUser
    const updateUserProfile=(name, photo)=> {
      setLoading(true)
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo
      })
    }

    //googleLogin
    const googleLogin =()=> {
      setLoading(true)
      return signInWithPopup(auth, googlrProvider)
    }

    //logOut
    const logOut=()=> {
      setLoading(true)
      return signOut(auth)
    }

    //onAuthStateChanged
    useEffect(()=> {
      const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser)
        console.log('current user', currentUser)
        setLoading(false)
      });
      return()=> {
        return unSubscribe()
      }
    },[])


    const authInfo = {user,loading, createUser, singIn,updateUserProfile,googleLogin,logOut}

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider