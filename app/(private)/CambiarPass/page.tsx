import ChangePassword from "@/app/Components/auth/ChangePassword/changePassword";

export default async function Page(props: {
  searchParams?: Promise<{
  }>;
}) {
  const params = await props.searchParams;

  return (
    <section className="containerSection">
      
      <h2 className="title"> Cambiar contraseña </h2>

      <ChangePassword />
    </section>
  );
}
//IO
