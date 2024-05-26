import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  footerVariants,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      variants={staggerChildren}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <motion.div
        variants={textVariant2}
        //   variants={fadeIn("down","tween",1,1)}
        className={`innerWidth flexCenter yPaddings ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make Something <br /> amazing together.
          </span>
          <span className="primaryText">
            Download Resume
            <a href="./resume.pdf" target="_blank">
              <img src="./resume.png" alt="" />
            </a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Contact me</span>
            <p></p>
          </div>
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className={css.menu}
          >
            <a
              className={css.linkedin}
              target="_blank"
              href="https://www.linkedin.com/in/sahilpreet-s-1b36b016b/"
            >
              <li>
                <BsLinkedin />
              </li>
            </a>
            <a
              target="_blank"
              className={css.twitter}
              href="https://twitter.com/"
            >
              <li>
                <BsTwitter />
              </li>
            </a>
            <a
              target="_blank"
              className={css.github}
              href="https://github.com/sahilpreet"
            >
              <li>
                <BsGithub />
              </li>
            </a>
            <a
              target="_blank"
              className={css.mail}
              href="mailto:sahilpreetsingh9915545834@gmail.com"
            >
              <li>
                <AiFillMail />
              </li>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
