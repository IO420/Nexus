// 1. Definimos la interfaz que describe las props del componente
export interface DatosEquipo {
  titulo: string; // El título que aparecerá como label
  opcion: string[]; // Lista de opciones para el select
}

// 2. Ya no necesitas tener "DatosOpciones" dentro de este archivo
//    porque el componente debe ser reutilizable, no fijo.

// 3. Recibimos las props como un objeto con estructura DatosEquipo
function ProgramSelector({ titulo, opcion }: DatosEquipo) {
  return (
    <div>
      <form className="form-container">
        {/* Label dinámico con el título que recibimos */}
        <label htmlFor="equipo">{titulo}</label>

        {/* Renderizamos UN solo <select> con varias <option> */}
        <select id="equipo">
          {opcion.map((op, index) => (
            <option key={index} value={op}>
              {op}
            </option>
          ))}
        </select>

        {/* Aquí puedes poner más <option> fijas si quieres */}
        <option value="">Buscar</option>

        {/* Lista de checkboxes (esto lo podrías optimizar igual con .map) */}
        <div className="checkbox-grid">
          <label>
            <input type="checkbox" /> 3D MAX STUDIO 2014
          </label>
          <label>
            <input type="checkbox" /> ADOBE CREATIVE SUITE
          </label>
          <label>
            <input type="checkbox" /> ARCHICAD 20
          </label>
          <label>
            <input type="checkbox" /> AUDACITY -win - 2.0
          </label>
          <label>
            <input type="checkbox" /> AUTOCAD
          </label>
          <label>
            <input type="checkbox" /> CODE-BLOCKS
          </label>
          <label>
            <input type="checkbox" /> COREL DRAW
          </label>{" "}
          <label>
            <input type="checkbox" /> DEV-C++
          </label>{" "}
          <label>
            <input type="checkbox" /> EVIEWS Enterprise
          </label>{" "}
          <label>
            <input type="checkbox" /> Google Earth
          </label>{" "}
          <label>
            <input type="checkbox" /> INTERNERT
          </label>{" "}
          <label>
            <input type="checkbox" /> MAPLE
          </label>
          <label>
            <input type="checkbox" /> MATHEMATICA
          </label>{" "}
          <label>
            <input type="checkbox" /> MATLAB
          </label>{" "}
          <label>
            <input type="checkbox" /> Maxima
          </label>{" "}
          <label>
            <input type="checkbox" /> miktex
          </label>{" "}
          <label>
            <input type="checkbox" /> NETBEANS
          </label>{" "}
          <label>
            <input type="checkbox" /> OFFICE 2016
          </label>{" "}
          <label>
            <input type="checkbox" /> PSeint
          </label>{" "}
          <label>
            <input type="checkbox" /> R 3.0.1
          </label>{" "}
          <label>
            <input type="checkbox" /> R Studio
          </label>{" "}
          <label>
            <input type="checkbox" /> SPPS Statiscs
          </label>{" "}
          <label>
            <input type="checkbox" /> STATA 13
          </label>{" "}
          <label>
            <input type="checkbox" /> STATGRAOHICS Centurion XVI
          </label>
          {/* ... resto de checkboxes */}
        </div>

        <button className="button buttonSearch">Guardar cambios</button>
      </form>
    </div>
  );
}

export default ProgramSelector;
