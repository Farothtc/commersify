import navData from "../lib/navData";
import Image from "next/image";
export default function NavDown() {
  return (
    <nav className="flex justify-between items-center gap-0">
      {navData.map((e) => (
        <div
          key={e.id}
          className="flex items-center gap-1 hover:bg-[#e2e7ff] mt-1 w-36 rounded-2xl"
        >
          <Image
            src={e.img}
            alt={e.title}
            width={70}
            height={70}
            className="p-2 rounded-bl-2xl rounded-xl"
          ></Image>
          <h1 className="text-black text-xs">{e.title}</h1>
        </div>
      ))}
    </nav>
  );
}
