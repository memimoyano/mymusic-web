import mymusic_grey_icon from '../../images/mymusic-grey.webp'

interface Props{
    playlist_id: number
    playlist_name: String
    song_count: number
}

export default function PlaylistBox(props: Props){
    return(
        <a className='flex flex-col gap-3 text-ivory
        hover:bg-jet px-2 py-3 group rounded-sm w-40' href={`/playlist/${props.playlist_id}`} >
            
            <div className='rounded-sm
            shadow-md shadow-night 
            bg-eerie-black w-36 p-5'>
                <img src={mymusic_grey_icon} 
                className='p-2'
                />
            </div>
            
            <div className='flex flex-col gap-0.5 '>
                <span className='text-wrap'>{props.playlist_name}</span>
                <span className='text-sm text-dim-gray'>{props.song_count} Songs</span>
            </div>

        </a>
    )
}