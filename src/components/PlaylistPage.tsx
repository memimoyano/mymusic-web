import mymusic_grey_icon from '../images/mymusic-grey.webp'
import home from '../images/home.webp'
import sort from '../images/sort.webp'
import SongListItem from './helpers/SongListItem'

export default function PlaylistPage(){
    return(
        <div className="flex flex-col bg-night rounded
        text-ivory items-center w-full h-screen overflow-auto gap-4">

    
            <section className='flex flex-col items-center gap-2 py-2 px-1
            bg-gradient-to-b from-periwinkle to-night w-full
            '>

                <a className='bg-eerie-black p-2 rounded-full self-start
                hover:bg-dim-gray'>
                    <img src={home} className='w-5'/>
                </a>

                <div className='rounded-sm
                shadow-md shadow-night 
                bg-eerie-black w-32 p-1'>
                    <img src={mymusic_grey_icon} 
                    className='p-2'
                    />
                </div>

                <h1 className='text-3xl font-bold'>
                    ᴍʏ ʟᴀꜱᴛ ʙʀᴀɪɴ ᴄᴇʟʟ
                </h1>
                    
            </section>

            <SongListItem
            SongName='Black Dog'
            SongArtist='Led Zeppelin'
            />

        </div>
    )
}