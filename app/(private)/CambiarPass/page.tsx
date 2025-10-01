import ChangePassword from "@/app/Components/auth/ChangePassword/changePassword";
import AlertBox from "@/app/Components/Global/AlertBox/AlertBox";
import ClearParams from "@/app/Components/Global/ClearParams/ClearParams";

export default async function Page(props: {
  searchParams?: Promise<{
    success?: string;
    error?: string;
  }>;
}) {
  const params = await props.searchParams;
  const showSuccess = params?.success ? params.success : null;
  const showError = params?.error ? params.error : null;

  return (
    <section className="containerSection">
      {showError && (
        <>
          <AlertBox key={Date.now()} message={showError} type="error" />
          <ClearParams paramsToClear={["error"]} />
        </>
      )}

      {showSuccess && (
        <>
          <AlertBox key={Date.now()} message={showSuccess} type="success" />
          <ClearParams paramsToClear={["success"]} />
        </>
      )}
      
      <h2 className="title"> Cambiar contraseña </h2>

      <ChangePassword />
    </section>
  );
}
//IO
