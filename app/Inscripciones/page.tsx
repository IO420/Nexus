"use client";
import Information from "../Components/Information/information";
import Receipt from "../Components/Receipt/Receipt";
import SearchUser from "../Components/SearchUser/searchUser";
import Selection from "../Components/Selection/Selection";
import StepNavigator from "../Components/StepNavigator/StepNavigator";
import "./inscriptions.css";

export default function Page() {
  return (
    <section className="containerSection">
      <h2 className="title"> INSCRIPCION </h2>

      <SearchUser />

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
