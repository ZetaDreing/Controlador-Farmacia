import { formatearFecha } from "../helpers/helper";
function MedicamentoVendido({ medicamento }) {
  const { nombre, cantidad, valor, valorTotal, fecha } = medicamento;
  return (
    <>
      <div className="bg-white p-5 shadow m-5">
        <p className="font-bold uppercase text-gray-800 mt-2 mb-2">
          Nombre: <span className="font-normal">{nombre}</span>
        </p>
        <p className="font-bold uppercase text-gray-800 mt-2 mb-2">
          Cantidad: <span className="font-normal">{cantidad} </span>
        </p>
        <p className="font-bold uppercase text-gray-800 mt-2 mb-2">
          Val Unitario: <span className="font-normal">${valor} </span>
        </p>
        <p className="font-bold uppercase text-gray-800 mt-2 mb-2">
          Val Total: <span className="font-normal">${valorTotal} </span>
        </p>
        <p className="font-bold uppercase text-gray-800 mt-2 mb-2">
          Fecha y Hora: <span className="font-normal">{fecha}</span>
        </p>
      </div>
    </>
  );
}

export default MedicamentoVendido;
