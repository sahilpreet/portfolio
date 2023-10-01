import React from "react";
import css from "./Projects.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Projects = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="projects"></a>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My latest Work</span>
            <p style={{ marginTop: "10px" }}>Perfect solution</p>
          </div>

          <span className="secondaryText">Explore More Works</span>
        </div>

        {/* images of projects */}
        <div className={`flexCenter ${css.showCase}`}>
          <a href="https://sahil99155.pythonanywhere.com/" target="_blank">
            <motion.img
              variants={fadeIn("up", "tween", 0.5, 0.6)}
              src="./project1.png"
              alt="project"
            />
          </a>
          <a href="https://react-chat-5xzz.onrender.com/"
          target="_blank">
            <motion.img
              variants={fadeIn("up", "tween", 0.6, 0.6)}
              src="./project2.png"
              alt="project"
            />
          </a>
          <a href="">
            <motion.img
              variants={fadeIn("up", "tween", 0.7, 0.6)}
              src="./project3.png"
              alt="project"
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
