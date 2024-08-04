import { FormEventHandler, useState } from "react"
import { Playlist, PlaylistRequest } from "../../shared/interfaces/Playlist"
import { deletePlaylist } from "../../shared/services/PlaylistService"
import { useNavigate } from "react-router-dom";

interface Props{
    playlist: Playlist,
    submit: (playlist: PlaylistRequest) => void,
}

export default function EditPlaylistForm (props: Props) {
    const [name, setName] = useState<string>(props.playlist.name)
    const navigate = useNavigate();

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => (
        setName(e.target.value)
    )

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        if (!name) {
            return;
        }

        e.preventDefault();

        const playlist: PlaylistRequest = {
            id: 0,
            name: name
        }
        props.submit(playlist)
    }

    function removePlaylist() {
        deletePlaylist(props.playlist.id)
        navigate("/");
        window.location.reload();
    }


    return(
        <form onSubmit={submit} 
        className='flex flex-col gap-6 text-ivory justify-between p-4 h-full bg-light-night'>
            <div className="flex flex-col justify-between gap-2 items-cen">
                <label className="font-base text-md tracking-wide">
                    Name
                </label>
                <input id="email" type="text" required value={name}
                    onChange={onNameChange}
                    className="block px-2.5 pb-2.5 pt-4 w-full bg-jet
                    text-ivory aparence-none rounded-lg
                    focus:outline-none focus:ring-0 autofill:bg-jet"
                />
            </div>
            
            <div className="flex flex-row justify-between">

                <button onClick={removePlaylist} className="bg-jet px-3 py-2 rounded-full 
                font-medium tracking-wide hover:bg-mindaro hover:text-night">
                    Delete
                </button>

                <button type="submit" className="self-end bg-jet px-3 py-2 rounded-full 
                font-medium tracking-wide hover:bg-periwinkle hover:text-night"
            >
                Save
            </button>

            </div>


        </form>
    )
}