import firebaseConfig from "./config"
import { initializeApp } from "firebase/app";

const initAuth = () => {
    initializeApp(firebaseConfig)
}

export default initAuth