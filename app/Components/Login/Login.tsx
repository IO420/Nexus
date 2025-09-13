'use client';
import { useState } from "react";
import { loginUser } from "@/app/lib/login";

import "./Login.css";

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = await loginUser(user, password);

        if ("error" in data) {
            setMessage(data.error);
        } else {
            localStorage.setItem("token", data.access_token);
            setMessage("Inicio de sesión exitoso");
            console.log("Respuesta del servidor:", data);
        }
    };

    return (
        <section className='centerGrid containerSection'>

            <form
                className='login'
                onSubmit={handleLogin}
            >
                <h2 className='title'>Inicio de sesión</h2>

                <div className='containerInput'>
                    <label className='label'>Usuario</label>
                    <input
                        type='text'
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        placeholder='Coloca tu usuario...'
                    />
                </div>

                <div className='containerInput relative'>
                    <label className='label'>Contraseña</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Coloca tu contraseña...'
                    />
                    <span
                    //onClick={() => setShowPassword(!showPassword)}
                    //className={showPassword ? 'eyeOpen' : 'eyeClose'}
                    />
                </div>

                <button
                    className='button buttonSearch'
                    style={{ maxWidth: '100%', width: '100%' }}
                    type='submit'
                >Iniciar sesión
                </button>

                {message &&
                    <div
                        className={`messageBox ${message.includes('exitoso') ? 'success' : 'error'}`}
                        style={{ marginTop: '10px' }}
                    >
                        {message}
                    </div>
                }
            </form>
        </section>
    );
}

export default Login;
//IO