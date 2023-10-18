import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-full bg-black">
      <div className="sm:py-20   pt-5 grid sm:grid-cols-[5fr_7fr]  border-b-[3px] border-black w-full lg:px-0 px-3 max-w-screen-lg mx-auto">
        <div className="sm:block flex items-center flex-col">
          <h1 className="sm:text-7xl text-5xl text-white">Portfolio</h1>
          <h3 className="sm:text-xl text-lg text-white">Tehan Ekanayake</h3>
        </div>
        <div className="flex items-end  sm:justify-center justify-center ">
          <ul className="flex sm:gap-5 gap-2  sm:py-3 pb-5  sm:justify-center justify-center w-full  sm:border-t-[3px] sm:border-white ">
            <li>
              <Link className="sm:text-lg text-sm  text-white" href={"#"}>
                Work
              </Link>
            </li>
            <li>
              <Link className="sm:text-lg text-sm  text-white" href={"#"}>
                About
              </Link>
            </li>
            <li>
              <Link className="sm:text-lg text-sm text-white " href={"#"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="sm:text-lg text-sm text-white " href={"#"}>
                Services
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
