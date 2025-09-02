import "./Login.css";

function Login() {
    return (
        <section className='containerSection'>

            <form
                className='login'
                //onSubmit={(e) => {
                    //e.preventDefault();
                    //handleLogin();
                //</section>}}
            >
                <h2 className='textHeader'>Inicio de sesión</h2>

                <div className='containerInput'>
                    <label className='label'>Usuario</label>
                    <input
                        type='text'
                        //value={user}
                        //onChange={(e) => setUser(e.target.value)}
                        placeholder='Coloca tu usuario...'
                    />
                </div>

                <div className='containerInput relative'>
                    <label className='label'>Contraseña</label>
                    <input
                        //type={showPassword ? 'text' : 'password'}
                        //value={password}
                        //onChange={(e) => setPassword(e.target.value)}
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
            {/*message &&
                <div
                    className={`messageBox ${message.includes('exitoso') ? 'success' : 'error'}`}
                    style={{ marginTop: '10px' }}
                >
                    {message}
                </div>
            */}
        </section>
    );
}

export default Login;