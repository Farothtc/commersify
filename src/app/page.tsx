import Image from "next/image";
import NavUp from "./components/NavUp";
import NavDown from "./components/NavDown";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto">
        <div className="bg-[#e2e7ff]">
          <NavUp />
        </div>
        <NavDown />
        <h1>Halo</h1>
      </section>
    </main>
  );
}
