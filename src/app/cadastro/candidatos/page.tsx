import RegisterUser from "@/components/feature/RegisterUser";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fitness | Cadastro Candidatos",
  description: "cadastro candidatos description",
};

export default function CadastroCandidatos() {
  return (
    <>
      <h1>CADASTRO CANDIDATOS</h1>
      <RegisterUser />
    </>
  );
}
