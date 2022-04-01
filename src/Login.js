import React from 'react'
import './Login_main.css'
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons'
import firebase from 'firebase/compat/app';
import { auth } from "./firebase"
const Login = () => {
    return (
        <>
            <div className='login_chat_main'>
                <div className='login_options'>
                    <h2>Welcome to MyChat</h2>
                    <div className='login-btn google' onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                        <GoogleOutlined
                        /> SigIn with Google
                    </div>
                    <br /><br />
                 
                </div>
            </div>
        </>
    )
}

export default Login
