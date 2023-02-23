import Formulario from "./Formulario";
import Medicamento from "./Medicamento";
function Medicamentos({
  setMedicamento,
  medicamento,
  setMedicamentos,
  medicamentos,
  eliminarMedicamento,
  setModal,
  setMedicamentoVendido,
  medicamentosVendidos
  ,modal
}) {
  return (
    <div className="lg:grid grid-cols-2 ">
      <div>
        <h1
          className="text-center uppercase text-3xl font-bold
        text-blue-600 mt-2 mb-5"
        >
          {medicamento.id ? 'Actualiza el medicamento':'Registra un medicamento'}
        </h1>

        <Formulario
          medicamento={medicamento}
          setMedicamento={setMedicamento}
          setMedicamentos={setMedicamentos}
          medicamentos={medicamentos}
          medicamentosVendidos={medicamentosVendidos}
          modal={modal}
          
        />
      </div>
      <div>
        {medicamentos && medicamentos.length ? (
          <>
            <p className="font-bold text-3xl mt-3 text-center text-blue-600">
              Medicamentos disponibles
            </p>
            {medicamentos.map(medicamento => {
              return(<Medicamento 
                eliminarMedicamento={eliminarMedicamento}
                medicamento={medicamento}
                setMedicamento={setMedicamento}
                setModal={setModal}
                setMedicamentoVendido={setMedicamentoVendido}
                key = {medicamento.id}
                 />)
              
            })}
            
          </>
        ) : (
          <>
            
            <p className="font-bold text-3xl mt-3 text-center text-blue-600">
              No hay medicamentos
            </p>
            
          </>
        )}
      </div>
    </div>
  );
}

export default Medicamentos;
