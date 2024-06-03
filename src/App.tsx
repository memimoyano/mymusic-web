import Login from './components/Login'
import MainPage from './components/MainPage'

function App() {

  return (
    <>
      <div className='flex bg-gradient-to-b from-eerie-black from-10% overflow-y-auto
      via-night to-dark-night flex-col h-screen w-screen max-w-screen md:py-9 md:px-10
      '> 
        <div className='flex flex-col w-full h-full justify-center items-center'>
          {/*
              <Login/>
           */}
          <MainPage/>
        </div>
      
      </div>
    </>
  )
}

export default App
