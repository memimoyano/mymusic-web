import song_icon from '../../images/song.webp'
import dots_vertical from '../../images/dots-vertical.webp'
import { useContext, useState } from 'react'
import PopUp from './PopUp'
import SongForm from './SongForm'
import { Song } from '../../shared/interfaces/Song'
import { AuthContext } from '../../shared/helpers/AuthContext'

interface Props{
    song: Song
}

export default function SongListItem(props: Props){

    const [dropDownSelected, setDropDownSelected] = useState(false);
    const authId = useContext(AuthContext);

    const toggleDropDown = () => {
        setDropDownSelected(!dropDownSelected);
    }

    return(
    <>
        <li className='flex flex-row gap-3 text-ivory items-center
        hover:bg-jet px-2 py-3 group rounded-sm w-full group' >
        
            <div className='rounded-sm
            shadow-md shadow-night bg-eerie-black h-15 w-14 p-3.5'>
                <img src={song_icon}/>
            </div>

            <section className='flex flex-row justify-between w-full items-center'>
                <p className='flex flex-col md:text-base text-sm text-wrap md:w-1/2 w-4/6'>
                    {props.song.name}
                    <span className='md:text-sm text-xs text-gray-400'>
                        {props.song.author}
                    </span>
                </p>

                <p className='md:text-md text-sm items-center text-dim-gray italic'>
                    {props.song.genre}
                </p>
            </section>

            {authId &&
                <button onClick={toggleDropDown} 
                className='w-5 opacity-50 group-hover:opacity-100'
                >
                    <img src={dots_vertical}/>
                </button>
            }

            {!authId &&
                <a href='/login'
                className='w-5 opacity-50 group-hover:opacity-100'
                >
                    <img src={dots_vertical}/>
                </a>
            }

        </li>

        <PopUp
        label={props.song.name}
        toggleVisibility={toggleDropDown}
        isVisible={dropDownSelected}
        children={
            <SongForm
                song={props.song}
            />}
        />  

    </>
    )
}