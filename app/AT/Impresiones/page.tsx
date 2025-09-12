'use client';

import SearchUser from "../../Components/SearchUser/searchUser";
import Receipt from "../../Components/Receipt/Receipt";
import Impressions from "../../Components/Impressions/impressions";
import Toggle from "../../Components/Toggle/Toggle";

import "@/app/globals.css";
import Information from "../../Components/Information/information";

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
                { value: 4 },
                { value: 5 },
                { value: 6 },
                { value: 7 },
                { value: 8 },
                { value: 10 },
                { value: 12 },
                { value: 14 },
              ]}
            />,
          },
          {
            key: "4",
            label: "Plotter",
            content: <Impressions
              costs={[
                { value: 15 },
                { value: 18 },
                { value: 20 },
                { value: 25 },
                { value: 30 },
                { value: 40 },
                { value: 45 },
                { value: 50 },
                { value: 60 },
                { value: 70 },
                { value: 80 },
                { value: 90 },
                { value: 100 },
                { value: 110 },
                { value: 120 },
                { value: 150 },
                { value: 200 },
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
                { value: 5 },
              ]} 
              />,
          },
        ]}
      />
    </section>
  );
}
//IO