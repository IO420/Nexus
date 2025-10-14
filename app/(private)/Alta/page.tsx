import RegisterAlta from "@/app/Components/Alta/registerAlta";

import "./style.css";

export default async function Page(props: { searchParams?: Promise<{}> }) {
  const params = await props.searchParams;
  return (
    <section className="containerSection">
      <h1 className="title">ALTA USUARIO</h1>

      <RegisterAlta />
    </section>
  );
}
//IO
