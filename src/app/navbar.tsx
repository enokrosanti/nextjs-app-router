import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          <Link href={`/`}>
            <li className={`mr-3 cursor-pointer ${pathname === "/" ? "text-blue-300" : "text-white"}`}>Home</li>
          </Link>
          <Link href={`/about`}>
            <li className={`mr-3 cursor-pointer ${pathname === "/about" ? "text-blue-300" : "text-white"}`}>About</li>
          </Link>
          <Link href={`/about/profile`}>
            <li className={`mr-3 cursor-pointer ${pathname === "/about/profile" ? "text-blue-300" : "text-white"}`}>Profile</li>
          </Link>
        </ul>
      </div>
      <div>
        <button onClick={() => router.push("/login")} className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer">
          Login
        </button>
      </div>
    </nav>
  );
}
