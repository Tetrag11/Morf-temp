"use client";
import React from "react";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <div className="w-full h-full bg-black">
      <div className="sm:py-20   pt-5 grid sm:grid-cols-[5fr_7fr]  border-b-[3px] border-black w-full lg:px-0 px-3 max-w-screen-lg mx-auto">
        <div className="sm:block flex items-center flex-col">
          <Link href={"/"}>
            <h1 className="sm:text-7xl text-5xl text-white">Portfolio</h1>
          </Link>
          <h3 className="sm:text-xl text-lg text-white">Tehan Ekanayake</h3>
        </div>
        <div className="flex items-end  sm:justify-center justify-center ">
          <ul className="flex sm:gap-5 gap-2  sm:py-3 pb-5  sm:justify-center justify-center w-full  sm:border-t-[3px] sm:border-white ">
            <li>
              <Link className="sm:text-lg text-sm  text-white" href={"/#work"}>
                Work
              </Link>
            </li>
            <li>
              <Link className="sm:text-lg text-sm  text-white" href={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link
                className="sm:text-lg text-sm text-white "
                href={"/#contact"}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="sm:text-lg text-sm text-white "
                href={"/#services"}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="sm:text-lg text-sm text-white "
                href={"/dashboard"}
              >
                Dashboard
              </Link>
            </li>
            {session && (
              <li>
                <button
                  className="sm:text-lg text-sm text-white "
                  onClick={() => signOut()}
                >
                  Log Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
