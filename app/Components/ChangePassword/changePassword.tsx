
function ChangePassword() {
    return (
        <section className='center containerSection'>

            <form
                className='login'
            //onSubmit={(e) => {
            //e.preventDefault();
            //handleLogin();
            //</section>}}
            >

                <div className='containerInput relative'>
                    <label className='label'>Contraseña actual</label>
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

                <div className='containerInput relative'>
                    <label className='label'>Nueva contraseña</label>
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

                <div className='containerInput relative'>
                    <label className='label'>Confirmar la contraña</label>
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

                <div className="containerButton">
                    <button
                        className='button buttonSearch'
                        style={{ maxWidth: '100%', width: '100%' }}
                        type='submit'
                    >Confirmar
                    </button>

                    <button
                        className='button buttonSearch'
                        style={{ maxWidth: '100%', width: '100%' }}
                        type='submit'
                    >Cancelar
                    </button>
                </div>
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
    )
}

export default ChangePassword