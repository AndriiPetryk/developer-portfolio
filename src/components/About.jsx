import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
          Senior Frontend Engineer is skilled in developing front-end, modern client-side libraries utilizing Javascript, Typescript, and React+Redux.</br>
          I was involved with translating business requirements into technical requirements.</br>
          I've successfully implemented micro front-end architectural approaches using React.js in applications for a cargo tracking system based in the EU.</br>
          Build highly scalable systems (mostly using Javascript/Typescript). 3 of them from scratch and 4 diving into an existing codebase.</br>
          Build rapid prototypes, and produce clean, well-documented, maintainable, testable, and scalable code for SAAS applications.</br>
          Provided recommendations for continuous improvement.</br>
          Mentored junior and middle engineers on best practices and professional conduct.</br>

          Best ways to get in touch: email me at apetryk.work@gmail.com or message me on LinkedIn</br>

          Core Competencies:</br>
          Web development | Frontend development | Software development | Buiding scalable web applications</br>
          | Javascript development | Typescript development | Frontend React.js/Redux development`

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
