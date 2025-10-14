import SearchUser from "../../Components/Global/SearchUser/searchUser";
import Receipt from "../../Components/Receipt/Receipt";
import Toggle from "../../Components/Global/Toggle/Toggle";
import Information from "../../Components/Global/Information/information";
import Impressions from "@/app/Components/Impressions/impressions";
import ShowError from "@/app/Components/Global/ShowError";

import { GetStudent } from "@/app/lib/getStudent";

import "@/app/globals.css";

export default async function Page(props: {
  searchParams?: Promise<{
    key: string;
    numAcount: string;
  }>;
}) {
  const params = await props.searchParams;
  const key = params?.key && params.key;
  const numAcount = params?.numAcount ? params.numAcount : null;

  let student: any = null;
  let errorMessage = "";

  if (numAcount) {
    const result = await GetStudent(parseInt(numAcount));

    if (result.error) {
      errorMessage = `${result.error}`;
    } else {
      student = result as Student;
    }
  }

  return (
    <section className="containerSection">
      {errorMessage && <ShowError key={Date.now()} message={errorMessage} />}

      <h2 className="title">IMPRESIONES Y PLOTEO</h2>
      <SearchUser value={numAcount} />

      {student && (
        <>
          <Information
            NoCuenta={student.id_cuenta}
            Nombre={student.nombre}
            Carrera={student.carrera.carrera}
            Credito={student.credito}
          />

          <Toggle
            defaultView={key}
            options={[
              {
                key: "Recibo",
                label: "Recibo",
                content: <Receipt numAcount={student.id_cuenta} />,
              },
              {
                key: "B/N",
                label: "Impresiones B/N",
                content: (
                  <Impressions
                    key={1}
                    costs={[{ value: 1 }, { value: 2 }]}
                    numAcount={student.id_cuenta}
                  />
                ),
              },
              {
                key: "color",
                label: "Impresiones color",
                content: (
                  <Impressions
                    key={2}
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
                    numAcount={student.id_cuenta}
                  />
                ),
              },
              {
                key: "Plotter",
                label: "Plotter",
                content: (
                  <Impressions
                    key={3}
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
                    numAcount={student.id_cuenta}
                  />
                ),
              },
              {
                key: "Escaner",
                label: "Escaner",
                content: (
                  <Impressions
                    key={4}
                    costs={[{ value: 1 }, { value: 2 }, { value: 5 }]}
                    numAcount={student.id_cuenta}
                  />
                ),
              },
            ]}
          />
        </>
      )}
    </section>
  );
}
//IO
