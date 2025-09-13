import { Home, MapPlus, MessageCircle, Store, User, WavesLadder  } from 'lucide-react'
import React from 'react'

const HeaderComponent = ({ handleLoginToggle}) => {
  return (
    <header className='p-4 flex justify-between border-b border-primary/40 items-center'>
        <div className="Main flex gap-2 items-center">
          <Store size={30}/>
          <h1 className='text-3xl font-bold '>ValComm.2.0</h1>
        </div>
        <div className="Others">
          <nav className="Nav sm:flex gap-2 items-center hidden">
            <button>
              <Home size={30}/>
            </button>
            <button>
              <MapPlus size={30}/>
            </button>
            <button>
              <WavesLadder size={30}/>
            </button>
            <button>
              <MessageCircle size={30}/>
            </button>
            <button className='p-2 bg-primary-content rounded-full cursor-pointer' onClick={handleLoginToggle}>
              <User size={30}/>
            </button>
          </nav>
        </div>
    </header>
  )
}

export default HeaderComponent