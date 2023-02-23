import { useState, useEffect } from "react";
import Error from "./Error";
import { generarId } from "../helpers/helper";
import Medicamentos from "./Medicamentos";
function Formulario({
  medicamento,
  setMedicamento,
  setMedicamentos,
  medicamentos,
  medicamentosVendidos,
  modal
}) {
  const [nombre, setNombre] = useState("");
  const [laboratorio, setLaboratorio] = useState("");
  const [fechaFabricacion, setFechaFabricacion] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  const [stock, setStock] = useState("");
  const [valor, setValor] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(medicamento).length > 0) {
      setNombre(medicamento.nombre);
      setLaboratorio(medicamento.laboratorio);
      setFechaFabricacion(medicamento.fechaFabricacion);
      setFechaVencimiento(medicamento.fechaVencimiento);
      setStock(medicamento.stock);
      setValor(medicamento.valor);
    }
  }, [medicamento]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        nombre,
        laboratorio,
        fechaFabricacion,
        fechaVencimiento,
        stock,
        valor,
      ].includes("")
    ) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    } else {
      const objetoMedicamento = {
        nombre,
        laboratorio,
        fechaFabricacion,
        fechaVencimiento,
        stock,
        valor,
      };

      if (medicamento.id) {
        objetoMedicamento.id = medicamento.id;
        const medicamentoActualizados = medicamentos.map((medicamentoState) =>
          medicamentoState.id === medicamento.id
            ? objetoMedicamento
            : medicamentoState
        );
        setMedicamentos(medicamentoActualizados);
        setMedicamento({});
      } else {
        objetoMedicamento.id = generarId();
        setMedicamentos([...medicamentos, objetoMedicamento]);
      }
      setError(false);

      setNombre("");
      setLaboratorio("");
      setFechaFabricacion("");
      setFechaVencimiento("");
      setStock("");
      setValor("");
    }
  };
  useEffect(()=>{
    console.log('Cambio en medicamentos vendidos')
    setNombre("");
    setLaboratorio("");
    setFechaFabricacion("");
    setFechaVencimiento("");
    setStock("");
    setValor("");

  },[medicamentosVendidos,modal])

  return (
    <>
      <form action="" className="bg-white mx-5 shadow mt-2">
        <div className="mx-5 pt-7 mb-5">
          {error && (
            <Error>
              <p>Todos los campos son obligatorios</p>
            </Error>
          )}

          <div className="mb-4 pt-5">
            <label className="uppercase font-bold text-gray-800" htmlFor="">
              Nombre
            </label>
            <input
              className="block rounded-lg bg-gray-50 w-full border-solid border-2 mt-2 p-2"
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre del medicamento"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-4 pt-5">
            <label className="uppercase font-bold text-gray-800" htmlFor="">
              Laboratorio de fabrica
            </label>
            <input
              className="block rounded-lg bg-gray-50 w-full border-solid border-2 mt-2 p-2"
              type="text"
              name="laboratorio"
              id="laboratorio"
              placeholder="Nombre del laboratorio"
              value={laboratorio}
              onChange={(e) => setLaboratorio(e.target.value)}
            />
          </div>

          <div className="mb-4 pt-5">
            <label className="uppercase font-bold text-gray-800" htmlFor="">
              Fecha de fabricación
            </label>
            <input
              className="block rounded-lg bg-gray-50 w-full border-solid border-2 mt-2 p-2"
              type="date"
              name="nombre"
              id="nombre"
              value={fechaFabricacion}
              onChange={(e) => setFechaFabricacion(e.target.value)}
            />
          </div>

          <div className="mb-4 pt-5">
            <label className="uppercase font-bold text-gray-800" htmlFor="">
              Fecha de vencimiento
            </label>
            <input
              className="block rounded-lg bg-gray-50 w-full border-solid border-2 mt-2 p-2"
              type="date"
              name="vencimiento"
              id="vencimiento"
              value={fechaVencimiento}
              onChange={(e) => setFechaVencimiento(e.target.value)}
            />
          </div>

          <div className="mb-4 pt-5">
            <label className="uppercase font-bold text-gray-800" htmlFor="">
              Cantidad de stock
            </label>
            <input
              className="block rounded-lg bg-gray-50 w-full border-solid border-2 mt-2 p-2"
              type="number"
              placeholder="ejem: 100"
              min="1"
              name="stock"
              id="stock"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
            />
          </div>

          <div className="mb-4 pt-5">
            <label className="uppercase font-bold text-gray-800" htmlFor="">
              Valor unitario
            </label>
            <input
              className="block rounded-lg bg-gray-50 w-full border-solid border-2 mt-2 p-2"
              type="number"
              placeholder="ejem: 100"
              min="1"
              name="valor"
              id="valor"
              value={valor}
              onChange={(e) => setValor(Number(e.target.value))}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white my-5 mb-10 w-full p-2 font-bold text-xl hover:bg-blue-500 rounded-xl"
            onClick={handleSubmit}
          >
            {medicamento.id ? "Actualizar" : "Agregar Medicamento"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Formulario;
