import type { Metadata } from "next";
import Link from "next/link";
import data from '@/mock/companies.json'

export const metadata: Metadata = {
  title: "fitness | Companies",
  description: "companies description",
};

export default function Companies() {
  const companies = data;
  return (
    <>
      <section className="mt-20 block relative z-1 bg-blueGray-600">
        <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"></div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            {companies.map((company) => (
              <div key={company.id} className="w-full md:w-3/12 px-4">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto bg-gray-500">
                        <Link
                          href={company.website}
                          target="_blank"
                        >
                          {company.name}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            ))}   

            

          </div>
        </div>
        <div className="container mx-auto overflow-hidden pb-20"></div>
      </section>
    </>
  );
}
