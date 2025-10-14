export default async function Page(props: {
  searchParams?: Promise<{
    period: string;
  }>;
}) {
  const params = await props.searchParams;
  const period = params?.period ? params.period : null;

  return (
    <section className="containerSection">
      <h2 className="title"> INSCRITOS </h2>

      <form className="containerForm">
        <label>Seleccione el periodo</label>
        <div className="groupInput">
          <select>
            <option value="">-- Seleccione el periodo --</option>
            <option value="15">1 </option>
            <option value="30">2 </option>
            <option value="45">3 </option>
            <option value="60">4 </option>
            <option value="90">5 </option>
            <option value="120">6 </option>
          </select>
          <button className="button buttonSearch" type="submit">
            Buscar
          </button>
        </div>
      </form>

      <div>
        <table>
          <thead>
            <tr>
              <th>Carrera</th>
              <th>Genero</th>
              <th>Profesores</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Impresione B/N</th>
              <th>Impresiones Color</th>
              <th>Plotteo</th>
              <th>Escaner</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5,000</td>
              <td>10,000</td>
              <td>10,000</td>
              <td>20,000</td>
              <td>45,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
//IO
