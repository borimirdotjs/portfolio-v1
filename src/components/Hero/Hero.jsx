import styles from "./Hero.module.scss";
import { handleScroll } from "../../utils/utils";
import avatar from "../../assets/avatar.png";
import { motion } from "framer-motion";
import {
  sectionVariantsLeft,
  sectionVariantsRight,
} from "../../utils/animations";

const Hero = ({ contactRef }) => {
  return (
    <section className={styles.container}>
      <motion.div
        variants={sectionVariantsLeft}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className={styles.left}
      >
        <h1 className={styles.title}>
          Hi, my name is <br />
          <span className={styles.name}>Borimir Kitev</span>
          <span className={styles.dot}>.</span>
          <br />
          Aspiring Front-End Developer
        </h1>
        <button className={styles.cta} onClick={() => handleScroll(contactRef)}>
          Get in touch
        </button>
      </motion.div>
      <motion.div
        variants={sectionVariantsRight}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className={styles.right}
      >
        <div className={styles.blob}>
          <img className={styles.avatar} src={avatar} alt="" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
