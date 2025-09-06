

function ProgramSelector() {
    return (
        <div>
            <form className="form-container">
                <label htmlFor="equipo">Ubicación de equipo</label>
                <select id="equipo">
                    <option value="">buscar</option>
                    <option value="sala1">Equipo 1</option>
                    <option value="sala2">Equipo 2</option>
                    <option value="sala3">Equipo 3</option>
                </select>

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
                        <input type="checkbox" /> AUDACITY - win - 2.0
                    </label>
                    <label>
                        <input type="checkbox" /> AUTOCAD
                    </label>
                    <label>
                        <input type="checkbox" /> CODE-BLOCKS
                    </label>
                    <label>
                        <input type="checkbox" /> COREL DRAW
                    </label>
                    <label>
                        <input type="checkbox" /> DEV-C++
                    </label>
                    <label>
                        <input type="checkbox" /> EVIEWS Enterprise
                    </label>
                    <label>
                        <input type="checkbox" /> Google Earth
                    </label>
                    <label>
                        <input type="checkbox" /> INTERNET
                    </label>
                    <label>
                        <input type="checkbox" /> MAPLE
                    </label>
                    <label>
                        <input type="checkbox" /> MATHEMATICA
                    </label>
                    <label>
                        <input type="checkbox" /> MATLAB
                    </label>
                    <label>
                        <input type="checkbox" /> Maxima
                    </label>
                    <label>
                        <input type="checkbox" /> miktex
                    </label>
                    <label>
                        <input type="checkbox" /> NETBEANS
                    </label>
                    <label>
                        <input type="checkbox" /> OFFICE 2016
                    </label>
                    <label>
                        <input type="checkbox" /> PSeInt
                    </label>
                    <label>
                        <input type="checkbox" /> R 3.0.1
                    </label>
                    <label>
                        <input type="checkbox" /> RStudio
                    </label>
                    <label>
                        <input type="checkbox" /> SPSS Statistics
                    </label>
                    <label>
                        <input type="checkbox" /> STATA 13
                    </label>
                    <label>
                        <input type="checkbox" /> STATGRAPHICS Centurion XVI
                    </label>
                </div>

                <button className="button buttonSearch">Guardar cambios</button>
            </form>
        </div>
    )
}

export default ProgramSelector