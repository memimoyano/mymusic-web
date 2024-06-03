import song_icon from '../../images/song.webp'

interface Props{
    SongName: string,
    SongArtist: string
}

export default function SongListItem(props: Props){
    return(
        <li className='flex flex-row gap-3 text-ivory items-center
        hover:bg-jet px-2 py-3 group rounded-sm ' >
        
            <div className='rounded-sm
            shadow-md shadow-night bg-eerie-black h-15 w-14 p-3.5'>
                <img src={song_icon}/>
            </div>

            <p className='flex flex-col text-base'>
                {props.SongName}
                <span className='text-sm'>
                    {props.SongArtist}
                </span>
            </p>

    </li>
    )
}