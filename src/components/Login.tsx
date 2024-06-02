import { useState } from "react"
import close_eye from '../images/close-eye.webp';
import open_eye from '../images/open-eye.webp';
import mymusic_icon from '../images/mymusic-periwinkle-icon.webp'


export default function Login(){

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return(
        <div className="flex flex-col w-1/2 bg-night rounded p-6 justify-between
        text-ivory items-center gap-5">

            <section className="flex flex-col items-center justify-between gap-3 
            border-black-olive border-b pb-3">
                <img src={mymusic_icon} className="w-1/6"/>
                <h1 className="font-medium text-4xl text-light-periwinkle tracking-wide">
                    Log in  My Music
                </h1>
            </section>

            <form className="flex flex-col justify-between gap-4 w-4/5">

                <section className="flex flex-col w-full justify-between gap-2">
                    <label htmlFor="email" className="text-xl font-medium">
                        Email
                    </label>
                    <input id="email" type="text" placeholder="Email"
                    className="flex flex-row h-10 box-border bg-night rounded-sm border border-ivory 
                    items-center px-1 focus:outline-periwinkle" 
                    />
                </section>

                <section className="flex flex-col w-full justify-between gap-2 "> 
                    <label htmlFor="password" className="text-xl font-medium">
                        Password
                    </label>
                
                    <div className="flex flex-row justify-between h-10
                    items-center rounded-sm border border-ivory">
                        <input 
                            id="password" 
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            className="h-9 bg-night focus:outline-none px-1 w-full"
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

                <input type="submit" value={"Log in"} className="btn-primary"/>
            </form>
        </div>
    )
}