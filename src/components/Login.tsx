import { FormEventHandler, useState } from "react"
import close_eye from '../images/close-eye.webp';
import open_eye from '../images/open-eye.webp';
import mymusic_icon from '../images/mymusic-periwinkle-icon.webp'
import { login } from "../shared/services/AuthService";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const changePasswordVisibility = (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => (
        setShowPassword(!showPassword)
    )

    const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            setError("");
            navigate("/");
            window.location.reload();
        } catch(err) {
            setError("There was an error logging in. Please check your credentials.");
        }
    }

    return(
        <div className="flex flex-col bg-night rounded px-6 py-10 justify-between
        text-ivory items-center w-5/6 md:w-3/6 gap-5">

            <section className="flex flex-col items-center justify-between gap-1 
            border-black-olive border-b pb-5 w-full">
                <img src={mymusic_icon} className="w-1/4 md:w-1/6 md:p-3"/>
                <h1 className="font-medium flex flex-col md:gap-1
                text-center text-3xl md:text-4xl text-light-periwinkle tracking-wide">
                    Log in 
                    <span>
                        My Music
                    </span>
                </h1>
            </section>

            <form className="flex flex-col justify-between gap-8 md:w-3/4" onSubmit={onSubmit}>

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
                        onChange={e => setEmail(e.target.value)}
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
                
                {error && 
                    <div className="w-full items-center text-center text-mindaro">
                        {error}
                    </div>
                }
   
                <input type="submit" value={"Log in"} className="btn-primary"/>
            </form>

            <a href="/signup" 
            className="hover:text-periwinkle hover:cursor-pointer text-lg hover:underline underline-offset-2">
                Sign up
            </a>
        </div>
    )
}