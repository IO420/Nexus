"use client";

import { useState } from "react";
import { PostReceipt } from "@/app/lib/postReceipt";
import { useRouter } from "next/navigation";

import "./Receipt.css";

interface ReceiptsProps {
  urlBase: string;
  numAcount: number | null;
}

function Receipt({ urlBase, numAcount }: ReceiptsProps) {
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
    if (!numAcount) {
      router.push(
        `${urlBase}?numAcount=${numAcount}&error=Error busca denuevo al estudiante`
      );
      return;
    }

    if (!folio) {
      router.push(
        `${urlBase}?numAcount=${numAcount}&error=Ingresa el folio del tiket`
      );
      return;
    }

    if (!amount) {
      router.push(
        `${urlBase}?numAcount=${numAcount}&error=coloca el monto a depositar`
      );
      return;
    }

    if (!date) {
      router.push(`${urlBase}?numAcount=${numAcount}&error=coloca la fecha`);
      return;
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

      router.push(`${urlBase}?numAcount=${numAcount}&success=Recibo guardado`);
    } catch (err: any) {
      console.error(err);
      router.push(`${urlBase}?numAcount=${numAcount}&error=${err}`);
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
                  router.push(
                    `${urlBase}?numAcount=${numAcount}&error=El monto no puede superar $1000.00`
                  );
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
