import { createContext, useState } from "react";
import { app } from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

const AuthContext = createContext(null)
const auth = getAuth(app)

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true)

const authInfo = {
    user,
    loading
}


const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;