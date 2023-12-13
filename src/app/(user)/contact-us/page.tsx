import { Hero } from "@src/components/Hero/Hero";
import { NextPage } from "next";
import React from "react";
import Contact from "@src/components/Contact/Contact";

const ContactPage: NextPage = () => {
  return (
    <>
      <h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
        rerum amet reprehenderit autem exercitationem alias, facilis quia qui
        debitis reiciendis nulla et. Iure molestiae soluta dicta laborum aperiam
        ducimus eligendi.lore llorem
      </h1>
      <Hero
        heading="Get in touch with us"
        description="Reach out to us easily and connect with our dedicated team through our contact us page for prompt assistance and support."
        imageUrl="/contact-us.png"
        btnLink="/"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
