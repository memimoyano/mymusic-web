import { useState } from "react"
import close_eye from '../images/close-eye.webp';
import open_eye from '../images/open-eye.webp';


export default function Login(){

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return(
        <form className="flex flex-col w-1/2 bg-night rounded p-2 justify-between
            text-ivory items-center gap-5
        ">

            <h1 className="font-bold text-5xl">
                Log in - My Music
            </h1>

            <section className="flex flex-col justify-between gap-2">
                <label htmlFor="email" className="text-3xl font-medium">
                    Email
                </label>
                <input id="email" type="text"/>
            </section>

            <section className="flex flex-col justify-between gap-2 "> 
                <label htmlFor="password">
                    Password
                </label>
               
                <div className="flex flex-row items-center gap-1">
                    <input 
                        id="password" 
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    {showPassword &&
                        <button>
                            <img src={open_eye} className="h-5 w-5"/>
                        </button>
                    }
                    {!showPassword &&
                        <button>
                            <img src={close_eye} className="h-5 w-5"/>
                        </button>
                    }
                </div>

            </section>

            <input type="submit" value={"Log in"}/>
        </form>
    )
}