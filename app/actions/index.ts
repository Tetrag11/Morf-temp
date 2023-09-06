"use server";
import prisma from "../../prisma/index";

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
