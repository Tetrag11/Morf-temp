import React from "react";
import Link from "next/link";
export default function Work({ work }: any) {
  return (
    <div>
      <div className=" max-w-screen-lg mx-auto sm:py-36 py-32">
        <h1 className="sm:text-7xl text-5xl max-w-[215px] font-bold  pb-12 lg:pl-0 pl-3 ">
          MY WORK
        </h1>

        <div className="grid lg:grid-cols-[300px_300px_300px] sm:grid-cols-2 grid-cols-1 gap-3 justify-center px-5 lg:px-0">
          {work.length !== 0 &&
            work.map((project: any) => (
              <Link
                key={project.id}
                target="_blank"
                href={project.link}
                className=" w-full max-w-[300px] h-[300px] mx-auto border-[3px] border-black"
              >
                <img
                  src={project.thumbnail}
                  alt=""
                  className="w-full h-full object-cover  "
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
