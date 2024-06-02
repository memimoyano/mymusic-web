import { useState } from "react"
import close_eye from '../images/close-eye.webp';
import open_eye from '../images/open-eye.webp';
import mymusic_icon from '../images/mymusic-periwinkle-icon.webp'


export default function Login(){

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const changePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => (
        setShowPassword(!showPassword)
    )

    return(
        <div className="flex flex-col bg-night rounded px-6 py-10 justify-between
        text-ivory items-center w-5/6 md:w-4/5 gap-5">

            <section className="flex flex-col items-center justify-between gap-3 
            border-black-olive border-b pb-5 w-full">
                <img src={mymusic_icon} className="w-1/5"/>
                <h1 className="font-medium flex flex-col gap-1
                text-center text-4xl text-light-periwinkle tracking-wide">
                    Log in 
                    <span>
                        My Music
                    </span>
                </h1>
            </section>

            <form className="flex flex-col justify-between gap-8 ">

                <section className="flex flex-col w-full justify-between gap-3 group">
                    <label htmlFor="email" className="text-xl font-medium">
                        Email
                    </label>
                    <div className="flex flex-row justify-between 
                    group-focus-within:border-periwinkle
                    items-center rounded-lg border border-dim-gray
                    ">
                        <input id="email" type="text" required
                        className="block px-2.5 pb-2.5 pt-4 w-full bg-night
                        text-ivory aparence-none rounded-lg
                        focus:outline-none focus:ring-0 autofill:bg-night"
                        />
                    </div>
                </section>

                <section className="flex flex-col w-full justify-between gap-3 group"> 
                    <label htmlFor="password" className="text-xl font-medium">
                        Password
                    </label>
                
                    <div className="flex flex-row justify-between 
                    group-focus-within:border-periwinkle
                    items-center rounded-lg border border-dim-gray
                    ">
                        <input 
                            id="password" 
                            required
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            className="block px-2.5 pb-2.5 pt-4 w-full bg-night
                            text-ivory aparence-none rounded-lg
                            focus:outline-none focus:ring-0
                            autofill:bg-none"
                        />

                        {showPassword &&
                            <button onClick={changePasswordVisibility}>
                                <img src={open_eye} className="w-14 px-2"/>
                            </button>
                        }
                        {!showPassword &&
                            <button onClick={changePasswordVisibility}>
                                <img src={close_eye} className="w-14 px-2"/>
                            </button>
                        }
                    </div>

                </section>

                <input type="submit" value={"Log in"} className="btn-primary"/>
            </form>
        </div>
    )
}