import { MouseEventHandler } from 'react';
import add from '../../images/add.webp'

interface Props{
    onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}


export default function NewPlaylistButton(props: Props){

    return(
        <button className='group flex flex-col gap-3 text-ivory
        hover:bg-jet px-2 py-3 group rounded-sm w-40'
            onClick={props.onClick}
        >
            <div className='rounded-sm
            shadow-md shadow-night 
            bg-eerie-black w-36 p-5'>
                <img src={add} 
                className='p-2 opacity-15 group-hover:opacity-100
                grayscale group-hover:grayscale-0'
                />
            </div>
            <span>New Playlist</span>
        </button>
    )
}