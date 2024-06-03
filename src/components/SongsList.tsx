import SongListItem from "./helpers/SongListItem";


export default function SongsList(){
    return(
        <section className='flex flex-col gap-2 w-full'>

                <div className='flex flex-row items-center justify-between w-full'>
                    <h1 className='text-xl font-medium'> 
                        Songs
                    </h1>
                    <a className='text-sm hover:underline cursor-pointer'>
                        Show all
                    </a>
                </div>


                <ul className='flex flex-col'>
                    
                    <SongListItem
                    SongArtist="Megadeth"
                    SongName="Peace Sells"
                    />

                    <SongListItem
                    SongArtist="Dio"
                    SongName="Holy Diver"
                    />
                </ul>

            </section>
    )
}