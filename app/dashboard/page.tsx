import React from "react";
import { getContent } from "../actions";
import DashboardForm from "@/components/DashboardForm";

export default async function page() {
  const content = (await getContent()) as any;

  return <DashboardForm content={content} />;
}
