import mymusic_grey_icon from '../../images/mymusic-grey.webp'

interface Props{
    playlist_name: String
}

export default function PlaylistBox(props: Props){
    return(
        <a className='flex flex-col gap-3 text-ivory
        hover:bg-jet px-2 py-3 group rounded-sm'>
            
            <div className='rounded-sm
            shadow-md shadow-night 
            bg-eerie-black w-36 p-5'>
                <img src={mymusic_grey_icon} 
                className='p-2'
                />
            </div>
            
            <span>{props.playlist_name}</span>
        </a>
    )
}