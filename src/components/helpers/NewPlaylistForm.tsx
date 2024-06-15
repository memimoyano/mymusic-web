import { useState } from "react"
import { Playlist, PlaylistRequest } from "../../shared/interfaces/Playlist"

interface Props{
    playlist: PlaylistRequest
    submit: (playlist: PlaylistRequest) => void,
}

export default function NewPlaylistForm (props: Props) {

    const [name, setName] = useState<string>()

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => (
        setName(e.target.value)
    )

    const submit = (e: any) => {
        
        e.preventDefault();

        const playlist: PlaylistRequest = {
            id: 0,
            name: name
        }
        props.submit(playlist)
    }

    return(
        <form onSubmit={submit} 
        className='flex flex-col gap-6 text-ivory justify-between p-4 h-full bg-light-night'>
            <div className="flex flex-col justify-between gap-2 items-cen">
                <label className="font-base text-md tracking-wide">
                    Name
                </label>
                <input id="email" type="text" required
                            className="block px-2.5 pb-2.5 pt-4 w-full bg-jet
                            text-ivory aparence-none rounded-lg
                            focus:outline-none focus:ring-0 autofill:bg-jet"
                            />
            </div>

            <button className="self-end bg-jet px-3 py-2 rounded-full 
            font-medium tracking-wide hover:bg-periwinkle hover:text-night">
                Create
            </button>

        </form>
    )
}