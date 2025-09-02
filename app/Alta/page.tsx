'use client'
import { useState } from "react";
import "../globals.css";
import StepNavigator from "../Components/StepNavigator/StepNavigator";

export default function Page() {
  const [step, setStep] = useState(1);

  const handleNext = (e: any) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = (e: any) => {
    e.preventDefault();
    if (step > 1) setStep(step - 1);
  };

  return (
    <section className="containerForm">
      <h1 className="title">ALTA</h1>

      <StepNavigator totalSteps={2}>
        <div className='containerInput'>
          <label className='label'>No.Cuenta</label>
          <input
            type='text'
            //value={user}
            //onChange={(e) => setUser(e.target.value)}
            placeholder='Coloca un número de cuenta...'
          />

          <label className='label'>Nombre</label>
          <input
            type='text'
            //value={user}
            //onChange={(e) => setUser(e.target.value)}
            placeholder='Coloca '
          />

          <label className='label'>Apellido Paterno</label>
          <input
            type='text'
            //value={user}
            //onChange={(e) => setUser(e.target.value)}
            placeholder='Coloca '
          />

          <label className='label'>Apellido Materno</label>
          <input
            type='text'
            //value={user}
            //onChange={(e) => setUser(e.target.value)}
            placeholder='Coloca '
          />
        </div>

        <div className='containerInput'>
          <label className='label'>Email</label>
          <input
            type='text'
            //value={user}
            //onChange={(e) => setUser(e.target.value)}
            placeholder='Coloca '
          />

          <label className='label'>Fecha Nacimiento</label>
          <input
            type='text'
            //value={user}
            //onChange={(e) => setUser(e.target.value)}
            placeholder='Coloca '
          />

          <label className='label'>Carrera</label>
          <input
            type='text'
            //value={user}
            //onChange={(e) => setUser(e.target.value)}
            placeholder='Coloca '
          />
        </div>
      </StepNavigator>
    </section>
  );
}
//IO