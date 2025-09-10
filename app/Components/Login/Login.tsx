'use client';
import { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/user", {
                usuario: user,
                password: password,
            });

            setMessage("Inicio de sesión exitoso");
            console.log("Respuesta del servidor:", response.data);
        } catch (error) {
            setMessage("Error en inicio de sesión");
            console.error("Error:", error);
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
            </form>
            {message &&
                <div
                    className={`messageBox ${message.includes('exitoso') ? 'success' : 'error'}`}
                    style={{ marginTop: '10px' }}
                >
                    {message}
                </div>
            }
        </section>
    );
}

export default Login;
//IO