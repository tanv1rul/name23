import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';
// import { repeat } from 'maath/dist/declarations/src/misc';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5 mx-auto">

          <div>
            <h1 className={`${styles.heroHeadText} font-Bangla text-center text-white`}>
              নৌযান ও নৌযন্ত্র কৌশল বিভাগ
            </h1>
          </div>

        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[60px] rounded-3xl border-2 border-secondary flex justify-center items-start p-1">

            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-4 h-4 rounded-full bg-secondary mb-1"
            />

        </div>

        </a>
      </div>
    </section>
  )
}

export default Hero