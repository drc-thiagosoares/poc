'use client'

import { useForm } from "react-hook-form"

interface ICandidado {
  nome: string
  nomeFantasia: string
  email: string
  telefone: number
  cnpj: number
}

export default function RegisterCompany() {
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
          <label>Nome fantasia:</label>
          <input
            {...register("nomeFantasia", { required: true })}
            aria-invalid={errors.nomeFantasia ? "true" : "false"}
          />
          {errors.nomeFantasia?.type === "required" && (
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
          <label>Telefone:</label>
          <input
            {...register("telefone", { required: true })}
            aria-invalid={errors.telefone ? "true" : "false"}
          />
          {errors.telefone?.type === "required" && (
            <p role="alert">Telefone is required</p>
          )}
        </div>
        <div>
          <label>CNPJ:</label>
          <input
            {...register("cnpj", { required: true })}
            aria-invalid={errors.cnpj ? "true" : "false"}
          />
          {errors.cnpj?.type === "required" && (
            <p role="alert">CNPJ is required</p>
          )}
        </div>
        <input type="submit" />
    </form>
    </>
  );
}
