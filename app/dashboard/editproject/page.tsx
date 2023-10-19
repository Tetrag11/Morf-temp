import { getWork } from "@/app/actions";
import Editproject from "@/components/Dashboard/Editproject";
import Link from "next/link";
import React from "react";

export default async function page() {
  const projects = await getWork();
  return (
    <div className="w-full max-w-screen-lg mx-auto py-36">
      <h1 className="text-5xl">Edit project</h1>
      <div className=" py-36  grid lg:grid-cols-[300px_300px_300px] sm:grid-cols-2 grid-cols-1 gap-3 justify-center px-5 lg:px-0">
        {projects &&
          projects.length !== 0 &&
          projects.map((project: any) => (
            <Link
              key={project.id}
              href={`editproject/${project.id}`}
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
  );
}
