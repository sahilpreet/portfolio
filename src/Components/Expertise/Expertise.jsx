import React from "react";
import css from "./expertise.module.scss";
import { WhatDoIHelp, projectExperience } from "../../utils/data";
import {motion} from "framer-motion"
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const Expertise = () => {
  return (
    <motion.section
    initial="hidden"
    whileInView="show"
    variants={staggerContainer}
    viewport={{once:false,amount:0.25}} 
    className={css.wrapper}>
      <a className="anchor" id="expertise"></a>
      <div
        className={`paddings yPaddings flexCenter innerWidth ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectExperience.map((exp, i) => {
            return (
              <motion.div
              variants={fadeIn("right","tween",(i+1)*0.3,1)} 
              className={css.exp} key={i}>
                <div className="flexCenter" style={{ backgroundColor: exp.bg }}>
                  <exp.icon size={25} color="white" />
                </div>
                <div>
                  <span>{exp.name}</span>
                  {/* <span className="secondaryText">{exp.projects} Projects</span> */}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
        variants={textVariant(0.5)} 
        className={css.rightSide}>
          <span className="primaryText">What do I help?</span>
          {/* <br /> */}
          {WhatDoIHelp.map((paragraph, i) => {
            return (
              <span key={i} className="secondaryText">
                {paragraph}
              </span>
            );
          })}
          {/* <div className={`flexCenter ${css.stats}`}>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">250+</span>
              <span className="secondaryText">Projects Completed</span>
            </div>
            <div className={`flexCenter ${css.stat}`}>
              <span className="primaryText">250+</span>
              <span className="secondaryText">happy Clients</span>
            </div>
          </div> */}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Expertise;
