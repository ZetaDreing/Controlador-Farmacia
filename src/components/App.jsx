import { useState, useEffect } from "react";
import Medicamentos from "./Medicamentos";
import Modal from "./Modal";
import Ventas from "./Ventas";
function App() {
  const [modal, setModal] = useState(false);
  const [medicamento, setMedicamento] = useState({});
  const [medicamentos, setMedicamentos] = useState([]);
  const [medicamentosVendidos, setMedicamentosVendidos] = useState([]);
  const [ventanaVentas, setVentanaVentas] = useState(false);

  const eliminarMedicamento = (id) => {
    const medicamentoActualizados = medicamentos.filter(
      (medicamento) => medicamento.id !== id
    );
    setMedicamentos(medicamentoActualizados);
  };

  useEffect(() => {
    const obtenerLS = () => {
      const medicamentosLS =
        JSON.parse(localStorage.getItem("medicamentos")) ?? [];
      setMedicamentos(medicamentosLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    const obtenerLS = () => {
      const medicamentosLS =
        JSON.parse(localStorage.getItem("medicamentosVendidos")) ?? [];
      setMedicamentosVendidos(medicamentosLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("medicamentos", JSON.stringify(medicamentos));
  }, [medicamentos]);

  useEffect(() => {
    localStorage.setItem(
      "medicamentosVendidos",
      JSON.stringify(medicamentosVendidos)
    );
  }, [medicamentosVendidos]);

  return (
    <div className={modal ?"overflow-hidden h-screen" : '' } >
      {modal && (
        <Modal
          medicamento={medicamento}
          setModal={setModal}
          setMedicamento={setMedicamento}
          setMedicamentos={setMedicamentos}
          medicamentos={medicamentos}
          medicamentosVendidos={medicamentosVendidos}
          setMedicamentosVendidos={setMedicamentosVendidos}
        />
      )}

      <nav className="flex space-x-4 px-5 py-4 bg-blue-600 font-bold text-white text-center items-center">
        <a
          className={ventanaVentas ?"hover:underline":'text-yellow-200 hover:underline'}
          href="#"
          onClick={() => setVentanaVentas(false)}
        >
          Medicamentos
        </a>
        <a
          className={ventanaVentas ?'text-yellow-200 hover:underline':'hover:underline'}
          href="#"
          onClick={() => setVentanaVentas(true)}
        >
          Ventas
        </a>
      </nav>
      {ventanaVentas ? (
        <Ventas
          medicamentosVendidos={medicamentosVendidos}
          medicamento={medicamento}
        />
      ) : (
        <Medicamentos
          setMedicamento={setMedicamento}
          medicamento={medicamento}
          medicamentos={medicamentos}
          setMedicamentos={setMedicamentos}
          eliminarMedicamento={eliminarMedicamento}
          setModal={setModal}
          medicamentosVendidos={medicamentosVendidos}
          modal={modal}
        />
      )}
    </div>
  );
}

export default App;
