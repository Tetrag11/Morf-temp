import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { signIn } from "next-auth/react";
import Image from "next/image";

import { json } from "stream/consumers";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1>hello</h1>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
}
