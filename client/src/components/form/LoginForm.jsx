import React from 'react'
import { buttonStyles } from '../../styles/buttonstyles'
import { EyeClosed, Minus, Plus } from 'lucide-react'
import { inputStyles } from '../../styles/inputStyles'
import { textStyles } from '../../styles/textStyles'
import useAuth from '../../hooks/useAuth'

const LoginForm = ({changeForm}) => {
    const {handleLogin, changePassword, changeEmail} = useAuth();

  return (
    <div className="Form flex flex-col p-2 gap-4 justify-center items-center ">
        <h1 className='text-3xl font-bold text-center'>Login Form</h1>
        <div className="Main p-2 flex flex-col gap-2">
            <div className="Email">
                <label htmlFor="forEmail" className='text-xl font-semibold'>Email 📧:</label>
                <input 
                type="text" 
                name="Email" 
                id="email" 
                placeholder='Enter Your email!'
                className={inputStyles.formInput}
                onChange={(e) => changeEmail(e.target.value)}/>
            </div>
            <div className="Password ">
                <label htmlFor="forPassword" className='text-xl font-semibold'>Password 🔑:</label>
                <input 
                type="text" 
                name="password" 
                id="password" 
                placeholder='Enter Your Password!'
                className={inputStyles.formInput}
                onChange={(e) => changePassword(e.target.value)}/>
                
            </div>
        </div>
        <div className="Others flex flex-col gap-2">
            <div className="Actions flex justify-center items-center gap-2">
                <button className={buttonStyles.primaryButton} onClick={handleLogin}>
                    <Plus size={25}/>
                    <span>Sumbit</span>
                </button>
                <button className={buttonStyles.secondaryButton}>
                    <Plus className='rotate-45' size={25}/>
                    <span>Cancel</span>
                </button>
            </div>
            <button>
                <span className={textStyles.linkStyle} onClick={changeForm}>
                    Don't have an Account?
                </span>
            </button>
        </div>
    </div>
  )
}

export default LoginForm