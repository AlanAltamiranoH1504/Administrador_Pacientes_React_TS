import Form from "./components/Form.tsx";
import PacientesList from "./components/PacientesList.tsx";

function App() {
    return (
        <>
            <div className="container mx-auto mt-20">
                <h1 className="font-black font-fjalla text-5xl text-center md:w-2/3 md:mx-auto">Seguimiento de Pacientes {" "} <span className="text-indigo-700">Veterinaria</span></h1>

                <div className="mt-12 md:flex">
                    <Form/>
                    <PacientesList/>
                </div>
            </div>
        </>
    )
}

export default App
