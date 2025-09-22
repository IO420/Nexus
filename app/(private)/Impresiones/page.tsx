import SearchUser from "../../Components/SearchUser/searchUser";
import Receipt from "../../Components/Receipt/Receipt";
import Impressions from "../../Components/Impressions/impressions";
import Toggle from "../../Components/Toggle/Toggle";
import Information from "../../Components/Information/information";

import AlertBox from "@/app/Components/AlertBox/AlertBox";
import { GetStudent } from "@/app/lib/getStudent";
import "@/app/globals.css";

export default async function Page({ searchParams }: any) {
  const params = await  searchParams;
  const numAccount = params.numAccount ? Number(params.numAccount) : null;

  let student: any = null;
  let error: string | null = null;
  if (numAccount) {
    const result = await GetStudent(numAccount);

    if (result.error) {
      error = result.error;
    } else {
      student = result;
    }
  }

  return (
    <section className="containerSection">
      {error && <AlertBox key={error} message={error} type="error" />}

      <h2 className="title">IMPRESIONES Y PLOTEO</h2>
      <SearchUser urlBase="Impresiones" />

      {student ? (
        <>
          <Information
            NoCuenta={student.id_cuenta}
            Nombre={student.nombre}
            Carrera={student.carrera.carrera}
            Credito={student.credito}
          />

          <Toggle
            defaultView="1"
            options={[
              {
                key: "1",
                label: "Recibo",
                content: <Receipt numAccount={student.id_cuenta}/>,
              },
              {
                key: "2",
                label: "Impresiones B/N",
                content: (
                  <Impressions
                    costs={[{ value: 1 }, { value: 2 }]}
                    numAccount={student.id_cuenta}
                  />
                ),
              },
              {
                key: "3",
                label: "Impresiones color",
                content: (
                  <Impressions
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
                    numAccount={student.id_cuenta}
                  />
                ),
              },
              {
                key: "4",
                label: "Plotter",
                content: (
                  <Impressions
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
                    numAccount={student.id_cuenta}
                  />
                ),
              },
              {
                key: "5",
                label: "Escaner",
                content: (
                  <Impressions
                    costs={[{ value: 1 }, { value: 2 }, { value: 5 }]}
                    numAccount={student.id_cuenta}
                  />
                ),
              },
            ]}
          />
        </>
      ) : (
        <></>
      )}
    </section>
  );
}
//IO
