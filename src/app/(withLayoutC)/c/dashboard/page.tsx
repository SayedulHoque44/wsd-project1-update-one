import Hero from "@/components/Dashboard/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USUKC | ADMIN PANEL",
  description: "This is admin panel",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
