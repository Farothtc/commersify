import navData from "../lib/navData";
import Image from "next/image";
import Link from "next/link";
export default function NavDown() {
  const subDivCSS =
    "flex flex-col justify-center items-center w-full hover:opacity-35 hover:text-gray-700";
  const subTextCSS = "text-center text-sm font-light";
  const subImgCSS = "rounded-2xl";
  const slugify = (text: string) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");

  return (
    <nav className="flex justify-between items-center gap-0">
      {navData.map((e) => (
        <div
          key={e.id}
          className="flex justify-between items-center mt-1 w-40 rounded-2xl"
        >
          <div
            className={`${
              e.id === 9 || e.id === 8
                ? "dropdown dropdown-hover dropdown-bottom dropdown-end"
                : "dropdown dropdown-hover"
            }`}
          >
            <Link href={`${"/" + e.url}`}>
              <div
                tabIndex={e.id}
                role="button"
                className="btn btn-ghost shadow-none text-xs hover:bg-[#e2e7ff] border-0 w-full h-auto flex justify-between items-center"
              >
                <Image
                  src={e.img}
                  alt={e.title}
                  width={65}
                  height={65}
                  className="p-2 rounded-bl-2xl rounded-xl"
                ></Image>
                <h1 className="text-black text-xs font-light">{e.title}</h1>
              </div>
            </Link>
            <div
              tabIndex={e.id}
              className="dropdown-content card card-md bg-white z-1 w-98 h-auto mt-0.5 shadow-md"
            >
              <div className="card-body flex flex-row">
                <div className={`${subDivCSS}`}>
                  <Link
                    href={`/${e.url}/${slugify(e.subtitle.sub1 || "")}`}
                    className="flex flex-col justify-center items-center"
                  >
                    <Image
                      src={e.img}
                      alt={e.title}
                      width={80}
                      height={80}
                      className={`${subImgCSS}`}
                    ></Image>
                    <h2 className={`${subTextCSS}`}>{e.subtitle.sub1}</h2>
                  </Link>
                </div>
                <div className={`${subDivCSS}`}>
                  <Link
                    href={`/${e.url}/${slugify(e.subtitle.sub2 || "")}`}
                    className="flex flex-col justify-center items-center"
                  >
                    <Image
                      src={e.img}
                      alt={e.title}
                      width={80}
                      height={80}
                      className={`${subImgCSS}`}
                    ></Image>
                    <h2 className={`${subTextCSS}`}>{e.subtitle.sub2}</h2>
                  </Link>
                </div>
                {e.subtitle.sub3 && (
                  <div className={`${subDivCSS}`}>
                    <Link
                      href={`/${e.url}/${slugify(e.subtitle.sub3 || "")}`}
                      className="flex flex-col justify-center items-center"
                    >
                      <Image
                        src={e.img}
                        alt={e.title}
                        width={80}
                        height={80}
                        className={`${subImgCSS}`}
                      ></Image>
                      <h2 className={`${subTextCSS}`}>{e.subtitle.sub3}</h2>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
}
