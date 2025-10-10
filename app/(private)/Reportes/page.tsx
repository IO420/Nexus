import Toggle from "@/app/Components/Global/Toggle/Toggle";
import SearchDateBetween from "@/app/Components/SearchDateBetween/SearchDateBetween";
import PorServicios from "@/app/Components/Reportes/porServicio";
import PorRecibos from "@/app/Components/Reportes/porRecibo";

export default async function Page(props: {
  searchParams?: Promise<{
    key: string;
    numAcount: string;
  }>;
}) {
  const params = await props.searchParams;
  const key = params?.key && params.key;

  return (
    <section className="containerSection">
      <h2 className="title"> REPORTES </h2>

      <Toggle
        defaultView={key}
        options={[
          {
            key: "Por recibo",
            label: "Por recibo",
            content: (
              <>
                <SearchDateBetween />
                <PorServicios />
              </>
            ),
          },

          {
            key: "Por Servicio",
            label: "Por Servicio",
            content: (
              <>
                <SearchDateBetween />
                <PorRecibos />
              </>
            ),
          },
        ]}
      />
    </section>
  );
}
//IO
