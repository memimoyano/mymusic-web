import { useEffect, useState } from 'react'
import PlaylistBar from './PlaylistsBar'
import SongsList from './SongsList'
import { Playlist, PlaylistRequest } from '../shared/interfaces/Playlist'
import { getAllPlaylists, getLastEightPlaylists } from '../shared/services/PlaylistService';
import PopUp from './helpers/PopUp';
import NewPlaylistForm from './helpers/NewPlaylistForm';
import { Song } from '../shared/interfaces/Song';
import { getLastFiveSongs } from '../shared/services/SongService';

export default function MainPage(){


    const [lastEightPlaylists, setLastEightPlaylists] = useState<Playlist[]>();
    const [lastFiveSongs, setLastFiveSongs] = useState<Song[]>();

    useEffect(()=> {
        fetchLastEightPlaylists();
        fetchLastFiveSongs();
    }, [])

    const fetchLastEightPlaylists = () => {
        getLastEightPlaylists()
            .then((responsePlaylists: Playlist[]) => {
                setLastEightPlaylists(responsePlaylists);
            })
    }

    const fetchLastFiveSongs = () => {
        getLastFiveSongs()
            .then((responseSongs: Song[]) => {
                setLastFiveSongs(responseSongs);
            })
    }
    

    return(
        <div className="flex flex-col bg-night rounded px-4 py-10
        text-ivory items-center w-full h-screen overflow-auto gap-8">

            
            <div className='w-full flex flex-row justify-end'>
                <button className='bg-eerie-black hover:bg-periwinkle
                hover:text-night py-2 rounded-full px-4 font-semibold'>
                    Log out
                </button>
            </div>


            <PlaylistBar
                sectionName='My Playlists'
                isNewPlaylistAvailable 
                showAllLink='/allmyplaylists'
            />

            <PlaylistBar
                sectionName='All Playlists'
                isNewPlaylistAvailable={false} 
                playlistList={lastEightPlaylists} 
                showAllLink='/allplaylists'           
                />

            <SongsList
            songList={lastFiveSongs}
            showAllLink='/allsongs'
            />


        </div>
    )
}