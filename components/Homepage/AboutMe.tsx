import Link from "next/link";
import React from "react";

export default function AboutMe() {
  return (
    <div className="max-w-screen-lg mx-auto lg:p-20 p-10 w-full  my-20">
      <div className="flex justify-between gap-3  flex-col lg:flex-row">
        <p className="lg:max-w-[400px]  text-lg order-2 lg:order-1 ">
          With over 2 years of freelance experience in web development, I am a
          highly skilled and reliable web developer proficient in HTML, CSS,
          JavaScript, and various frameworks like React and Next.js. I
          specialize in crafting elegant and minimalistic web designs while
          ensuring the inclusion of all the necessary features for complex
          websites.
        </p>
        <span className=" flex  flex-col gap-2 order-1 lg:order-2 items-center pb-10  lg:pb-0">
          <h1 className="sm:text-7xl text-4xl  font-bold   ">ABOUT ME</h1>
          <h4 className="sm:text-3xl text-xl lg:px-0 px-3  text-center ">
            Tehan Ekanayake
          </h4>
          <div className="pt-2 border-black border-t-[3px]">
            <p className="text-center  text-sm">
              Web Developer | HTML/CSS | JavaScript | React | WordPress
            </p>
          </div>
        </span>
      </div>
      <p className=" pt-10 text-lg ">
        Having worked on diverse projects as a freelancer, I have honed my
        abilities to deliver high-quality work within deadlines. My portfolio
        includes successful collaborations with university students on their web
        development projects, as well as commercial projects for registered
        companies.
      </p>
      <p className=" pt-10 text-lg ">
        As a developer, I prioritize client satisfaction and believe in
        establishing clear communication to understand their requirements fully.
        By forming a strong connection with clients, I ensure that their vision
        aligns with the final product. My commitment to delivering on-time and
        maintaining high standards underscores my dedication to being a reliable
        source in the field of web development.
      </p>
      <div className="flex justify-between gap-3 pt-10 lg:flex-row flex-col">
        <div className="flex flex-col gap-10 order-2 lg:order-1">
          <p className="lg:max-w-[400px]  text-lg">
            While I do not hold any certifications, I have acquired my skills
            through self-study, constantly staying up-to-date with industry
            trends and best practices. I am passionate about creating web
            designs that exude both simplicity and sophistication, blending
            aesthetics with functionality.
          </p>
          <span className="flex gap-3">
            <Link
              className="py-3 px-16 lg:px-32 text-white bg-black border-black border-[3px]  sm:text-lg text-sm h-fit"
              href={"https://www.linkedin.com/in/tehan-ekanayake-6492ab20a/"}
              target="_blank"
            >
              LinkedIn
            </Link>
          </span>
        </div>
        <span className="max-w-[300px] py-10 border-black border-y-[3px] order-1 lg:order-2 lg:mx-0 mx-auto lg:my-0 my-10">
          <p className=" text-3xl">
            If you are seeking a dependable web developer who can bring your
            vision to life, let us collaborate on your next project.
          </p>
        </span>
      </div>
    </div>
  );
}
