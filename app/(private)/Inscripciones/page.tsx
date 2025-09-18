"use client";
import "./inscriptions.css";

import SearchUser from "@/app/Components/SearchUser/searchUser";
import Information from "@/app/Components/Information/information";
import StepNavigator from "@/app/Components/StepNavigator/StepNavigator";
import Receipt from "@/app/Components/Receipt/Receipt";
import Selection from "@/app/Components/Selection/Selection";

export default function Page() {
  return (
    <section className="containerSection">
      <h2 className="title"> INSCRIPCION </h2>

      <SearchUser urlBase="Inscripciones"/>

      <Information
        NoCuenta="idcuanta"
        Nombre="juan"
        Carrera="carrera"
        Credito="credito"
      />

      <StepNavigator totalSteps={2} onFinish={() => console.log()}>
        <Selection />
        <Receipt />
      </StepNavigator>
    </section>
  );
}
