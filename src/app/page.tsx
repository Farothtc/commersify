import Image from "next/image";
import NavUp from "./components/NavUp";
import NavDown from "./components/NavDown";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto">
        <div className="bg-[#e2e7ff]">
          <NavUp />
        </div>
        <NavDown />
        <div className="relative w-full h-[360px]">
          <Carousel />
        </div>
      </section>
    </main>
  );
}
