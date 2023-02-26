import { formatearFecha } from "../helpers/helper";
import { useState, useEffect } from "react";
function Modal({
  medicamento,
  setModal,
  setMedicamento,
  setMedicamentos,
  medicamentos,
  setMedicamentosVendidos,
  medicamentosVendidos,
}) {
  const [cantidad, setCantidad] = useState(1);
  const [valorTotal, setValorTotal] = useState(0);
  const [fecha, setFecha] = useState("");

  const [nombre, setNombre] = useState("");
  const [laboratorio, setLaboratorio] = useState("");
  const [fechaFabricacion, setFechaFabricacion] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  let [stock, setStock] = useState(0);
  const [valor, setValor] = useState("");
  const newFecha = new Date();
  const formatFecha = formatearFecha(newFecha);
  const handleVender = (e) => {
    e.preventDefault();

    const objetoMedicamentoVendido = {
      nombre,
      laboratorio,
      fechaFabricacion,
      fechaVencimiento,
      stock,
      valor,
      cantidad,
      valorTotal,
      fecha,
    };

    if (medicamento.id) {
      objetoMedicamentoVendido.id = medicamento.id;
      const medicamentoActualizados = medicamentos.map((medicamentoState) =>
        medicamentoState.id === medicamento.id
          ? objetoMedicamentoVendido
          : medicamentoState
      );
      setMedicamentos(medicamentoActualizados);
      setMedicamento({});
    }
    setModal(false);
    setMedicamentosVendidos([
      ...medicamentosVendidos,
      objetoMedicamentoVendido,
    ]);
  };
  useEffect(() => {
    setNombre(medicamento.nombre);
    setLaboratorio(medicamento.laboratorio);
    setFechaFabricacion(medicamento.fechaFabricacion);
    setFechaVencimiento(medicamento.fechaVencimiento);
    setStock(medicamento.stock - cantidad);
    setValor(medicamento.valor);

    setValorTotal(medicamento.valor * cantidad);
  }, [cantidad]);

  useEffect(() => {
    setFecha(formatFecha);
  }, [medicamentosVendidos]);

  return (
    <>
      <div className="absolute bg-black bg-opacity-80 w-full h-full"></div>
      <form className=" 
      rounded-xl 
      bg-white 
      shadow w-full 
      md:w-auto p-5 
      md:px-8 
      absolute 
      top-1/2 
      left-1/2 
      transform 
      -translate-x-1/2 
      -translate-y-1/2">
        <p
          className="text-gray-800 font-bold text-right mb-3 text-2xl cursor-pointer hover:text-gray-700"
          onClick={() => {
            setModal(false);
            setMedicamento({})
          }}
        >
          X
        </p>
        <h1 className="text-center text-3xl font-bold text-blue-600 mb-5">
          Venta de medicamento
        </h1>
        <div>
          <label className="font-bold text-gray-800 uppercase">Nombre: </label>
          <p className="my-2 p-2 block border-solid border-2 w-full">
            {nombre}
          </p>
        </div>
        <div>
          <label className="font-bold text-gray-800 uppercase">
            Cantidad Productos:
          </label>
          <input
            className="my-2 p-2 block border-solid border-2 w-full"
            type="number"
            min="1"
            placeholder="Ejem: 1"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="my-5">
          <p className="font-bold text-gray-800 uppercase">Total a pagar:</p>
          <p className="font-bold text-gray-800 uppercase text-2xl">
            ${valorTotal}
          </p>
        </div>
        <button
          className="bg-blue-600 p-2 px-3 text-white font-bold uppercase w-full rounded-lg hover:bg-blue-500"
          onClick={handleVender}
        >
          Vender
        </button>
      </form>
    </>
  );
}

export default Modal;
