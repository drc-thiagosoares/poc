import RegisterCompany from "@/components/feature/RegisterCompany";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fitness | Register Company",
  description: "register company description",
};

export default function RegisterCompanyPage() {
  return (
    <>
      <section className="mt-20 block relative z-1 bg-blueGray-600">
        <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"></div>
        <div className="container mx-auto">
          <div className="flex flex-wrap"></div>
          <h1>CADASTRO CANDIDATOS</h1>
           <RegisterCompany />
        </div>
      </section>
     
    </>
  );
}
