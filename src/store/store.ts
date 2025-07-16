import {create} from "zustand/react";
import {v4 as uuidv4} from "uuid";
import {devtools} from "zustand/middleware"
import type {Paciente, PacienteToSave} from "../types";

type PacienteState = {
    pacientes: Paciente[],
    activeId: Paciente["id"],
    addPaciente: (paciente: PacienteToSave) => void,
    deletePaciente: (idPaciente: string) => void,
    getPacienteById: (idPaciente: string) => void,
    updatePaciente: (paciente: PacienteToSave) => void,
}
export const usePacieteStore = create<PacienteState>()(devtools((setState) => ({
    pacientes: [],
    activeId: "",
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
    },
    getPacienteById: (idPaciente: string) => {
        setState(() => ({
            activeId: idPaciente
        }));
    },
    updatePaciente: (pacienteToUpdate: PacienteToSave) => {
        setState((state) => ({
            pacientes: state.pacientes.map(paciente => paciente.id === state.activeId ? {id: state.activeId, ...pacienteToUpdate}: paciente),
            activeId: ""
        }));
    }
})));