'use client'
import { useEffect, useState } from "react";
import "./Receipt.css"

function Receipt() {
    const [folio, setFolio] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');
    const [showError, setShowError] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    //restrict this month//
    const day = new Date();
    const year = day.getFullYear();
    const month = day.getMonth();
    const today = day.getDate();

    const minFecha = new Date(year, month, 1).toISOString().split('T')[0];
    const maxFecha = new Date(year, month, today).toISOString().split('T')[0];
    //restrict this month//

    //fadeOut alert and error 
    useEffect(() => {
        if (alert) {
            setShowAlert(true);
            const timeout = setTimeout(() => {
                setShowAlert(false);
                setTimeout(() => setAlert(''), 500);
            }, 6000);
            return () => clearTimeout(timeout);
        }
    }, [alert]);

    useEffect(() => {
        if (error) {
            setShowError(true);
            const timeout = setTimeout(() => {
                setShowError(false);
                setTimeout(() => setError(''), 500);
            }, 6000);
            return () => clearTimeout(timeout);
        }
    }, [error]);
    //fadeOut alert and error//

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                // handleSaveReceipt();
            }}
        >

            <div className="gap">


                <div className='groupInput'>
                    <label className='label'>Folio:</label>
                    <input
                        type='text'
                        value={folio}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                                setFolio(value);
                            }
                        }}
                        placeholder='Numero de folio...'
                        inputMode='numeric'
                        pattern='[0-9]*'
                    />
                </div>

                <div className='groupInput'>
                    <label className='label'>Monto:</label>
                    <input
                        type='text'
                        value={amount}
                        onChange={(e) => {
                            const value = e.target.value;

                            if (/^\d*\.?\d*$/.test(value)) {
                                const numericValue = parseFloat(value);

                                if (value === '' || (numericValue <= 1000)) {
                                    setAmount(value);
                                } else {
                                    setAlert('')
                                    setError('El monto no puede superar $1000.00')
                                }
                            }
                        }}
                        placeholder='Monto recibido...'
                        inputMode='numeric'
                        pattern="^\d*\.?\d+$"
                    />
                </div>

                <div className='groupInput'>
                    <label className='label'>Fecha de Pago:</label>
                    <input
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={minFecha}
                        max={maxFecha}
                    />
                </div>

                <div className='containerButton'>
                    <button
                        className="button buttonSearch">
                        Guardar
                    </button>

                    {error &&
                        <div className={`messageBox error ${!showError ? 'hidden' : ''}`}>
                            {error}
                        </div>
                    }
                    {alert &&
                        <div className={`messageBox success ${!showAlert ? 'hidden' : ''}`}>
                            {alert}
                        </div>
                    }
                </div>
            </div>
        </form>
    )
}

export default Receipt
//IO