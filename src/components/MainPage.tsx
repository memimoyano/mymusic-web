import PlaylistBar from './PlaylistsBar'
import SongsList from './SongsList'

export default function MainPage(){

    return(
        <div className="flex flex-col bg-night rounded px-4 py-10
        text-ivory items-center w-full h-screen overflow-auto gap-8">
            
            <PlaylistBar
                sectionName='My Playlists'
                isNewPlaylistAvailable 
            />

            <PlaylistBar
                sectionName='All Playlists' 
                isNewPlaylistAvailable={false}            
            />

            <SongsList/>

        </div>
    )
}