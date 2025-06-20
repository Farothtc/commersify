"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function NavUp() {
  const [userChange, setUserChange] = useState("/user.svg");
  const [favChange, setFavChange] = useState("/favorites.svg");
  const [cartChange, setCartChange] = useState("/cart.svg");

  const btnGeneralCss = "flex items-center btn btn-ghost w-full";
  const wrapperGenCss = "flex justify-center items-center w-full";
  return (
    <nav className="flex justify-evenly items-center pt-2 bg-transparent">
      <Link href={"/"}>
        <Image
          src={"/logo.PNG"}
          alt="Logo"
          width={100}
          height={100}
          className="rounded-4xl"
        ></Image>
      </Link>
      <label className="input bg-transparent border-black rounded-4xl placeholder:text-gray-700 focus:border-black w-[50%] focus-within:outline-none focus-within:ring-1 focus-within:ring-black focus-within:ring-offset-2">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" className="grow" placeholder="Search" />
      </label>
      <div className="flex gap-3">
        <Link href={"/login"} className="w-full">
          <div className={`${wrapperGenCss}`}>
            <button
              className={`${btnGeneralCss}`}
              onMouseEnter={() => setUserChange("/userActive.svg")}
              onMouseLeave={() => setUserChange("/user.svg")}
            >
              <Image src={userChange} alt="User" width={22} height={22}></Image>{" "}
              Login
            </button>
          </div>
        </Link>
        <div className={`${wrapperGenCss}`}>
          <Link href={"/favorites"} className="w-full">
            <button
              className={`${btnGeneralCss}`}
              onMouseEnter={() => setFavChange("/favoritesActive.svg")}
              onMouseLeave={() => setFavChange("/favorites.svg")}
            >
              <Image
                src={favChange}
                alt="Favorites"
                height={22}
                width={22}
              ></Image>{" "}
              Favorites
            </button>
          </Link>
        </div>
        <div className={`${wrapperGenCss}`}>
          <Link href={"/basket"} className="w-full">
            <button
              className={`${btnGeneralCss}`}
              onMouseEnter={() => setCartChange("/cartActive.svg")}
              onMouseLeave={() => setCartChange("/cart.svg")}
            >
              <Image
                src={cartChange}
                alt="Favorites"
                height={22}
                width={22}
              ></Image>{" "}
              Basket
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
