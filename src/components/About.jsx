import React from 'react';
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon, forward}) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("", "spring", 0.5 * index, 1) }
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >

          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >

            <img src={icon} alt={title} className="w-30 h-30 object-contain"/>

            <a href={forward} className="text-white text-[20px] font-bold text-center" target='_blank'>{title}</a>

          </div>

        </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className="mt-4 text-secondary inline-block text-center text-[17px] max-w-3xl leading-[30px]"
      >
        Embarking on a journey through the waves of innovation and engineering; we are excited to be a part of this journey of exploration. This field perfectly blends our passion for engineering with our fascination for the maritime world. We are eager to dive into the complexities of ship design, propulsion systems, and marine technologies, and to develop the necessary skills  to shape the future of maritime engineering.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 mx-auto justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
