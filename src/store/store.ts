import {create} from "zustand/react";
import {v4 as uuidv4} from "uuid";
import type {Paciente, PacienteToSave} from "../types";

type PacienteState = {
    pacientes: Paciente[],
    addPaciente: (paciente: PacienteToSave) => void,
    deletePaciente: (idPaciente: string) => void,
}
export const usePacieteStore = create<PacienteState>((setState, getState) => ({
    pacientes: [],
    addPaciente: (paciente) => {
        const pacienteToSave: Paciente = {
            id: uuidv4(),
            nombre: paciente.nombre,
            propietario: paciente.propietario,
            email: paciente.email,
            alta: paciente.alta,
            sintomas: paciente.sintomas
        }
        setState((state) => ({
            pacientes: [...state.pacientes, pacienteToSave]
        }))
    },
    deletePaciente: (idPaciente: string) => {
        setState((state) => ({
            pacientes: state.pacientes.filter((paciente) => paciente.id !== idPaciente)
        }));
    }
}));