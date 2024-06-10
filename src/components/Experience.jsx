import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';
import { Suspense, useEffect, useState } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";
import { div, exp } from "three/examples/jsm/nodes/Nodes.js";


const ExperienceCard = ({ experience, isMobile }) => {
  
  return (
  <VerticalTimelineElement
    contentStyle = {isMobile ? { background: '#1d1836', color: '#fff', height: 175, width: 235, marginLeft: "100px", marginBottom: 25} : { background: '#1d1836', color: '#fff', width: 350, height:200, marginBottom: 35, }}
    contentArrowStyle={isMobile ?{ borderRight: '7px solid #232631', marginTop: 15 } :{ borderRight: '7px solid #232631', marginTop: 35 }}
    college={experience.college}
    iconStyle={ isMobile ? { background: experience.iconBg, width: "100px", height: "100px", display: "inline-block", marginLeft: "-30px"} : { background: experience.iconBg, width: "150px", height: "150px", display: "inline-block", marginLeft: "-75px"}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[100%] h-[100%] rounded-full object-cover bg-center  hover:scale-125 transition-all"
        />
      </div>
    }
    // className={isMobile ? "mr-100" : "mr-0"}
  >
    
    <div>
      <h3 className="text-white text-left text-[22px] font-bold">
        {experience.name}
      </h3>
      <p className="text-left">{experience.college}</p>
    </div>

  </VerticalTimelineElement>)
}


const Experience = () => {


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },)


  return (
    <>

    <motion.div>
        <h2 className={styles.sectionHeadText}>Members</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) =>
        (
          <ExperienceCard key={index} experience={experience} isMobile={isMobile} />
        ))}
      </VerticalTimeline>
    </div>

    </>
  )
}

export default SectionWrapper(Experience, "members")