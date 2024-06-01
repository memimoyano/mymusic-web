import { useState } from 'react'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex bg-dark-night flex-col h-screen w-screen max-w-screen'>
        
        <div className='flex flex-col w-full h-full justify-center items-center'>
          <Login/>
        </div>

      </div>
    </>
  )
}

export default App
