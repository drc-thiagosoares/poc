import RegisterUser from "@/components/feature/RegisterUser";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fitness | Register User",
  description: "register user description",
};

export default function RegisterUserPage() {
  return (
    <>
      <section className="mt-20 block relative z-1 bg-blueGray-600">
        <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"></div>
        <div className="container mx-auto">
          <div className="flex flex-wrap"></div>
          <h1>CADASTRO CANDIDATOS</h1>
          <RegisterUser />
        </div>
      </section>
    </>
  );
}
