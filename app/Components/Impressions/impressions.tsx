'use client'

import { useState } from "react";
import './Impressions.css'

interface CostOption {
  value: number;
}

interface ImpressionsProps {
  costs: CostOption[];
}
function Impressions({ costs }:ImpressionsProps) {
    const [pages, setPages] = useState("");
    const [cost, setCost] = useState("");

    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');
    const [showError, setShowError] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    // const handlePayment = async () => {
    //     setAlert('')
    //     setError('')
    //     if (!studentData) {
    //         setError('Error busca denuevo al estudiante');
    //         return;
    //     }
    //     if (!pages) {
    //         setError('Ingresa el numero de hojas a imprimir')
    //         return;
    //     }
    //     try {
    //         await axios.post(
    //             `${url}/impressions`,
    //             {
    //                 numAccount: numAccount,
    //                 pages: parseInt(pages),
    //                 cost: parseInt(pages),
    //             },
    //             { headers }
    //         );
    //         handleSearch()
    //         setAlert('Cobro realizado correctamente');
    //         setPages('')
    //     } catch (error) {
    //         const errorMessage = error.response?.data?.error || 'No se encontró el estudiante';

    //         if (errorMessage === 'Token inválido') {
    //             handleLogout();
    //         }

    //         setError(errorMessage);
    //     }
    // };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                // handlePayment();
            }}>
            <div className="gap">

                <div className='groupInput'>
                    <label className='label'>Costo:</label>
                    <select
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    >
                        <option value="">-- Selecciona un tiempo --</option>
                        {costs.map((c) => (
                            <option key={c.value} value={c.value}>
                                ${c.value}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='groupInput'>
                    <label className='label'>Hojas:</label>
                    <input
                        type='text'
                        value={pages}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value)) {
                                setPages(value);
                            }
                        }}
                        placeholder='Numero de hojas a imprimir...'
                        inputMode='numeric'
                        pattern='[0-9]*'
                    />
                </div>

                <div className='groupLabel'>
                    <label className='label'>Total: {pages && `$${pages}.00`}</label>
                </div>

                <div className='containerButton'>
                    <button
                        className='button buttonCharge'
                        type='submit'>
                        Cobrar
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

export default Impressions
//IO