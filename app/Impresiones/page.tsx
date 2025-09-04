'use client';

import SearchUser from "../Components/SearchUser/searchUser";
import Receipt from "../Components/Receipt/Receipt";
import Impressions from "../Components/Impressions/impressions";
import Toggle from "../Components/Toggle/Toggle";

import "@/app/globals.css";
import Information from "../Components/Information/information";

export default function Page() {
  return (
    <section className="containerSection">
      <h2 className="title">IMPRESIONES Y PLOTEO</h2>
      <SearchUser />

      <Information
        NoCuenta="idcuanta"
        Nombre="juan"
        Carrera="carrera"
        Credito="credito"
      />

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
            content: <Impressions
              costs={[
                { value: 1 },
                { value: 2 },
              ]}
            />,
          },
          {
            key: "3",
            label: "Impresiones color",
            content: <Impressions
              costs={[
                { value: 2 },
                { value: 4 },
              ]}
            />,
          },
          {
            key: "4",
            label: "Plotter",
            content: <Impressions
              costs={[
                { value: 1 },
                { value: 2 },
              ]}
            />,
          },
          {
            key: "5",
            label: "Escaner",
            content: <Impressions
              costs={[
                { value: 1 },
                { value: 2 },
              ]} 
              />,
          },
        ]}
      />
    </section>
  );
}
//IO