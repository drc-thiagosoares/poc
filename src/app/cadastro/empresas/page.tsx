import RegisterCompany from "@/components/feature/RegisterCompany";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fitness | Cadastro Empresas",
  description: "cadastro empresas description",
};

export default function CadastroEmpresas() {
  return (
    <>
      <h1>CADASTRO EMPRESAS</h1>
      <RegisterCompany />
    </>
  );
}
