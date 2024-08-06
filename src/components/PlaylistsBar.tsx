import { useContext, useState } from 'react'
import { Playlist, PlaylistRequest } from '../shared/interfaces/Playlist'
import NewPlaylistButton from './helpers/NewPlaylistButton'
import PlaylistBox from './helpers/PlaylistBox'
import PopUp from './helpers/PopUp'
import NewPlaylistForm from './helpers/NewPlaylistForm'
import { createPlaylist } from '../shared/services/PlaylistService'
import { AuthContext } from '../shared/helpers/AuthContext'
import { useNavigate } from 'react-router-dom'

interface Props{
    sectionName: string
    isNewPlaylistAvailable: boolean
    playlistList: Playlist[] 
    showAllLink: string
}

export default function PlaylistBar(props: Props){

    const navigate = useNavigate();
    const [newPlaylistSelected, setNewPlaylistSelected] = useState(false);
    const authId = useContext(AuthContext);

    const toggleNewPlaylistSelected = () => {
        if (!authId) {
            navigate("/login")
        }
        setNewPlaylistSelected(!newPlaylistSelected);
    }

    const mapPlaylistsBoxs = props.playlistList && (props.playlistList).map((p,i) => (
        <PlaylistBox
            key={p.id}
            playlist_id={p.id}
            playlist_name={p.name}
            song_count={p.songCount}
        />
    ))

  
    function submitNewPlaylist(playlist: PlaylistRequest) {
        createPlaylist(playlist)
        toggleNewPlaylistSelected();
        window.location.reload();
    }

    return(
        <section className='flex flex-col gap-2 w-full '>
                
        <PopUp
        label='New Playlist'
        toggleVisibility={toggleNewPlaylistSelected}
        isVisible={newPlaylistSelected}
        children={
            <NewPlaylistForm
                submit={submitNewPlaylist}
            />
        }
        />

        <div className='flex flex-row items-center justify-between w-full'>
            <h1 className='text-xl font-medium'> 
                {props.sectionName}
            </h1>
            <a className='text-sm hover:underline ' href={props.showAllLink}>
                Show all
            </a>
        </div>


        <div className='flex flex-row gap-1 overflow-x-auto'>
            
            {props.isNewPlaylistAvailable && 
                <NewPlaylistButton
                onClick={toggleNewPlaylistSelected}
                />
            }
      
            {mapPlaylistsBoxs}

        </div>

    </section>
    )
}