import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fitness | Jobs",
  description: "jobs description",
};

export default function JobsPage() {
  return (
    <>
    <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
      <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"></div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">

          <div className="w-full md:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
              <blockquote className="relative p-8 mb-4">
                <h4 className="text-xl font-bold text-black">Buscar Vagas</h4>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-12/12 px-4">

                <div className="relative flex flex-col mt-4">
                  <div className="px-4 py-5 flex-auto">
                    <div
                      className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                    >
                      <i className="fas fa-sitemap"></i>
                    </div>
                    <h6 className="text-xl mb-1 font-semibold">Título Vaga #01</h6>
                    <p className="text-blueGray-500">
                      <strong>Tipo Remuneração: </strong>Horas Trabalhadas
                    </p>
                    <p className="text-blueGray-500">
                      <strong>Valor: </strong>R$ 5.000,00
                    </p>
                    <p className="text-blueGray-500">
                      <strong>Localização: </strong>São Paulo - SP
                    </p>
                    <p className="text-blueGray-500">
                      Estamos montando o time de uma nova academia que em breve será inaugurada
                    </p>
                  </div>

                  
                </div>
                
              </div>
            </div>
          </div>
          

        </div>
      </div>

      <div className="container mx-auto overflow-hidden pb-20"></div>
    </section>
    </>
  );
}
