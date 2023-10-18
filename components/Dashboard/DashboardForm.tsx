"use client";
import { updateContent } from "@/app/actions";
import React, { useEffect, useState } from "react";

export default function DashboardForm({ content }: any) {
  const [logo, setLogo] = useState(content.logo);
  const [email, setEmail] = useState(content.email);
  const [telephone, setTelephone] = useState(content.telephone);
  const [instagram, setInstagram] = useState(content.instagram);
  const [linkedin, setLinkedin] = useState(content.linkedin);
  const [facebook, setFacebook] = useState(content.facebook);
  const [copyright, setCopyright] = useState(content.copyright);
  const [section1Heading, setSection1Heading] = useState(
    content.section1Heading
  );
  const [section1Description, setSection1Description] = useState(
    content.section1Description
  );
  const [section1ButtonText, setSection1ButtonText] = useState(
    content.section1ButtonText
  );
  const [section2Heading, setSection2Heading] = useState(
    content.section2Heading
  );
  const [bannerHeading, setBannerHeading] = useState(content.bannerHeading);
  const [bannerDescription, setBannerDescription] = useState(
    content.bannerDescription
  );
  const [section3Heading, setSection3Heading] = useState(
    content.section3Heading
  );
  const [section3Description, setSection3Description] = useState(
    content.section3Description
  );
  const [section3SubDescription, setSection3SubDescription] = useState(
    content.section3SubDescription
  );

  const handleUpdateContent = async (e: any) => {
    e.preventDefault();
    const updatedContent = await updateContent(
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
      section3SubDescription
    );
  };

  return (
    <div>
      DashboardForms
      <form
        onSubmit={(e) => {
          handleUpdateContent(e);
        }}
        className="flex flex-col gap-5 pt-5"
      >
        <div className="flex gap-3">
          <img src={logo} alt="logo" />
          <input
            type="text"
            className="border border-black"
            value={logo}
            onChange={(e) => {
              setLogo(e.target.value);
            }}
          />
        </div>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          value={telephone}
          onChange={(e) => {
            setTelephone(e.target.value);
          }}
        />
        <input
          type="text"
          value={instagram}
          onChange={(e) => {
            setInstagram(e.target.value);
          }}
        />
        <input
          type="text"
          value={linkedin}
          onChange={(e) => {
            setLinkedin(e.target.value);
          }}
        />
        <input
          type="text"
          value={facebook}
          onChange={(e) => {
            setFacebook(e.target.value);
          }}
        />
        <input
          type="text"
          value={copyright}
          onChange={(e) => {
            setCopyright(e.target.value);
          }}
        />
        <input
          type="text"
          value={section1Heading}
          onChange={(e) => {
            setSection1Heading(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          value={section1Description}
          onChange={(e) => {
            setSection1Description(e.target.value);
          }}
        ></textarea>
        <input
          type="text"
          value={section1ButtonText}
          onChange={(e) => {
            setSection1ButtonText(e.target.value);
          }}
        />
        <input
          type="text"
          value={section2Heading}
          onChange={(e) => {
            setSection2Heading(e.target.value);
          }}
        />
        <input
          type="text"
          value={bannerHeading}
          onChange={(e) => {
            setBannerHeading(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          value={bannerDescription}
          onChange={(e) => {
            setBannerDescription(e.target.value);
          }}
        ></textarea>
        <input
          type="text"
          value={section3Heading}
          onChange={(e) => {
            setSection3Heading(e.target.value);
          }}
        />
        <textarea
          name=""
          id=""
          cols={30}
          rows={20}
          value={section3Description}
          onChange={(e) => {
            setSection3Description(e.target.value);
          }}
        ></textarea>
        <textarea
          name=""
          id=""
          cols={30}
          rows={20}
          value={section3SubDescription}
          onChange={(e) => {
            setSection3SubDescription(e.target.value);
          }}
        ></textarea>
        <input type="submit" />
      </form>
    </div>
  );
}
