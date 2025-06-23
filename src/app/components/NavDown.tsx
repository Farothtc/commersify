import navData from "../lib/navData";
import Image from "next/image";
import Link from "next/link";
export default function NavDown() {
  return (
    <nav className="flex justify-between items-center gap-0">
      {navData.map((e) => (
        <div
          key={e.id}
          className="flex justify-between items-center gap-1 mt-1 w-40 rounded-2xl"
        >
          <div className="dropdown dropdown-hover">
            <Link href={`${"/" + e.url}`}>
              <div
                tabIndex={e.id}
                role="button"
                className="btn btn-ghost shadow-none text-xs hover:bg-[#e2e7ff] border-0 w-full flex justify-between items-center"
              >
                <Image
                  src={e.img}
                  alt={e.title}
                  width={55}
                  height={55}
                  className="p-2 rounded-bl-2xl rounded-xl"
                ></Image>
                <h1 className="text-black text-xs">{e.title}</h1>
              </div>
            </Link>
            <div
              tabIndex={e.id}
              className="dropdown-content card card-md bg-white z-1 w-98 mt-0.5 shadow-md"
            >
              <div className="card-body">
                <p>This is a card. You can use any element as a dropdown.</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
}
