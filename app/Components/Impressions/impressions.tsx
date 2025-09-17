"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { envConfig } from "@/app/lib/config";
import "./Impressions.css";

interface CostOption {
  value: number;
}

interface ImpressionsProps {
  costs: CostOption[];
  numAccount: number | null;
}
function Impressions({ costs, numAccount }: ImpressionsProps) {
  const [pages, setPages] = useState("");
  const [cost, setCost] = useState("");

  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");
  const [showError, setShowError] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("session");
    router.push("/Login");
  };

  const handlePayment = async () => {
    setAlert("");
    setError("");

    if (!numAccount) {
      setError("Error busca denuevo al estudiante");
      return;
    }

    if (!pages) {
      setError("Ingresa el numero de hojas a imprimir");
      return;
    }

    if(!cost){
        setError("Selecciona un costo")
        return;
    }

    const token = Cookies.get("token");
    if (!token) {
      handleLogout();
      return;
    }

    try {
      await axios.post(
        `${envConfig.apiUrl}/impressions`,
        {
          numAccount: numAccount,
          pages: parseInt(pages),
          cost: parseInt(cost) * parseInt(pages),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAlert("Cobro realizado correctamente");
      setPages("");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error || "No se encontró el estudiante";

      if (errorMessage === "Token inválido") {
        handleLogout();
      }

      setError(errorMessage);
    }
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
            <option value="">-- Selecciona un tiempo --</option>
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

        <div className="groupLabel">
          <label className="label">Total: {pages && `$${pages}.00`}</label>
        </div>

        <div className="containerButton">
          <button className="button buttonCharge" type="submit">
            Cobrar
          </button>

          {error && (
            <div className={`messageBox error ${!showError ? "hidden" : ""}`}>
              {error}
            </div>
          )}
          {alert && (
            <div className={`messageBox success ${!showAlert ? "hidden" : ""}`}>
              {alert}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default Impressions;
//IO
