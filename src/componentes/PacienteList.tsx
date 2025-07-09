import {usePacieteStore} from "../store/store.ts";
import PacienteDetalles from "./PacienteDetalles.tsx";
import type {Paciente} from "../types";

const PacienteList = () => {
    const {pacientes} = usePacieteStore();

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes.length > 0 ? (
                <>
                    <h2 className="font-black text-3xl text-center font-fjalla">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center font-fjalla">Administra Tus Pacientes de {" "} <span className="font-fjalla text-indigo-700">Veterinaria</span></p>
                    {pacientes.map((paciente: Paciente) => (
                        <PacienteDetalles
                            key={paciente.id}
                            paciente={paciente}
                        />
                    ))}
                </>
            ): (
                <strong className="font-fjalla text-center text-3xl text-indigo-700 flex mx-auto">No hay pacientes registrados</strong>
            )}
        </div>
    )
}
export default PacienteList;