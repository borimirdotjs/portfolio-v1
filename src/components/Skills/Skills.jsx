import styles from "./Skills.module.scss";
import { FaHtml5, FaCss3Alt, FaSass, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FiFigma } from "react-icons/fi";
import {
  SiJest,
  SiReactquery,
  SiFramer,
  SiMongoose,
  SiExpress,
} from "react-icons/si";
import { TbBrandRedux, TbBrandReact } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { useState } from "react";
import { getIconInfo } from "../../utils/GetIconInfo";
import { AnimatePresence, motion } from "framer-motion";
import { sectionVariantsLeft } from "../../utils/animations";

const Skills = ({ skillsRef }) => {
  const [hovered, setHovered] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleIconHover = (iconName) => {
    setHovered(iconName);
  };

  const renderIconInfo = () => {
    const { title, description } = getIconInfo(hovered);
    if (title && description) {
      return (
        <div className={styles.iconInfo}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      );
    }
    return null;
  };

  const handleMouseOut = () => {
    handleIconHover("");
    setIsVisible(false);
  };

  return (
    <section className={styles.content} ref={skillsRef}>
      <h2>
        Skills<span>.</span>
      </h2>
      <motion.div
        variants={sectionVariantsLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.wrapper}
      >
        <div className={styles.left}>
          <div className={styles.skills}>
            <p>Technologies and libraries I am interested in.</p>
            <div className={styles.icons}>
              <FaHtml5
                className={styles.icon}
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("HTML");
                }}
                onMouseLeave={handleMouseOut}
              />
              <FaCss3Alt
                className={styles.icon}
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("CSS");
                }}
                onMouseLeave={handleMouseOut}
              />
              <IoLogoJavascript
                className={styles.icon}
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("JavaScript");
                }}
                onMouseLeave={handleMouseOut}
              />
              <TbBrandReact
                className={styles.icon}
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("React");
                }}
                onMouseLeave={handleMouseOut}
              />
              <FaSass
                className={styles.icon}
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("Sass");
                }}
                onMouseLeave={handleMouseOut}
              />
              <TbBrandRedux
                className={styles.icon}
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("Redux Toolkit");
                }}
                onMouseLeave={handleMouseOut}
              />
              <FaGithub
                className={styles.icon}
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("Github");
                }}
                onMouseLeave={handleMouseOut}
              />
              <SiReactquery
                className={styles.icon}
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("TanStack React Query");
                }}
                onMouseLeave={handleMouseOut}
              />
              <FiFigma
                className={styles.icon}
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("Figma");
                }}
                onMouseLeave={handleMouseOut}
              />
            </div>
          </div>
          <div className={styles.skills}>
            <p>Still getting better at.</p>
            <div className={styles.icons}>
              <BiLogoTypescript
                className={styles.icon}
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("TypeScript");
                }}
                onMouseLeave={handleMouseOut}
              />

              <SiJest
                className={styles.icon}
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("Jest");
                }}
                onMouseLeave={handleMouseOut}
              />
              <SiFramer
                className={styles.icon}
                alt="framermotion"
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("Framer Motion");
                }}
                onMouseLeave={handleMouseOut}
              />
              <SiMongoose
                className={styles.icon}
                alt="mongoose"
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("Mongoose");
                }}
                onMouseLeave={handleMouseOut}
              />
              <SiExpress
                className={styles.icon}
                alt="express"
                onMouseEnter={() => {
                  setIsVisible(true);
                  handleIconHover("Express");
                }}
                onMouseLeave={handleMouseOut}
              />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ x: 20, opacity: 0 }}
              className={styles.right}
              transition={{ type: "ease" }}
            >
              {renderIconInfo()}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
