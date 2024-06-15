import { useEffect, useState } from 'react';
import home from '../images/home.webp'
import { Song } from '../shared/interfaces/Song';
import Searchbar from './helpers/Searchbar'
import SongListItem from './helpers/SongListItem'
import { getAllSongs } from '../shared/services/SongService';

export default function SongsPage(){

    const [allSongs, setAllSongs] = useState<Song[]>();

    useEffect(()=> {
        fetchAllSongs();
    }, [])

    const fetchAllSongs = () => {
        getAllSongs()
            .then((responseSongs: Song[]) => {
                setAllSongs(responseSongs);
            })
    }

    const mapSongs = allSongs?.map((s) => (
        <SongListItem
            songArtist={s.author}
            songName={s.name}
            songGenre={s.genre}
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
                    All Songs
                </h1>

            </section>

            <div className='flex flex-row gap-2 px-6 w-full justify-end'>
                <Searchbar/>
            </div>

            <div className='flex flex-col w-full md:justify-start justify-center px-1 
            overflow-y-scroll scrollb'>

                {mapSongs}

            </div>

                    
        </div>
    )
}