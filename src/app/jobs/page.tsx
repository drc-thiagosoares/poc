import type { Metadata } from "next";
import data from '@/mock/jobs.json'
import FindJobs from "@/components/feature/FindJobs";

export const metadata: Metadata = {
  title: "fitness | Jobs",
  description: "jobs description",
};



export default function JobsPage() {
  const jobs = data;
  return (
    <>
      <section className="mt-20 block relative z-1 bg-blueGray-600">
        <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"></div>
        <div className="container mx-auto">
          <div className="flex flex-wrap">

            <div className="container w-full md:w-12/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                <blockquote className="relative p-8 mb-4">
                  <h4 className="text-xl font-bold text-black uppercase">Buscar</h4>
                  <FindJobs />
                </blockquote>
              </div>
            </div>

            <div className="container w-full md:w-12/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-12/12 px-4">
                  {jobs.map((job) => (
                    <div key={jobs.id} className="relative flex flex-col mt-4 rounded-lg border">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">{job.title}</h6>
                        <p className="text-blueGray-500">
                          <strong>Tipo Remuneração: </strong>{job.contract}
                        </p>
                        <p className="text-blueGray-500">
                          <strong>Valor: </strong>{job.value}
                        </p>
                        <p className="text-blueGray-500">
                          <strong>Localização: </strong>{job.location}
                        </p>
                        <p className="text-blueGray-500">
                          {job.description}
                        </p>
                      </div>
                    </div>
                  ))} 
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
