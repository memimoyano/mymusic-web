import mymusic_grey_icon from '../images/mymusic-grey.webp'
import home from '../images/home.webp'
import sort from '../images/sort.webp'
import SongListItem from './helpers/SongListItem'
import { useContext, useEffect, useState } from 'react';
import { Song } from '../shared/interfaces/Song';
import { getAllSongsByPlaylistId, getSearchSongsByPlaylistId } from '../shared/services/SongService';
import { useParams } from 'react-router-dom';
import { Playlist, PlaylistRequest } from '../shared/interfaces/Playlist';
import { getPlaylistById, updatePlaylist } from '../shared/services/PlaylistService';
import { AuthContext } from '../shared/helpers/AuthContext';
import EditPlaylistForm from './helpers/EditPlaylistForm';
import PopUp from './helpers/PopUp';
import Searchbar from './helpers/Searchbar';

export default function PlaylistPage(){

    const { playlistId } = useParams();
    const [playlist, setPlaylist] = useState<Playlist>();
    const [allPlaylistSongs, setAllPlaylistSongs] = useState<Song[]>();
    const authEmail = useContext(AuthContext);
    const [editPlaylistSelected, setEditPlaylistSelected] = useState(false);

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
            song={s}
        />
    ))

    const toggleEditPlaylistSelected = () => {
        setEditPlaylistSelected(!editPlaylistSelected);
    }

    function submitEditPlaylist(playlist: PlaylistRequest) {
        playlistId &&
        updatePlaylist(parseInt(playlistId),playlist)
        toggleEditPlaylistSelected();
        window.location.reload();
    }

    const submitSearchSong = (s: string) => {
        playlistId &&
        getSearchSongsByPlaylistId(parseInt(playlistId),s)
        .then((responseSongs: Song[]) => {
            setAllPlaylistSongs(responseSongs);
        })
    }

    return(
        <div className="flex flex-col bg-night rounded
        text-ivory items-center w-full h-screen overflow-auto gap-4">

            <PopUp
            label='Edit Playlist'
            toggleVisibility={toggleEditPlaylistSelected}
            isVisible={editPlaylistSelected}
            children={
                <EditPlaylistForm
                    submit={submitEditPlaylist}
                    playlist={playlist}
                />
            }
            />
    
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
                {authEmail == playlist?.ownerEmail &&
                    <button className='flex flex-col gap-3 w-full 
                    md:self-center self-start' onClick={toggleEditPlaylistSelected}>
                        <h1 className='md:text-4xl text-3xl text-wrap truncate font-bold text-start'>
                            {playlist?.name}
                        </h1>

                        <h2 className='text-sm text-gray-300'>
                            {playlist?.ownerEmail} ● {playlist?.songCount} songs
                        </h2>
                    </button>
                }
                {authEmail != playlist?.ownerEmail &&
                    <div className='flex flex-col gap-3 w-full 
                    md:self-center self-start cursor-default'>
                        <h1 className='md:text-4xl text-3xl font-bold'>
                            {playlist?.name}
                        </h1>

                        <h2 className='text-sm text-gray-300'>
                            {playlist?.ownerEmail} ● {playlist?.songCount} songs
                        </h2>
                    </div>
                }
                </section>
                    
            </section>

            <div className='flex flex-col w-full md:justify-start justify-center px-1 '>

                <div className='flex flex-row gap-2 px-6 w-full justify-end'>
                    <Searchbar 
                    submit={submitSearchSong}
                    />
                </div>

                {mapSongs}

            </div>
            

        </div>
    )
}