"use client";
import { editProject } from "@/app/actions";
import React, { useState } from "react";

export default function Editproject({ project }: any) {
  const [id, setId] = useState(project?.id);
  const [title, setTitle] = useState(project?.title);
  const [link, setLink] = useState(project.link);
  const [image, setImage] = useState(project.thumbnail);
  return (
    <form
      action={editProject}
      className="max-w-[300px] flex flex-col gap-5 p-10   border-y-[3px] border-black"
    >
      <h4 className="sm:text-2xl text-base sans pb-5">Edit Project</h4>
      <div className="flex flex-col gap-3">
        <label htmlFor="title" className="">
          ID
        </label>
        <input
          value={id}
          name="id"
          className="w-full text-xs font-bold border-b-[3px] focus:outline-0 border-black border-opacity-30 pointer-events-none"
          type="number"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="title" className="">
          Title
        </label>
        <input
          value={title}
          name="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="w-full text-xs font-bold border-b-[3px] focus:outline-0 border-black border-opacity-30"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="title">Link</label>
        <input
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          name="link"
          className="w-full text-xs font-bold border-b-[3px] focus:outline-0 border-black border-opacity-30"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="title">Image</label>
        <input
          value={image}
          name="image"
          onChange={(e) => {
            setImage(e.target.value);
          }}
          className="w-full text-xs font-bold border-b-[3px] focus:outline-0 border-black border-opacity-30"
          type="text"
        />
      </div>

      <input
        type="submit"
        className=" p-3 bg-black text-white sm:text-lg text-sm h-fit"
      />
    </form>
  );
}
