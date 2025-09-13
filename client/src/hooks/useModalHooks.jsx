import React, { useState } from 'react'

const useModalHooks = () => {
    const [isSignUpOpen, setisSignUpOpen] = useState(false);
    const [isLoginOpen, setisLoginOpen] = useState(false);
    const [isEventOpen, setisEventOpen] = useState(false);

    const handleSignUpToggle = () => setisSignUpOpen(!isSignUpOpen);
    const handleLoginToggle = () => setisLoginOpen(!isLoginOpen);
    const handleEventToggle = () => setisEventOpen(!isEventOpen)

    const handleOpenSignUp = () => {
        setisLoginOpen(false)
        setisSignUpOpen(true)
    };
    const handleOpenLogin = () => {
        setisSignUpOpen(false)
        setisLoginOpen(true)
    };

    const handleOpenEvent = () => {
        setisEventOpen(true)
    };
  

  return {
    handleLoginToggle, 
    handleSignUpToggle,
    handleEventToggle,
    handleOpenLogin, 
    handleOpenSignUp, 
    handleOpenEvent,
    isLoginOpen,
    isSignUpOpen,
    isEventOpen
    }
}

export default useModalHooks