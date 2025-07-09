import {Fragment} from "react";
import {useForm} from "react-hook-form";

const Form = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    function savePaciente(data) {
        console.log("Guardando paciente");
        console.log(data)
    }

    return (
        <Fragment>
            <div className="md:w-1/2 lg:w-2/5 mx-5">
                <h2 className="font-black font-fjalla text-3xl text-center">Seguimiento de Paciente</h2>
                <p className="text-lg mt-5 text-center mb-10 font-fjalla">
                    Añade pacientes y {" "}
                    <span className="text-indigo-700 font-bold">Administralos</span>
                </p>

                <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" noValidate
                    onSubmit={handleSubmit(savePaciente)}
                >
                    <div className="mb-5">
                        <label htmlFor="nombre" className="uppercase font-bold font-fjalla">Nombre de Paciente:</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg"
                               placeholder="Nombre del paciente"
                               {...register("nombre", {
                                   required: "El nombre del paciente es obligatorio",
                               })}
                        />
                        <div className="bg-red-200 text-red-600 text-center font-fjalla rounded-md mt-1">
                            {errors.nombre && String(errors.nombre.message)}
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="propietario" className="uppercase font-bold font-fjalla">Nombre del
                            propietario:</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg"
                               placeholder="Nombre del propietario"
                               {...register("propietario", {
                                   required: "El nombre del propietario es obligatorio",
                               })}
                        />
                        <div className="bg-red-200 text-red-600 text-center font-fjalla rounded-md mt-1">
                            {errors.propietario && String(errors.propietario.message)}
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="uppercase font-bold font-fjalla">E-Mail de registro:</label>
                        <input type="email" className="w-full p-3 border border-gray-300 rounded-lg"
                               placeholder="E-mail de registro"
                               {...register("email",  {
                                   required: "El e-mail de registro es obligatorio",
                                   pattern: {
                                       value: /\S+@\S+\.\S+/,
                                       message: "El email debe tener el formato correcto"
                                   }
                               })}
                        />
                        <div className="bg-red-200 text-red-600 text-center font-fjalla rounded-md mt-1">
                            {errors.email && String(errors.email.message)}
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="fecha" className="uppercase font-bold font-fjalla">Fecha de Alta:</label>
                        <input type="date" className="w-full p-3 border border-gray-300 rounded-lg"
                               placeholder="Fecha de Alta"
                               {...register("fecha", {
                                   required: "La fecha de alta es obligatoria"
                               })}
                        />
                        <div className="bg-red-200 text-red-600 text-center font-fjalla rounded-md mt-1">
                            {errors.fecha && String(errors.fecha.message)}
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="sintomas" className="uppercase font-bold font-fjalla">Sintoma del
                            paciente:</label>
                        <textarea className="w-full p-3 border border-gray-300 rounded-lg"
                                  placeholder="Descripción de sitomas" rows={10}
                                  {...register("sintomas", {
                                      required: "Los sintomas del paciente son obligatorios",
                                      maxLength: {
                                          value: 200,
                                          message: "La descripcion de sintomas no debe ser mayor a 200 caracteres"
                                      }
                                  })}
                        ></textarea>
                        <div className="bg-red-200 text-red-600 text-center font-fjalla rounded-md mt-1">
                            {errors.sintomas && String(errors.sintomas.message)}
                        </div>
                    </div>

                    <div className="mt-3">
                        <input type="submit"
                               className="w-full p-3 border border-indigo-700 bg-indigo-700 text-white font-fjalla rounded-lg cursor-pointer hover:bg-white hover:text-indigo-700"
                               value="Guardar Paciente"/>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
export default Form;