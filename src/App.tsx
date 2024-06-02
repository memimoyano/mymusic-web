import { useState } from 'react'
import Login from './components/Login'

function App() {

  return (
    <>
      <div className='flex bg-gradient-to-b from-eerie-black from-10%
    via-night to-dark-night flex-col h-screen w-screen max-w-screen 
      '>
        <div className='flex flex-col w-full h-full justify-center items-center'>
          <Login/>
        </div>

      </div>
    </>
  )
}

export default App
