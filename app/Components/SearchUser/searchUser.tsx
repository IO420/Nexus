'use client'
import { useState } from "react";
import Information from "../Information/information";

function SearchUser() {
    const [numAccount, setNumAccount] = useState('');
    return (
        <>
            <form className="containerForm">
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

            <Information
            NoCuenta="idcuanta"
            Nombre="juan"
            Carrera="carrera"
            Credito="credito"
            />
        </>
    )
}

export default SearchUser