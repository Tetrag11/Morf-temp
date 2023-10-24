import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { signIn } from "next-auth/react";
import Image from "next/image";

import { json } from "stream/consumers";
import Header from "@/components/Header";
import AboutSummary from "@/components/Homepage/AboutSummary";
import Work from "@/components/Homepage/Work";
import { getWork } from "./actions";
import Banner from "@/components/Homepage/Banner";
import Services from "@/components/Homepage/Services";
import AboutMe from "@/components/Homepage/AboutMe";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const work = await getWork();

  return (
    <div className="flex flex-col justify-between">
      <AboutSummary />
      {work && <Work work={work} />}
      <Banner />
      <Services />
    </div>
  );
}
