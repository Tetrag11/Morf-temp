import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="py-12 mt-12 max-w-screen-lg mx-auto w-full lg:px-0 px-3">
      <div className="flex w-full justify-between flex-col sm:flex-row">
        <div className="flex justify-start flex-col ">
          <h1 className="sm:text-7xl text-5xl ">Portfolio</h1>
          <h3 className="sm:text-xl text-lg ">Tehan Ekanayake</h3>
        </div>
        <span className="flex flex-col self-end justify-end">
          <Link className="sm:text-base text-sm merri  text-right" href={"#"}>
            (077) 123 1223
          </Link>{" "}
          <Link className="sm:text-base text-sm  merri" href={"#"}>
            tehanekanayake@gmail.com
          </Link>
        </span>
      </div>
      <ul className="flex sm:gap-5 gap-2  sm:py-3    w-full  border-y-[3px] border-black my-3 ">
        <li>
          <Link className="sm:text-lg text-sm  " href={"#"}>
            Work
          </Link>
        </li>
        <li>
          <Link className="sm:text-lg text-sm  " href={"#"}>
            About
          </Link>
        </li>
        <li>
          <Link className="sm:text-lg text-sm  " href={"#"}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="sm:text-lg text-sm  " href={"#"}>
            Services
          </Link>
        </li>
      </ul>
      <div>
        <p className="text-sm mb-3">Copyright © 2023 morf®.</p>
      </div>
    </div>
  );
}
