'use client'

import { useState } from "react";
import Receipt from "../Components/Receipt/Receipt";
import SearchUser from "../Components/SearchUser/searchUser";
import "@/app/globals.css"
import Impressions from "../Components/Impressions/impressions";

export default function Page() {
  const [view, setView] = useState('impresiones');

  return (
    <section className='containerForm'>
      <h2 className='title'> IMPRESIONES Y PLOTEO </h2>
      <SearchUser />
      <section className="toggleSection">

        <div className='toggleGroup'>
          <button
            className={`toggleButton ${view === 'impresiones' ? 'active' : ''}`}
            onClick={() => setView('impresiones')}
          >
            Impresiones
          </button>
          <button
            className={`toggleButton ${view === 'recibo' ? 'active' : ''}`}
            onClick={() => setView('recibo')}
          >
            Recibo
          </button>
        </div>

        {view === 'impresiones' && (
          <Impressions />
        )}

        {view === 'recibo' && (
          <>
            <Receipt />
            <button
              className="button buttonSearch">
              Buscar
            </button>
          </>

        )}

      </section>
    </section>
  );
}
//IO