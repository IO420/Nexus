
export default async function Page(props: {
  searchParams?: Promise<{
    period: string;
    success?: string;
    error?: string;
  }>;
}) {
  const params = await props.searchParams;
  const period = params?.period ? params.period : null;
  const showSuccess = params?.success ? params.success : null;
  const showError = params?.error ? params.error : null;

  return (
    <section className='containerSection'>
      <h2 className='title'> INSCRITOS </h2>

      <form className="containerForm">
        <label>Seleccione el periodo</label>
        <div className="groupInput">
          <select
          >
            <option value="">-- Seleccione el periodo --</option>
            <option value="15">1 </option>
            <option value="30">2 </option>
            <option value="45">3 </option>
            <option value="60">4 </option>
            <option value="90">5 </option>
            <option value="120">6 </option>
          </select>
          <button
            className='button buttonSearch'
            type='submit'
          >Buscar
          </button>
        </div>

      </form>

      <div className="tableContainer">
        <table >
          <thead>
            <tr>
              <th>Carrera</th>
              <th>Windows</th>
              <th>Macintosh</th>
              <th>Linux</th>
              <th>Profesores</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </section>

  );
}
//IO