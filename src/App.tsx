import PatientForm from "./componentes/PatientForm.tsx";
import PacienteList from "./componentes/PacienteList.tsx";

function App() {
    return (
        <>
            <div className="container mx-auto mt-20">
                <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto font-fjalla">
                    Seguimiento de Pacientes
                    <span className="text-indigo-700"> Veterinaria</span>
                </h1>

                <div className="mt-12 md:flex">
                    <PatientForm/>
                    <PacienteList/>
                </div>
            </div>
        </>
    )
}

export default App
