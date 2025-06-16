import RegisterCompany from "@/components/feature/RegisterCompany";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fitness | Register Company",
  description: "register company description",
};

export default function RegisterCompanyPage() {
  return (
    <>
      <h1>CADASTRO EMPRESAS</h1>
      <RegisterCompany />
    </>
  );
}
