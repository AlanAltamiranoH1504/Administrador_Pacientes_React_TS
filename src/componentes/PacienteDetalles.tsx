import type {Paciente} from "../types";
import {formatoFecha} from "../helpers";
import {usePacieteStore} from "../store/store.ts";

type PacienteDetallesProps = {
    paciente: Paciente
}
const PacienteDetalles = ({paciente}: PacienteDetallesProps) => {
    const {deletePaciente} = usePacieteStore();
    const eliminacionPaciente = (idPaciente: string) => {
        deletePaciente(idPaciente);
    }

    return (
        <>
            <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl font-fjalla">
                <p className="font-bold mb-3 text-gray-700 uppercase">ID: {" "}
                    <span className="text-indigo-700 font-normal normal-case">{paciente.id}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {" "}
                    <span className="text-indigo-700 font-normal normal-case">{paciente.nombre}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}
                    <span className="text-indigo-700 font-normal normal-case">{paciente.propietario}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">E-Mail: {" "}
                    <span className="text-indigo-700 font-normal normal-case">{paciente.email}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {" "}
                    <span
                        className="text-indigo-700 font-normal normal-case">{formatoFecha(new Date(paciente.alta))}</span>
                </p>
                <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {" "}
                    <span className="text-indigo-700 font-normal normal-case">{paciente.sintomas}</span>
                </p>

                <div className="flex justify-between gap-3 mt-10">
                    <button
                        className="flex gap-3 py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                        </svg>
                        Editar
                    </button>
                    <button
                        className="flex gap-3 py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                        onClick={() => {
                            eliminacionPaciente(paciente.id)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                        </svg>
                        Eliminar
                    </button>
                </div>
            </div>
        </>
    );
}
export default PacienteDetalles;