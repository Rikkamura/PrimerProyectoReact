import "./listaOpciones.css";

const ListaOpciones = (props) => {
  const manejarCambio = (event) => {
    props.actualizarEquipo(event.target.value);
  };

  return (
    <div className="listaOpciones">
      <label>Equipos</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar Equipo
        </option>
        {props.equipos.map((equipos, index) => (
          <option value={equipos} key={index}>
            {equipos}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
