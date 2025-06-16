import RegisterLinks from "@/components/feature/RegisterLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "fitness | Home",
  description: "home description",
};

export default function HomePage() {
  return (
    <>
      <RegisterLinks />
    </>
  );
}
