import RegisterUser from "@/components/feature/RegisterUser";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fitness | Register User",
  description: "register user description",
};

export default function RegisterUserPage() {
  return (
    <>
      <h1>CADASTRO CANDIDATOS</h1>
      <RegisterUser />
    </>
  );
}
