"use client";

import { useState } from "react";
import { PostReceipt } from "@/app/lib/postReceipt";
import { useRouter } from "next/navigation";

import "./Receipt.css";

interface ReceiptsProps {
  numAcount: number | null;
}

function Receipt({ numAcount }: ReceiptsProps) {
  const router = useRouter();

  const [folio, setFolio] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //restrict this month//
  const day = new Date();
  const year = day.getFullYear();
  const month = day.getMonth();
  const today = day.getDate();

  const minFecha = new Date(year, month, 1).toISOString().split("T")[0];
  const maxFecha = new Date(year, month, today).toISOString().split("T")[0];
  //restrict this month//

  const handleSaveReceipt = async () => {
    const currentUrl = new URL(window.location.href);
    const params = new URLSearchParams();

    const setError = (msg: string) => {
      params.set("error", msg);
      router.push(`${currentUrl}&${params.toString()}`);
    };

    if (!numAcount) {
      return setError("busca de nuevo al estudiante");
    }

    if (!folio) {
      return setError("Ingresa el folio del ticket");
    }

    if (!amount) {
      return setError("Coloca el monto a depositar");
    }

    if (!date) {
      return setError("Coloca la fecha");
    }

    try {
      await PostReceipt({
        id_cuenta: numAcount,
        folio_recibo: folio,
        monto: Number(amount),
        fecha_recibo: date,
      });

      setFolio("");
      setAmount("");
      setDate("");

      params.delete("error");
      params.set("success", "Recibo guardado");
      router.push(`${currentUrl}&${params.toString()}`);
    } catch (err: any) {
      setError(String(err));
    }
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
            onChange={(error) => {
              const value = error.target.value;
              if (/^\d*$/.test(value) && value.length <= 7) {
                setFolio(value);
              }
            }}
            placeholder="Numero de tiket..."
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
                  const currentUrl = new URL(window.location.href);
                  const params = new URLSearchParams();
                  params.set("error", "El monto no puede superar $1000.00");
                  router.push(`${currentUrl}&${params.toString()}`);
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
        </div>
      </div>
    </form>
  );
}

export default Receipt;
//IO
