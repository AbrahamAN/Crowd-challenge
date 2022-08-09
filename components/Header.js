import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className="bg-black text-white flex items-center justify-center h-14  ">
      <div>
        <img
          className="w-5 h-5 mr-10 md:w-10 md:h-10 cursor-pointer"
          alt="Logo"
          src="https://sortlist.gumlet.io/sortlist-core-api/dczs37lmhd2h1ncsk9a40ga9lsfm?w=150&q=95&format=auto"
          onClick={() => router.push("/")}
        />
      </div>
      <div>
        <ul className="flex h-9 justify-center items-center text-base sm:text-lg md:text-xl">
          <li className="mr-5">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
