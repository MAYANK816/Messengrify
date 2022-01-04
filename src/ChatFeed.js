import React, { useState, useEffect } from 'react'
import { ChatEngine } from 'react-chat-engine';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useAuth } from "./AuthContext"
const ChatFeed = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [loading, setloading] = useState(true)

    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
    }
    useEffect(() => {
        if (!user) {
            navigate('/')
            return;
        }
        console.log("user", user.email);
        console.log("user", user.uid);
        axios.get('https://api.chatengine.io/users/me', {
            headers: {
                "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
                "userName": user.email,
                "userSecret": user.uid
            }
        })
            .then(() => {
                setloading(false);
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append('email', user.email);
                formdata.append('username', user.email);
                formdata.append('secret', user.uid);

                getFile(user.photoURL)
                    .then((avatar) => {
                        formdata.append('avatar', avatar, avatar.name)

                        axios.post('https://api.chatengine.io/users/',
                            formdata,
                            { headers: { "private-key": process.env.REACT_APP_CHAT_ENGINE_KEY } }
                        ).then(() => setloading(false))

                    }).catch(error => console.log(error))
            })
    }, [user, navigate])
    if (!user && loading) return "Loading..."
    console.log("cjddfj", process.env);
    return (
        <div>
            <ChatEngine
                projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
                userName={user.email}
                height='100vh'
                userSecret={user.uid}
            />
        </div>
    )
}

export default ChatFeed
