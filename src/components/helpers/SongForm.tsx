import { FormEventHandler, useContext, useState } from "react"
import { Playlist, PlaylistRequest } from "../../shared/interfaces/Playlist"
import add from '../../images/ivory-add.webp'
import { getAllMyPlaylists } from "../../shared/services/PlaylistService";
import PlaylistListItem from "./PlaylistListItem";
import { Song } from "../../shared/interfaces/Song";


interface Props{
    song: Song
}

export default function SongForm(props: Props) {

    const [addSongToPlaylist, setAddSongToPlaylist] = useState(false);
    const [allMyPlaylists, setAllMyPlaylists] = useState<Playlist[]>();
    
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
                <h1 className="md:text-xl text-lg">
                    Add Song To Playlist
                </h1>
            </button>

            {addSongToPlaylist &&
                <>
                    {mapPlaylistIl}
                </>
            }
        </div>
    )
}