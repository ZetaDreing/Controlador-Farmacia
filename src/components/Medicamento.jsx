const Medicamento = ({
  medicamento,
  setMedicamento,
  eliminarMedicamento,
  setModal,
}) => {
  const {
    nombre,
    laboratorio,
    fechaFabricacion,
    fechaVencimiento,
    stock,
    valor,
    id,
  } = medicamento;
  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar este medicamento?");
    if (respuesta) {
      eliminarMedicamento(id);
    }
  };
  const handleModal = () =>{
    setModal(true)
    setMedicamento(medicamento)
  }
  return (
    <div className="bg-white shadow p-5 rounded-xl my-5 mx-10">
      <p className="font-bold text-1xl uppercase my-5">
        Nombre: <span className="font-normal ">{nombre} </span>
      </p>
      <p className="font-bold text-1xl uppercase my-5">
        Laboratorio: <span className="font-normal ">{laboratorio} </span>
      </p>
      <p className="font-bold text-1xl uppercase my-5">
        Fecha Fabricacion:{" "}
        <span className="font-normal ">{fechaFabricacion}</span>
      </p>
      <p className="font-bold text-1xl uppercase my-5">
        Fecha vencimiento:{" "}
        <span className="font-normal ">{fechaVencimiento}</span>
      </p>
      <p className="font-bold text-1xl uppercase my-5">
        Cantidad de stock: <span className="font-normal ">{stock}</span>
      </p>
      <p className="font-bold text-1xl uppercase my-5">
        Valor unitario: <span className="font-normal ">${valor} </span>
      </p>
      <div className=" space-y-2 space-x-3 md:space-x-5 md:space-y-0">
        <button
          className="bg-green-600 p-2 rounded-xl px-5 text-white uppercase font-bold hover:bg-green-500"
          onClick={handleModal}
        >
          Vender
        </button>
        <button
          className="bg-blue-600 p-2 rounded-xl px-5 text-white uppercase font-bold hover:bg-blue-500"
          onClick={() => setMedicamento(medicamento)}
        >
          Actualizar
        </button>
        <button
          className="bg-red-600 p-2 rounded-xl px-5 text-white uppercase font-bold hover:bg-red-500"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Medicamento;
