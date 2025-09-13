import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useAuth = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] =useState('');

    const changePassword = (password) => setPassword(password);
    const changeEmail = (email) => setEmail(email);
    const changeUsername = (username) => setUsername(username);


    const handleLogin = async() => {
        try {
            const res = await fetch('http://127.0.0.1:5000/api/auth/login',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email:email, password:password})
        })

            if (!res.ok){
                console.log('Error in Res', res)
                return toast.error('Error in Response !')
            }
            const data = await res.json()
            toast.success('Sucessfully Logged in!')
            console.log(data)
            }
        
        catch (e) {
            toast.error('Error While Logging in!')
            console.log('Error', e)
        }
    }
    const handleSignup = async() => {
        try {
            const res = await fetch(' http://127.0.0.1:5000/api/auth/register',{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username:username, password:password, email:email })
        })

            if (!res.ok){
                console.log('Error in Res', res)
                return toast.error('Error in Response !')
            }
            const data = await res.json()
            toast.success('Sucessfully Logged in!')
            console.log(data)
            
            }
        
        catch (e) {
            toast.error('Error While Logging in!')
            console.log('Error', e)
        }
    }

    return {
        changeEmail,
        changePassword,
        changeUsername,
        handleLogin,
        handleSignup
    }
}

export default useAuth