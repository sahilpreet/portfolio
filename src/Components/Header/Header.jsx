import React, { useState,useRef } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef=useRef()

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings .bg-primary ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter ${css.container}`}>
        <div className={css.name}>Sahil</div>
        <ul
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="#expertise">Services</a>
          </li>
          <li>
            <a href="#tech">Technologies</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
            {/* <a href="#people">testimonials</a> */}
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>6476759915</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>
        {/* only for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={"30px"}></BiMenuAltRight>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
