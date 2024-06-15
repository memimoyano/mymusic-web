import { Song } from "../shared/interfaces/Song";
import SongListItem from "./helpers/SongListItem";

interface Props{
    songList: Song[] 
    showAllLink: string
}

export default function SongsList(props: Props){

    const mapSongLi = props.songList && (props.songList).map((s) => (
        <SongListItem
            songArtist={s.author}
            songName={s.name}
            songGenre={s.genre}
        />
    ))


    return(
        <section className='flex flex-col gap-2 w-full'>

                <div className='flex flex-row items-center justify-between w-full'>
                    <h1 className='text-xl font-medium'> 
                        Songs
                    </h1>
                    <a className='text-sm hover:underline cursor-pointer' href={props.showAllLink}>
                        Show all
                    </a>
                </div>


                <ul className='flex flex-col'>
                    {mapSongLi}
                </ul>

            </section>
    )
}