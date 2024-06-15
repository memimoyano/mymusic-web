import { useState } from 'react'
import search from '../../images/search.webp'

interface Props{
    submit: (keyword: string) => void
}

export default function Searchbar(props: Props){

    const [keyword, setKeyword] = useState<string>("");

    const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => (
        setKeyword(e.target.value)
    )

    const submit = (e: any) => {
        e.preventDefault();
        console.log(keyword)


        props.submit(keyword)
    }

    return(
        <form onSubmit={submit} id="seachform" className="flex flex-row justify-between 
                    items-center rounded-full border border-dim-gray">
            <input className="block px-2.5 py-2.5 w-full bg-night
                        text-ivory aparence-none rounded-full
                        focus:outline-none focus:ring-0 autofill:bg-night" 
                placeholder='Search'
                type="text" 
                value={keyword} 
                id="search"
                onChange={onKeywordChange}
                />
            <button onClick={submit} className='px-2' id='searchButton'>
                <img src={search} className='w-5 opacity-90'/>
            </button>
        </form>
    )
}