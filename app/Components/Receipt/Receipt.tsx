"use client";
import AlertBox from "../AlertBox/AlertBox";
import { useState } from "react";
import { PostReceipt } from "@/app/lib/postReceipt";
import Cookies from "js-cookie";

import "./Receipt.css";

interface ReceiptsProps {
  numAcount: number | null;
}

function Receipt({ numAcount }: ReceiptsProps) {
  const [folio, setFolio] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");

  //restrict this month//
  const day = new Date();
  const year = day.getFullYear();
  const month = day.getMonth();
  const today = day.getDate();

  const minFecha = new Date(year, month, 1).toISOString().split("T")[0];
  const maxFecha = new Date(year, month, today).toISOString().split("T")[0];
  //restrict this month//

  const handleSaveReceipt = () => {
    if (!numAcount) {
      setError("Error busca denuevo al estudiante");
      return;
    }

    if (!folio) {
      setError("Ingresa el folio del tiket");
      return;
    }

    if (!amount) {
      setError("coloca el monto a depositar");
      return;
    }

    if (!date) {
      setError("coloca la fecha");
      return;
    }

    PostReceipt({
      id_cuenta: numAcount,
      folio_recibo: folio,
      monto: Number(amount),
      fecha_recibo: date,
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSaveReceipt();
      }}
    >
      <div className="gap">
        <div className="groupInput">
          <label className="label">Ticket:</label>
          <input
            type="text"
            value={folio}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setFolio(value);
              }
            }}
            placeholder="Numero de folio..."
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>

        <div className="groupInput">
          <label className="label">Monto:</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => {
              const value = e.target.value;

              if (/^\d*\.?\d*$/.test(value)) {
                const numericValue = parseFloat(value);

                if (value === "" || numericValue <= 1000) {
                  setAmount(value);
                } else {
                  setAlert("");
                  setError("El monto no puede superar $1000.00");
                }
              }
            }}
            placeholder="Monto recibido..."
            inputMode="numeric"
            pattern="^\d*\.?\d+$"
          />
        </div>

        <div className="groupInput">
          <label className="label">Fecha de Pago:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={minFecha}
            max={maxFecha}
          />
        </div>

        <div className="containerButton">
          <button className="button buttonSearch">Guardar</button>

          {error && <AlertBox message={error} type="error" />}
          {alert && <AlertBox message={alert} type="success" />}
        </div>
      </div>
    </form>
  );
}

export default Receipt;
//IO
