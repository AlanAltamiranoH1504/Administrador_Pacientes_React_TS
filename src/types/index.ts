export type Paciente = {
    id: string,
    nombre: string,
    propietario: string,
    email: string,
    alta: Date,
    sintomas: string
}

export type PacienteToSave = Pick<Paciente, "nombre" | "propietario" | "email" | "alta" | "sintomas">