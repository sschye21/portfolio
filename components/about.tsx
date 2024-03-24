"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import NextLink from 'next/link'
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="text-justify">
        <p>
          <span className="italic">When I&apos;m not coding</span>, I love <span className="italic">travelling</span> {" "}
          around the world, <span className="italic">exploring</span> {" "} new places, playing sport and trying new foods {" "}
          @<Link className="font-medium underline" href="https://tiktok.com/@rachandsteve" target="_blank">rachandsteve</Link> {" "}
          (check us out on TikTok!)
        </p>
        <br />
        <p className="mb-3">
          Born in {" "}<span className="italic">London</span>, raised in 
          {" "}<span className="italic">Singapore</span>{" "} and 
          {" "}<span className="italic">Sydney</span>, 
          and now immersed in the world of coding, I&apos;ve cultivated a global perspective 
          that fuels my passion for creating innovative
          solutions and pushing the boundaries of technology.
          I am a {" "}<span className="font-medium">Software Engineer</span>{" "} 
          at {" "}<span className="font-medium text-blue-500">Optus</span>, working to implement 
          {" "}<span className="font-medium">AI</span>{" "} in Optus' contact services
          to enhance customer experiences.
        </p>
        <p>
          I&apos;m only just getting started, and my passion for all things tech will only continue to grow!
        </p>
      </div>
    </motion.section>
  );
}
