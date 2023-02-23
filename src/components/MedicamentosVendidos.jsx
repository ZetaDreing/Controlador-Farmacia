import MedicamentoVendido from "./MedicamentoVendido"
import { generarId } from "../helpers/helper"
function MedicamentosVendidos({medicamento,medicamentosVendidos}) {
  return (
    <>
    {MedicamentosVendidos && MedicamentosVendidos.length ? 
    <>
        {medicamentosVendidos.map(medicamento=>{
        return(<MedicamentoVendido
            medicamento={medicamento}
            key={generarId()}
            />)

    })}
    </>

: <p>No hay medicamentos vendidos</p>}
    </>
  )
}

export default MedicamentosVendidos