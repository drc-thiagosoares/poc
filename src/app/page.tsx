import UIButtonFindJobs from "@/components/ui/buttons/FindJobs";
import UIButtonRegister from "@/components/ui/buttons/Register";
import type { Metadata } from "next";
import Image from 'next/image'

export const metadata: Metadata = {
  title: "fitness | Home",
  description: "home description",
};

export default function HomePage() {
  return (
    <>
      <section
        className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 header relative pt-16 items-center flex h-screen max-h-860-px"
      >
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                fitness
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Crie sua conta, preencha seu perfil e busque ou seja encontrado pelas maiores academias do Brasil.
              </p>
              <div className="mt-12">
                <UIButtonRegister />
                <UIButtonFindJobs />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
