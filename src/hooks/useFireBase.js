import { useEffect, useState } from "react"
import { getAuth,GoogleAuthProvider,signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import initAuth from '../Firebase/init'

// config function to initialize authentication start 
initAuth()
// config function to initialize authentication end 



const useFireBase = () => {


    // states for management error and users start 
    const [user,setUser] = useState({})
    const [err,setErr] = useState('')
    // states for management error and users end 




    // google provider and authentication variables start
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // google provider and authentication variables start




    // google signin function start 
    const googleSignIn = () => {
        return signInWithPopup(auth,googleProvider)
        }
    // google signin function end 



    // using effect for changing states start 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            });
    },[])
    // using effect for changing states start 




        // logout button start 
        const logOut = () => {
            signOut(auth)
            .then(() => {
                setUser({})
                // window.location.reload()
            })
            .catch((err) => {
                setErr(err)
              });
        }
        // logout button end 
    
    
    


        
    // returning elements whitch to be used start 
    return{
        user,
        err,
        logOut,
        googleSignIn
    }
    // returning elements whitch to be used end  
}

export default useFireBase