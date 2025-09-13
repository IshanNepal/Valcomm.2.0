import { Plus } from 'lucide-react'
import React from 'react'

const BasicModalComponent = ({children, onClose}) => {
  return (
    <div className="Container inset-0 bg-black/25 flex justify-center items-center w-full h-full absolute ">
      <div className="Modal bg-base-300 shadow-md p-2 w-fit h-fit rounded-md relative">
        <button className='absolute left-[90%]' onClick={onClose}>
          <Plus className='rotate-45'/>
        </button>
        {children}
      </div>
    </div>
  )
}

export default BasicModalComponent