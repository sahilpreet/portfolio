import React from 'react'
import css  from "./Tech.module.scss";
import { motion } from "framer-motion";
import { fadeIn, footerVariants, staggerChildren, staggerContainer, zoomIn } from '../../utils/motion';

const Tech = () => {
  return (
    <motion.section
    initial="hidden"
    whileInView="show"
    variants={footerVariants}
    viewport={{once:false,amount:0.25}} 
    className={`paddings ${css.wrapper}`}>
        <a className="anchor" id="tech"></a>
        <div 
        className={`innerWidth flexCenter ${css.container}`}>
            <div className="primaryText">Technologies I Know</div>
            <motion.div 
            initial="hidden"
            whileInView="show"
            variants={staggerChildren}
            viewport={{once:false,amount:0.25}}
            className={`flexCenter ${css.techContainer}`}>
                <motion.img variants={zoomIn(0.55,0.5)} src="./tech/python.png" alt="" />
                <motion.img variants={zoomIn(0.65,0.5)} src="./tech/javascript.png" alt="" />
                <motion.img variants={zoomIn(0.70,0.5)}  src="./tech/java.png" alt="" />
                <motion.img variants={zoomIn(0.75,0.5)}  src="./tech/react.png" alt="" />
                <motion.img variants={zoomIn(0.80,0.5)} src="./tech/node.png" alt="" />
                <motion.img variants={zoomIn(0.85,0.5)} src="./tech/mongodb.png" alt="" />
                <motion.img variants={zoomIn(0.90,0.5)} src="./tech/html.png" alt="" />
                <motion.img variants={zoomIn(0.95,0.5)} src="./tech/css3.png" alt="" />
                <motion.img variants={zoomIn(1,0.5)} src="./tech/babel.png" alt="" />
                <motion.img variants={zoomIn(1.05,0.5)} src="./tech/bootstrap.png" alt="" />
                <motion.img variants={zoomIn(1.1,0.5)} src="./tech/github.png" alt="" />
                <motion.img variants={zoomIn(1.15,0.5)} src="./tech/npm.png" alt="" />
                <motion.img variants={zoomIn(1.2,0.5)} src="./tech/handlebars.png" alt="" />
                <motion.img variants={zoomIn(1.25,0.5)} src="./tech/typescript.png" alt="" />
                <motion.img variants={zoomIn(1.30,0.5)} src="./tech/webpack.png" alt="" />
                <motion.img variants={zoomIn(1.35,0.5)} src="./tech/yarn.png" alt="" />
            </motion.div>
        </div>
    </motion.section>
  )
}

export default Tech