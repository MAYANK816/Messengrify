import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { auth } from "./firebase"

const AuthContext = React.createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
    const [loading, setloading] = useState(true)
    const [user, setuser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged((user1) => {
            setuser(user1)
            setloading(false)
            if (user1)
                navigate('/Chat');
        })
    }, [user, navigate])
    const value = { user };
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}