'use client'
import { useState } from "react";

function SearchUser() {
    const [numAccount, setNumAccount] = useState('');
    return (
        <>
            <form>
                <label className='label'>No.Cuenta</label>
                <div className='groupInput'>
                    <input
                        type='text'
                        value={numAccount}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value) && value.length <= 9) {
                                setNumAccount(value);
                            }
                        }}
                        placeholder='Coloca un número de cuenta...'
                        inputMode='numeric'
                        pattern='[0-9]*'
                    />
                    <button
                        className='button buttonSearch'
                        type='submit'
                    >Buscar
                    </button>
                </div>
            </form>
            
            <div className='information'>
                <label><b>No.Cuenta: </b>id_cuenta</label>
                <label><b>Nombre: </b>nombre</label>
                <label><b>Carrera: </b>carrera</label>
                <label><b>Crédito: </b>credito</label>
            </div>
        </>
    )
}

export default SearchUser