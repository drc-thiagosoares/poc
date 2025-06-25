'use client'

import { useForm } from "react-hook-form"

interface IJob {
  state: string
  city: string
  contract: string
}

export default function FindJobs() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IJob>()
  const onSubmit = (data: IJob) => console.log(data)
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>State:</label>
          <input
            {...register("state", { required: true })}
            aria-invalid={errors.state ? "true" : "false"}
          />
          {errors.state?.type === "required" && (
            <p role="alert">State is required</p>
          )}
        </div>
        <div>
          <label>Cidade:</label>
          <input
            {...register("city", { required: true })}
            aria-invalid={errors.city ? "true" : "false"}
          />
          {errors.city?.type === "required" && (
            <p role="alert">City is required</p>
          )}
        </div>
        <div>
          <label>Contrat:</label>
          <input
            {...register("contract", { required: true })}
            aria-invalid={errors.contract ? "true" : "false"}
          />
          {errors.contract?.type === "required" && (
            <p role="alert">Contract is required</p>
          )}
        </div>
        <input type="submit" />
      </form>
    </>
  );
}
