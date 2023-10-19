"use server";
import prisma from "../../prisma/index";
import { redirect } from "next/navigation";

export const getContent = async () => {
  const getContent = await prisma.morfContent.findFirst();
  if (getContent) {
    return getContent;
  } else {
    return false;
  }
};

export const updateContent = async (
  logo: string,
  email: string,
  telephone: string,
  instagram: string,
  linkedin: string,
  facebook: string,
  copyright: string,
  section1Heading: string,
  section1Description: string,
  section1ButtonText: string,
  section2Heading: string,
  bannerHeading: string,
  bannerDescription: string,
  section3Heading: string,
  section3Description: string,
  section3SubDescription: string
) => {
  try {
    const existingContent = await prisma.morfContent.findFirst();

    if (existingContent) {
      await prisma.morfContent.update({
        where: { id: existingContent.id },
        data: {
          logo,
          email,
          telephone,
          instagram,
          linkedin,
          facebook,
          copyright,
          section1Heading,
          section1Description,
          section1ButtonText,
          section2Heading,
          bannerHeading,
          bannerDescription,
          section3Heading,
          section3Description,
          section3SubDescription,
        },
      });

      console.log("Content updated successfully");
      return "successfully";
    } else {
      console.error("No MorfContent entry found to update");
    }
  } catch (error) {
    console.error("Error updating content:", error);
  } finally {
    await prisma.$disconnect();
  }
};

export const addNewProject = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const link = formData.get("link") as string;
  const thumbnail = formData.get("image") as string;

  try {
    // Create a new project object with the provided parameters
    const newProject = await prisma.project.create({
      data: {
        title: title,
        link: link,
        thumbnail: thumbnail,
      },
    });

    redirect("/dashboard");
  } catch (error) {
    // Handle any errors that may occur during the database operation
    throw error;
  } finally {
    // Close the Prisma client connection
    await prisma.$disconnect();
  }
};

export const getWork = async () => {
  const getWork = await prisma.project.findMany();
  if (getWork) {
    return getWork;
  } else {
    return false;
  }
};

export const editProject = async (formData: FormData) => {
  const id = Number(formData.get("id")) as number;
  const title = formData.get("title") as string;
  const link = formData.get("link") as string;
  const thumbnail = formData.get("image") as string;

  try {
    // Use Prisma's `update` method to update the project by its ID.
    const updatedProject = await prisma.project.update({
      where: {
        id: id, // Specify the project to update by its ID.
      },
      data: {
        title: title,
        thumbnail: thumbnail,
        link: link,
      },
    });

    redirect("/dashboard");
  } catch (error: any) {
    throw error;
  } finally {
    prisma.$disconnect;
  }
};

export const getSingleWork = async (id: number) => {
  try {
    // Use Prisma's `findUnique` method to retrieve a single project by its ID.
    const project = await prisma.project.findUnique({
      where: {
        id: id, // Specify the ID of the project you want to retrieve.
      },
    });

    return project; // Return the project if found.
  } catch (error) {
    throw new Error(`Unable to fetch project: `);
  } finally {
    await prisma.$disconnect(); // Disconnect from the Prisma Client when done.
  }
};
