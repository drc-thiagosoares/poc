'use client'

import { useForm } from "react-hook-form"

interface ICandidado {
  nome: string
  nomeSocial: string
  email: string
  celular: number
  cpf: number
  cref: number
}

export default function RegisterUser() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ICandidado>()
  const onSubmit = (data: ICandidado) => console.log(data)
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome:</label>
          <input
            {...register("nome", { required: true })}
            aria-invalid={errors.nome ? "true" : "false"}
          />
          {errors.nome?.type === "required" && (
            <p role="alert">Nome is required</p>
          )}
        </div>
        <div>
          <label>Nome social:</label>
          <input
            {...register("nomeSocial", { required: true })}
            aria-invalid={errors.nomeSocial ? "true" : "false"}
          />
          {errors.nomeSocial?.type === "required" && (
            <p role="alert">Nome social is required</p>
          )}
        </div>
        <div>
          <label>E-mail:</label>
          <input
            {...register("email", { required: true })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <p role="alert">Email is required</p>
          )}
        </div>
        <div>
          <label>Celular:</label>
          <input
            {...register("celular", { required: true })}
            aria-invalid={errors.celular ? "true" : "false"}
          />
          {errors.celular?.type === "required" && (
            <p role="alert">Celular is required</p>
          )}
        </div>
        <div>
          <label>CREF:</label>
          <input
            {...register("cref", { required: true })}
            aria-invalid={errors.cref ? "true" : "false"}
          />
          {errors.cref?.type === "required" && (
            <p role="alert">CREF is required</p>
          )}
        </div>
        <input type="submit" />
    </form>
    </>
  );
}
