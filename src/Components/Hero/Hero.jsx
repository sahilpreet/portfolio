import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: false, amount: 0.25 }}
        className={`innerwidth ${css.container}`}
      >
        {/* upper elements */}
        <div
          className={css.upperElements}
        >
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey there, <br /> I'm Sahil
          </motion.span>
          <motion.span
          variants={fadeIn("left", "tween", 0.2, 1)} className="secondaryText">
            I develop beautiful simple
            <br />
            things, And I love what I do.
          </motion.span>
        </div>
        {/* person image */}
        <motion.div
        variants={slideIn("up", "tween", 0.3, 1)} className={css.person}>
          <motion.img
          variants={fadeIn("up", "tween", 0.5, 1)} src="./person21.png" alt="" />
        </motion.div>

        {/* email */}
        <a
          className={css.email}
          href="mailto:sahilpreetsingh9915545834@gmail.com"
        >
          sahilpreetsingh9915545834@gmail.com
        </a>

        {/* lower elements */}
        <div className={css.lowerElements}>
          <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)} className={css.experience}>
            <div className="primaryText">1</div>
            <div className="secondaryText">
              <div>Year</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)} className={css.certificate}>
            
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>Web developer</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
