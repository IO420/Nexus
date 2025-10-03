"use client";

import Cookies from "js-cookie";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PostImpressions } from "@/app/lib/postImpressions";
import toast from "react-hot-toast";

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

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("session");
    router.push("/Login");
  };

  const handlePayment = async () => {
    if (!numAcount) {
      toast.error("busca de nuevo al estudiante");
      return;
    }

    if (!pages) {
      toast.error("Ingresa el numero de hojas a imprimir");
      return;
    }

    if (!cost) {
      toast.error("Selecciona un costo");
      return;
    }

    const result = await PostImpressions({
      id_cuenta: numAcount,
      numero_hojas: parseInt(pages),
      monto: parseInt(cost) * parseInt(pages),
    });

    if (result.error) {
      if (result.error === "Token inválido") handleLogout();
      else {
        toast.error(result.error);
        return;
      }
      return;
    }

    setPages("");
    setCost("");
    toast.success("Impresion cobrada correctamente");
    router.refresh();
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
