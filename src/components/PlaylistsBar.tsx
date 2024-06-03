import NewPlaylistButton from './helpers/NewPlaylistButton'
import PlaylistBox from './helpers/PlaylistBox'

interface Props{
    sectionName: string
    isNewPlaylistAvailable: boolean
}

export default function PlaylistBar(props: Props){
    return(
        <section className='flex flex-col gap-2 w-full '>
                
        <div className='flex flex-row items-center justify-between w-full'>
            <h1 className='text-xl font-medium'> 
                {props.sectionName}
            </h1>
            <a className='text-sm hover:underline '>
                Show all
            </a>
        </div>


        <div className='flex flex-row gap-0.25 overflow-x-auto'>
            
            {props.isNewPlaylistAvailable &&
                <NewPlaylistButton/>
            }

            <PlaylistBox
            playlist_name={'ᴍʏ ʟᴀꜱᴛ ʙʀᴀɪɴ ᴄᴇʟʟ'}
            />

            <PlaylistBox
            playlist_name={'400 ʙᴀᴅ ʀᴇQᴜᴇꜱᴛ'}
            />

        </div>

    </section>
    )
}