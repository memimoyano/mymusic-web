import { useContext, useEffect, useState } from "react"
import { Playlist } from "../../shared/interfaces/Playlist"
import add from '../../images/ivory-add.webp'
import remove from '../../images/remove.webp'
import { deleteSongFromPlaylist, getAllMyPlaylists, getPlaylistById } from "../../shared/services/PlaylistService";
import PlaylistListItem from "./PlaylistListItem";
import { Song } from "../../shared/interfaces/Song";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../shared/helpers/AuthContext";


interface Props{
    song: Song
}

export default function SongForm(props: Props) {

    const [addSongToPlaylist, setAddSongToPlaylist] = useState(false);
    const [allMyPlaylists, setAllMyPlaylists] = useState<Playlist[]>();
    const [thisPlaylist, setThisPlaylist] = useState<Playlist>();
    const authEmail = useContext(AuthContext);
    const { playlistId } = useParams();
    

    useEffect(()=> {
        fetchPlaylist();
    }, [])

    const toggleAddSong = () => {
        setAddSongToPlaylist(!addSongToPlaylist);
        fetchAllMyPlaylists();
    }

    const fetchAllMyPlaylists = () => {
        getAllMyPlaylists()
            .then((responsePlaylists: Playlist[]) => {
                setAllMyPlaylists(responsePlaylists);
            })
    }

    const fetchPlaylist = () => {
        playlistId &&
        getPlaylistById(parseInt(playlistId))
            .then((responsePlaylist: Playlist) => {
            setThisPlaylist(responsePlaylist);
        })
    }

    function DeleteSongFromPlaylist() {
        playlistId &&
        deleteSongFromPlaylist(parseInt(playlistId),props.song.id)
        window.location.reload();
    }


    const mapPlaylistIl = allMyPlaylists && allMyPlaylists.map((p) => (
        <PlaylistListItem
            playlist={p}
            song={props.song}
        />
    ))

    return(
        <div
        className='flex flex-col gap-6 text-ivory justify-between p-4 bg-light-night'>
            
            <button onClick={toggleAddSong}
            className="flex flex-row gap-3 bg-eerie-black text-ivory items-center
            hover:bg-jet px-2 py-3 group rounded-sm w-full">
                <img src={add} className="md:w-7 w-6"/>
                <h1 className="md:text-xl text-lg ">
                    Add Song To Playlist
                </h1>
            </button>



            {addSongToPlaylist &&
                <div className="h-80 overflow-y-scroll">
                    {mapPlaylistIl}
                </div>
            }

            {(thisPlaylist && thisPlaylist.ownerEmail == authEmail) &&
                <button onClick={DeleteSongFromPlaylist}
                className="flex flex-row gap-3 bg-eerie-black text-ivory items-center
                hover:bg-jet px-2 py-3 group rounded-sm w-full">
                    <img src={remove} className="md:w-7 w-6"/>
                    <h1 className="md:text-xl text-lg flex flex-row gap-2">
                        Remove From This Playlist
                    </h1>
                </button>
            }
        </div>
    )
}