import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="pb-12 border-b-[3px] border-black mb-12 max-w-screen-lg mx-auto w-full">
      <div className="  bg-black w-full">
        <div className="w-full flex sm:justify-between justify-center sm:max-w-none max-w-[300px]  sm:flex-row flex-col p-6 ">
          <h1 className="sm:text-7xl text-5xl max-w-[450px]  font-bold   text-white sm:pb-0 pb-10">
            Have an idea? Lets discuss
          </h1>
          <span className="flex flex-col self-end sm:w-fit w-full justify-center">
            <p className="text-base text-white">Reach us on our email,</p>
            <h4 className="sm:text-3xl text-2xl text-white underline">
              <Link className=" merri" href={"mailto:#"}>
                tehanekanayake@gmail.com
              </Link>
            </h4>
          </span>
        </div>
      </div>
    </div>
  );
}
