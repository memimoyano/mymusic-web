import { useContext, useEffect, useState } from 'react'
import PlaylistBar from './PlaylistsBar'
import SongsList from './SongsList'
import { Playlist } from '../shared/interfaces/Playlist'
import { getLastEightPlaylists, getMyLastEightPlaylists } from '../shared/services/PlaylistService';
import { Song } from '../shared/interfaces/Song';
import { getLastFiveSongs } from '../shared/services/SongService';
import { AuthContext, TOKEN_STORAGE_KEY } from '../shared/helpers/AuthContext';
import { logout } from '../shared/services/AuthService';

export default function MainPage(){


    const [lastEightPlaylists, setLastEightPlaylists] = useState<Playlist[]>();
    const [myLastEightPlaylists, setMyLastEightPlaylists] = useState<Playlist[]>();
    const [lastFiveSongs, setLastFiveSongs] = useState<Song[]>();
    const authId = useContext(AuthContext);

    useEffect(()=> {
        fetchLastEightPlaylists();
        fetchLastFiveSongs();
        fetchMyLastEightPlaylists();
    }, [])

    const fetchLastEightPlaylists = () => {
        getLastEightPlaylists()
            .then((responsePlaylists: Playlist[]) => {
                setLastEightPlaylists(responsePlaylists);
            })
    }

    const fetchMyLastEightPlaylists = () => {
        getMyLastEightPlaylists()
            .then((responsePlaylists: Playlist[]) => {
                setMyLastEightPlaylists(responsePlaylists);
            })
    }

    const fetchLastFiveSongs = () => {
        getLastFiveSongs()
            .then((responseSongs: Song[]) => {
                setLastFiveSongs(responseSongs);
            })
    }


    return(
        <div className="flex flex-col bg-night rounded md:px-4 px-2 py-10
        text-ivory items-center w-full h-screen overflow-auto gap-8">

            {authId &&
            <div className='w-full flex flex-row justify-end'>
                <button 
                onClick={() => {
                    localStorage.removeItem(TOKEN_STORAGE_KEY);
                    window.location.reload();
                }}
                className='bg-eerie-black hover:bg-periwinkle
                hover:text-night py-2 rounded-full px-4 font-semibold'>
                    Log out
                </button>
            </div>
            }

            <PlaylistBar
                sectionName='My Playlists'
                isNewPlaylistAvailable 
                showAllLink={authId ? '/allmyplaylists' : "/login"}
                playlistList={myLastEightPlaylists || []}
            />

            <PlaylistBar
                sectionName='All Playlists'
                isNewPlaylistAvailable={false} 
                playlistList={lastEightPlaylists || []} 
                showAllLink='/allplaylists'           
                />

            <SongsList
            songList={lastFiveSongs || []}
            showAllLink='/allsongs'
            />


        </div>
    )
}