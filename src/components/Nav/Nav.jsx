import styles from "./Nav.module.scss";
import logo from "../../assets/bklogo.svg";
import { Squash as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import { useAnimate, usePresence, stagger, motion } from "framer-motion";
import { handleScroll } from "../../utils/utils";

const Nav = ({ aboutRef, contactRef, skillsRef, projectsRef }) => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768 ? true : false);
  const [scope, animate] = useAnimate();
  const [isPresent] = usePresence();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        animate("button", { opacity: [0, 1] }, { delay: 0.7 });
        animate("img", { x: [-100, 0] });
        await animate(
          "li",
          { opacity: [0, 1], y: [50, 0] },
          { delay: stagger(0.15) }
        );
      };
      enterAnimation();
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const handleMenuClose = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <nav ref={scope} className={styles.navigation}>
      <motion.div whileHover={{ scale: 1.1 }} className={styles.logo}>
        <img src={logo} alt="portfolio logo" />
      </motion.div>
      <div className={styles.hamburger}>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          rounded
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <motion.div
        className={styles.links}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <ul>
          <motion.li
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              handleScroll(aboutRef);
              handleMenuClose();
            }}
          >
            About
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              handleScroll(skillsRef);
              handleMenuClose();
            }}
          >
            Skills
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              handleScroll(projectsRef);
              handleMenuClose();
            }}
          >
            Projects
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              handleScroll(contactRef);
              handleMenuClose();
            }}
          >
            Contact
          </motion.li>
        </ul>
        <button className={styles.resume}>Resume</button>
      </motion.div>
    </nav>
  );
};

export default Nav;
