import { PrismaClient } from "@prisma/client";
// @ts-ignore
import { hash } from "bcrypt";

const prisma = new PrismaClient();
async function main() {
  const password = (await hash("ramilka610", 12)) as any;

  const bob = await prisma.morfUsers.upsert({
    where: { email: "tehanekanayake@gmail.com" },
    update: {},
    create: {
      email: "tehanekanayake@gmail.com",
      name: "tetrag",
      password,
    },
  });
  console.log({ bob });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
