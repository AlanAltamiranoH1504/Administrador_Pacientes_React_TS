import {useForm} from "react-hook-form";
import type {PacienteToSave} from "../types";
import {usePacieteStore} from "../store/store.ts";

export default function PatientForm() {
    const {addPaciente} = usePacieteStore();

    const {register, handleSubmit, formState: {errors}, reset} = useForm<PacienteToSave>();
    const savePaciente = (data: PacienteToSave) => {
        addPaciente(data);
        reset();
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 font-fjalla">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(savePaciente)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente
                    </label>
                    <input
                        id="name"
                        className="w-full p-3  border border-gray-300"
                        type="text"
                        placeholder="Nombre del Paciente"
                        {...register("nombre", {
                            required: "El nombre es obligatorio",
                        })}
                    />
                    <div className="bg-red-200 text-center text-red-600 rounded-md mt-1">
                        {errors.nombre && String(errors.nombre.message)}
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        className="w-full p-3  border border-gray-300"
                        type="text"
                        placeholder="Nombre del Propietario"
                        {...register("propietario", {
                            required: "El nombre del propietario es obligatorio",
                        })}
                    />
                    <div className="bg-red-200 text-center text-red-600 rounded-md mt-1">
                        {errors.propietario && String(errors.propietario.message)}
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className="w-full p-3  border border-gray-300"
                        type="email"
                        placeholder="Email de Registro"
                        {...register("email", {
                            required: "El email es obligatorio",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Formato no valido"
                            }
                        })}
                    />
                    <div className="bg-red-200 text-center text-red-600 rounded-md mt-1">
                        {errors.email && String(errors.email.message)}
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className="w-full p-3  border border-gray-300"
                        type="date"
                        {...register("alta", {
                            required: "La fecha de alta es obligatoria",
                        })}
                    />
                    <div className="bg-red-200 text-center text-red-600 rounded-md mt-1">
                        {errors.alta && String(errors.alta.message)}
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className="w-full p-3  border border-gray-"
                        placeholder="Síntomas del paciente"
                        rows={7}
                        {...register("sintomas", {
                            required: "La descripcion de sintomas son obligatorios",
                            maxLength: {
                                value: 300,
                                message: "La descripcion de sintomas debe tener maximo 300 caracteres"
                            }
                        })}
                    ></textarea>
                    <div className="bg-red-200 text-center text-red-600 rounded-md mt-1">
                        {errors.sintomas && String(errors.sintomas.message)}
                    </div>
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-lg"
                    value='Guardar Paciente'
                />
            </form>
        </div>
    )
}
