import mymusic_grey_icon from '../../images/mymusic-grey.webp'
import { PlaylistRequest } from '../../shared/interfaces/Playlist'
import add from '../../images/add.webp'
import { Song, SongRequest } from '../../shared/interfaces/Song'
import { addSongToPlaylist } from '../../shared/services/PlaylistService'

interface Props{
    playlist: PlaylistRequest,
    song: Song
}

export default function PlaylistListItem(props: Props){


    function addSongToPlaylistById() {

        const songRequest: SongRequest = {
            id: props.song.id
        }

        addSongToPlaylist(props.playlist.id,songRequest)
        window.location.reload();
    }

    return(
    <>
        <li className='flex flex-row gap-3 text-ivory items-center
        hover:bg-jet px-2 py-3 group rounded-sm w-full group' >
        
            <div className='rounded-sm
            shadow-md shadow-night 
            bg-jet group-hover:bg-eerie-black w-24 p-3'>
                <img src={mymusic_grey_icon} 
                />
            </div>

            <section className='flex flex-row justify-between items-center w-full'>
                <p className='flex flex-col text-lg text-wrap '>
                    {props.playlist.name}
                </p>

                <button className='group' onClick={addSongToPlaylistById}>
                    <img src={add} className='w-8 opacity-45 grayscale
                    group-hover:opacity-100 group-hover:grayscale-0'/>
                </button>
            </section>

        </li>
    </>
    )
}