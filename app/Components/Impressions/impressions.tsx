"use client";

import Cookies from "js-cookie";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PostImpressions } from "@/app/lib/postImpressions";

interface CostOption {
  value: number;
}

interface ImpressionsProps {
  costs: CostOption[];
  numAcount: number | null;
}

function Impressions({ costs, numAcount }: ImpressionsProps) {
  const [pages, setPages] = useState("");
  const [cost, setCost] = useState("");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("session");
    router.push("/Login");
  };

  const handlePayment = async () => {
    const params = new URLSearchParams(searchParams.toString());

    const setError = (msg: string) => {
      params.set("error", msg);
      router.push(`${pathname}&${params.toString()}`);
    };

    if (!numAcount) {
      return setError("busca de nuevo al estudiante");
    }

    if (!pages) {
      return setError("Ingresa el numero de hojas a imprimir");
    }

    if (!cost) {
      return setError("Selecciona un costo");
    }

    const result = await PostImpressions({
      id_cuenta: numAcount,
      numero_hojas: parseInt(pages),
      monto: parseInt(cost) * parseInt(pages),
    });

    if (result.error) {
      if (result.error === "Token inválido") handleLogout();
      else {
        return setError(`Error: ${result.error}`);
      }
      return;
    }

    setPages("");
    setCost("");
    params.delete("error");
    params.set("success", "Impresion cobrada correctamente");
    router.push(`${pathname}&${params.toString()}`);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePayment();
      }}
    >
      <div className="gap">
        <div className="groupInput">
          <label className="label">Costo:</label>
          <select value={cost} onChange={(e) => setCost(e.target.value)}>
            <option value="">Selecciona el costo</option>
            {costs.map((c) => (
              <option key={c.value} value={c.value}>
                ${c.value}
              </option>
            ))}
          </select>
        </div>

        <div className="groupInput">
          <label className="label">Hojas:</label>
          <input
            type="text"
            value={pages}
            onChange={(e) => {
              const value = e.target.value;
              if (/^\d*$/.test(value)) {
                setPages(value);
              }
            }}
            placeholder="Numero de hojas a imprimir..."
            inputMode="numeric"
            pattern="[0-9]*"
          />
        </div>

        <div className="groupInput">
          <label className="label">Total:</label>
          <label
            style={{ width: "100%", minWidth: "200px", maxWidth: "500px" }}
          >
            {pages && cost && `$${parseInt(cost) * parseInt(pages)}.00`}
          </label>
        </div>

        <div className="containerButton">
          <button className="button buttonCharge" type="submit">
            Cobrar
          </button>
        </div>
      </div>
    </form>
  );
}

export default Impressions;
//IO
