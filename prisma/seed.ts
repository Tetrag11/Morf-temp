import { PrismaClient } from "@prisma/client";
// @ts-ignore
import { hash } from "bcrypt";

const prisma = new PrismaClient();
async function main() {
  try {
    // Use Prisma to delete all records from the Project table
    await prisma.project.deleteMany({});

    console.log("All records in the Project table have been deleted.");
  } catch (error) {
    console.error("Error deleting records:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
