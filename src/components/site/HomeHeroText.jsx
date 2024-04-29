import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { IconCircleArrowDown } from '@tabler/icons-react';

export default function HeroText() {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delayChildren: 0.2,
        staggerChildren: 0.02,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleArrowClick = () => {
    const bioContentWrapper = document.getElementById('bio-content-wrapper');
    if (bioContentWrapper) {
      const yOffset = -4;
      const y = bioContentWrapper.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen relative top-[-40px] sm:top-[0px]">
      <motion.h1
        className="scroll-m-20 text-4xl sm:text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={wordVariants}>Hello,</motion.span>{" "}
        <motion.span variants={wordVariants}>my</motion.span>{" "}
        <motion.span variants={wordVariants}>name</motion.span>{" "}
        <motion.span variants={wordVariants}>is</motion.span>{" "}
        <motion.span className="text-teal-400" variants={wordVariants}>
          Luke Arsenault
        </motion.span>
        <motion.span variants={wordVariants}>,</motion.span>
        <br className="hidden sm:block" />{" "}
        <motion.span variants={wordVariants}>and</motion.span>{" "}
        <motion.span variants={wordVariants}>I'm</motion.span>{" "}
        <motion.span variants={wordVariants}>a</motion.span>{" "}
        <motion.span className="text-teal-400" variants={wordVariants}>
          full-stack software developer
        </motion.span>
        <motion.span variants={wordVariants}>.</motion.span>
      </motion.h1>

      <motion.div
        className="mt-[75px] animate-bounce cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.78, duration: 0.8 }}
        onClick={() => handleArrowClick()}
      >
        <IconCircleArrowDown size={60} stroke={1.2} />
      </motion.div>
    </div>
  );
}
