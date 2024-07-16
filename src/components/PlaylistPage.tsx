import mymusic_grey_icon from '../images/mymusic-grey.webp'
import home from '../images/home.webp'
import sort from '../images/sort.webp'
import SongListItem from './helpers/SongListItem'
import { useEffect, useState } from 'react';
import { Song } from '../shared/interfaces/Song';
import { getAllSongsByPlaylistId } from '../shared/services/SongService';
import { useParams } from 'react-router-dom';
import { Playlist } from '../shared/interfaces/Playlist';
import { getPlaylistById } from '../shared/services/PlaylistService';

export default function PlaylistPage(){

    const { playlistId } = useParams();
    const [playlist, setPlaylist] = useState<Playlist>();
    const [allPlaylistSongs, setAllPlaylistSongs] = useState<Song[]>();

    useEffect(()=> {
        fetchPlaylist();
        fetchAllSongs();
    }, [])

    const fetchPlaylist = () => {
        playlistId &&
        getPlaylistById(parseInt(playlistId))
            .then((response: Playlist) => {
                setPlaylist(response);
            })
    }

    const fetchAllSongs = () => {
        playlistId &&
        getAllSongsByPlaylistId(parseInt(playlistId))
            .then((responseSongs: Song[]) => {
                setAllPlaylistSongs(responseSongs);
            })
    }

    const mapSongs = allPlaylistSongs?.map((s) => (
        <SongListItem
            songArtist={s.author}
            songName={s.name}
            songGenre={s.genre}
        />
    ))

    return(
        <div className="flex flex-col bg-night rounded
        text-ivory items-center w-full h-screen overflow-auto gap-4">

    
            <section className='flex flex-col items-center gap-6 py-2 px-1 bg-
            bg-gradient-to-b from-periwinkle to-night w-full'>

                <a className='bg-eerie-black p-2 rounded-full self-start
                hover:bg-dim-gray' href='/'>
                    <img src={home} className='w-5'/>
                </a>

                <section className='flex flex-col md:flex-row w-full
                items-center gap-5 md:self-start px-3 pb-9'>
                    <div className='rounded-sm
                    shadow-md shadow-night 
                    bg-eerie-black w-40 p-1'>
                        <img src={mymusic_grey_icon} 
                        className='p-2'
                        />
                    </div>

                    <section className='flex flex-col gap-2 w-full 
                    md:self-center self-start'>
                        <h1 className='md:text-4xl text-3xl font-bold'>
                            {playlist?.name}
                        </h1>

                        <h2 className='text-sm'>
                            ● {playlist?.songCount} songs
                        </h2>
                    </section>

                </section>
                    
            </section>

            <div className='flex flex-col w-full md:justify-start justify-center px-1 '>

                {mapSongs}

            </div>

        </div>
    )
}