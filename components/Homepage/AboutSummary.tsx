import React from "react";
import Link from "next/link";

export default function AboutSummary() {
  return (
    <div>
      <div className="w-full  sm:py-36 py-32 flex flex-col gap-1 justify-center items-center  max-w-screen-lg mx-auto border-b-[3px] border-black">
        <div className="flex flex-col gap-1 justify-center items-center w-fit sm:pr-60">
          <h1 className="sm:text-8xl text-6xl  font-bold merri self-center justify-self-center">
            Aesthetic.
          </h1>
          <div className="h-[40px] border-[1.5px] border-black w-0"></div>
        </div>
        <h4 className="sm:text-2xl text-base sm:text-left text-center   max-w-[460px] self-center sans">
          Im just a dude who loves creating stuff. Aesthetic stuff, yet simple.
        </h4>
        <div className="flex flex-col gap-1 justify-center items-center">
          <div className="h-[40px] border-[1.5px] border-black w-0"></div>
          <Link
            className="py-3 px-32 bg-black text-white sm:text-lg text-sm h-fit"
            href={"/about"}
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="relative w-full h-full max-w-[500px] py-20">
          <div className="relative w-full h-full flex flex-col justify-center items-center z-10">
            
            
            
          </div>
        </div> */
}
