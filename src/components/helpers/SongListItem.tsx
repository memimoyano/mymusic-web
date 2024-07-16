import song_icon from '../../images/song.webp'

interface Props{
    songName: string,
    songArtist: string
    songGenre: string
}

export default function SongListItem(props: Props){
    return(
        <li className='flex flex-row gap-3 text-ivory items-center
        hover:bg-jet px-2 py-3 group rounded-sm w-full' >
        
            <div className='rounded-sm
            shadow-md shadow-night bg-eerie-black h-15 w-14 p-3.5'>
                <img src={song_icon}/>
            </div>

            <section className='flex flex-row justify-between w-full items-center'>
                <p className='flex flex-col text-base text-wrap w-1/2'>
                    {props.songName}
                    <span className='text-sm text-gray-300'>
                        {props.songArtist}
                    </span>
                </p>

                <p className='text-md items-center text-dim-gray italic'>
                    {props.songGenre}
                </p>
            </section>




    </li>
    )
}