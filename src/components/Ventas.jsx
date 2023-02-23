import MedicamentosVendidos from "./MedicamentosVendidos"
function Ventas({medicamentosVendidos,medicamento}) {
  return (
    <>
    {medicamentosVendidos.length ? 
     <p className="font-bold text-5xl text-blue-600 mt-5 text-center">Medicamentos vendidos</p>    
    :
     <>    
     <p className="font-bold text-5xl text-blue-600 mt-5 text-center">No hay Medicamentos vendidos</p>
     <p className="font-bold text-2xl text-blue-600 mt-5 text-center"> Aqui se mostrarán los medicamentos que hayas vendido</p>
     </>

    
    }
    <MedicamentosVendidos
    medicamento={medicamento}
    medicamentosVendidos={medicamentosVendidos}
    />

    </>
  )
}

export default Ventas