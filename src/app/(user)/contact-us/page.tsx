import { Hero } from "@src/components/Hero/Hero";
import { NextPage } from "next";
import React from "react";
import Contact from "@src/components/Contact/Contact";

const ContactPage: NextPage = () => {
  return (
    <>
      <Hero
        heading="Get in touch with us"
        description="Reach out to us easily and connect with our dedicated team through our contact us page for prompt assistance and support."
        imageUrl="/contact-us.png"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
