import { useState } from 'react'
import search from '../../images/search.webp'

export default function Searchbar(){

    const [keyword, setKeyword] = useState<string>();

    

    return(
        <div className="flex flex-row justify-between 
                    items-center rounded-full border border-dim-gray">
            <input className="block px-2.5 py-2.5 w-full bg-night
                        text-ivory aparence-none rounded-full
                        focus:outline-none focus:ring-0 autofill:bg-night" 
                placeholder='Search'
                type="text"/>
            <button className='px-2'>
                <img src={search} className='w-5 opacity-90'/>
            </button>
        </div>
    )
}