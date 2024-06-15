import { useEffect, useState } from 'react';
import home from '../images/home.webp'
import PlaylistBox from './helpers/PlaylistBox'
import { Playlist } from '../shared/interfaces/Playlist';
import { getAllPlaylists } from '../shared/services/PlaylistService';

export default function PlaylistsPage(){

    const [allPlaylists, setAllPlaylists] = useState<Playlist[]>();

    useEffect(()=> {
        fetchAllPlaylists();
    }, [])

    const fetchAllPlaylists = () => {
        getAllPlaylists()
            .then((responsePlaylists: Playlist[]) => {
                setAllPlaylists(responsePlaylists);
            })
    }
    
    const mapPlaylistsBoxs = allPlaylists?.map((p,i) => (
        <PlaylistBox
            playlist_name={p.name}
            song_count={p.songCount}
        />
    ))

    return(
        <div className="flex flex-col bg-night rounded
        text-ivory items-center w-full h-screen overflow-auto gap-4">

        <section className='flex flex-col items-center gap-4 pt-2 pb-6 px-1
            bg-gradient-to-b from-periwinkle to-night w-full justify-between 
            '>
                
            <a className='bg-eerie-black p-2 rounded-full self-start
            hover:bg-dim-gray' href='/'>
                <img src={home} className='w-5'/>
            </a>

            <h1 className='text-3xl font-bold self-start px-2'>
                All Playlists
            </h1>

        </section>

        <div className='flex flex-wrap w-full md:justify-start justify-center px-1 '>
            
            {mapPlaylistsBoxs}
                       
        </div>

                    
        </div>
    )
}