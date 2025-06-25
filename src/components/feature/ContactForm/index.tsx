'use client'

import { useForm } from "react-hook-form"

interface IContato {
  nome: string
  email: string
  celular: number
  mensagem: string

}

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IContato>()
  const onSubmit = (data: IContato) => console.log(data)
  return (
    <>
      <div>
        <h2 className="text-gray-800 uppercase">Formulário de Contato</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              placeholder="NOME"
              {...register("nome", { required: true })}
              aria-invalid={errors.nome ? "true" : "false"}
            />
            {errors.nome?.type === "required" && (
              <p role="alert">Nome is required</p>
            )}
          </div>
          <div>
            <input
              placeholder="E-MAIL"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p role="alert">Email is required</p>
            )}
          </div>
          <div>
            <input
              placeholder="CELULAR"
              {...register("celular", { required: true })}
              aria-invalid={errors.celular ? "true" : "false"}
            />
            {errors.celular?.type === "required" && (
              <p role="alert">Celular is required</p>
            )}
          </div>
          <div>
            <textarea
              placeholder="MENSAGEM"
              {...register("mensagem", { required: true })}
              aria-invalid={errors.mensagem ? "true" : "false"}
            />
            {errors.mensagem?.type === "required" && (
              <p role="alert">Mensagem is required</p>
            )}
          </div>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
