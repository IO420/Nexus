'use client';

import SearchUser from "../Components/SearchUser/searchUser";
import Receipt from "../Components/Receipt/Receipt";
import Impressions from "../Components/Impressions/impressions";
import Toggle from "../Components/Toggle/Toggle";

import "@/app/globals.css";

export default function Page() {
  return (
    <section className="containerSection">
      <h2 className="title">IMPRESIONES Y PLOTEO</h2>
      <SearchUser />

      <Toggle
        defaultView="1"
        options={[
          {
            key: "1",
            label: "Recibo",
            content: <Receipt />,
          },
          {
            key: "2",
            label: "Impresiones B/N",
            content: <Impressions />,
          },
          {
            key: "3",
            label: "Impresiones color",
            content: <Impressions />,
          },
          {
            key: "4",
            label: "Plotter",
            content: <Impressions />,
          },
          {
            key: "5",
            label: "Escaner",
            content: <Impressions />,
          },
        ]}
      />
    </section>
  );
}
//IO