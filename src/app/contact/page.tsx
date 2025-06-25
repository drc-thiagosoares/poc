import type { Metadata } from "next";
import ContactForm from "@/components/feature/ContactForm";

export const metadata: Metadata = {
  title: "fitness | Contact",
  description: "contact description",
};

export default function ContactPage() {
  return (
    <>
      <section className="mt-20 block relative z-1 bg-blueGray-600">
        <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"></div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <ContactForm />
          </div>
        </div>
        <div className="container mx-auto overflow-hidden pb-20"></div>
      </section>
    </>
  );
}
