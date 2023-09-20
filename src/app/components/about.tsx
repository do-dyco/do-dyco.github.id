import { Stack, Typography, Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <div ref={ref}>
      <Stack mt={6} spacing={2}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          exit={{ opacity: 0, y: -50 }}
        >
          <Typography color={"white"} align="center" variant="h5">
            About Me
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          exit={{ opacity: 0, y: -50 }}
        >
          <Typography color={"white"} align="left">
            Greetings! I'm Dody, a passionate web and mobile developer with over
            three years of hands-on experience in creating digital solutions
            that blend form and function seamlessly.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          exit={{ opacity: 0, y: -50 }}
        >
          <Typography color={"white"} align="left">
            What drives me in this ever-evolving field is the opportunity to
            continuously learn and innovate. I thrive on tackling challenges
            head-on, turning them into opportunities for growth and discovery.
            Staying at the forefront of technology trends allows me to provide
            cutting-edge solutions to my clients.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          exit={{ opacity: 0, y: -50 }}
        >
          <Typography color={"white"} align="left">
            Collaboration and communication are at the heart of my development
            process. I firmly believe that the best results are achieved when
            there is a strong partnership between the developer and the client.
            I value open and transparent communication, ensuring that your
            vision is not just met, but exceeded.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          exit={{ opacity: 0, y: -50 }}
        ></motion.div>
      </Stack>
    </div>
  );
};

export default AboutMe;
