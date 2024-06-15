import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import MainPage from './components/MainPage'
import PlaylistPage from './components/PlaylistPage'
import PlaylistsPage from './components/PlaylistsPage'
import SongsPage from './components/SongsPage'
import MyPlaylistsPage from './components/MyPlaylistsPage'
import { AuthProvider } from './shared/helpers/AuthContext'

function App() {

  return (
    <AuthProvider>
      <div className='flex bg-gradient-to-b from-eerie-black from-10% overflow-y-auto
      via-night to-dark-night flex-col h-screen w-screen max-w-screen md:py-9 md:px-10
      '> 
        <div className='flex flex-col w-full h-full justify-center items-center'>

          <Routes>

            <Route path='/' element={<MainPage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/allplaylists' element={<PlaylistsPage/>} />
            <Route path='/allmyplaylists' element={<MyPlaylistsPage/>} />
            <Route path='/allsongs' element={<SongsPage/>} />
            
          </Routes>
          
        </div>
      </div>
    </AuthProvider>
  )
}

export default App
