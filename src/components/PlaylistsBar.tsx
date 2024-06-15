import { useState } from 'react'
import { Playlist } from '../shared/interfaces/Playlist'
import NewPlaylistButton from './helpers/NewPlaylistButton'
import PlaylistBox from './helpers/PlaylistBox'
import PopUp from './helpers/PopUp'
import NewPlaylistForm from './helpers/NewPlaylistForm'

interface Props{
    sectionName: string
    isNewPlaylistAvailable: boolean
    playlistList: Playlist[] 
    showAllLink: string
}

export default function PlaylistBar(props: Props){

    const [newPlaylistSelected, setNewPlaylistSelected] = useState(false);

    const toggleNewPlaylistSelected = () => {
        setNewPlaylistSelected(!newPlaylistSelected);
    }

    const mapPlaylistsBoxs = props.playlistList && (props.playlistList).map((p,i) => (
        <PlaylistBox
            playlist_name={p.name}
            song_count={p.songCount}
        />
    ))

    return(
        <section className='flex flex-col gap-2 w-full '>
                
        <PopUp
        label='New Playlist'
        toggleVisibility={toggleNewPlaylistSelected}
        isVisible={newPlaylistSelected}
        children={
            <NewPlaylistForm
                            
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