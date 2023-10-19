import React from "react";
import { getContent } from "../actions";
import DashboardForm from "@/components/Dashboard/DashboardForm";
import Link from "next/link";

export default async function page() {
  const content = (await getContent()) as any;

  return (
    <div className="max-w-screen-lg mx-auto py-36 flex flex-wrap gap-3">
      <Link
        className="p-3 bg-black text-white sm:text-lg text-sm h-fit  w-fit"
        href={"/dashboard/newproject"}
      >
        New Project
      </Link>
      <Link
        className="p-3 bg-black text-white sm:text-lg text-sm h-fit w-fit"
        href={"/dashboard/editproject"}
      >
        Edit Projects
      </Link>
    </div>
  );
}
