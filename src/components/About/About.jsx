import styles from "./About.module.scss";
import aboutPicture from "../../assets/pixeltrue-support-1 1.png";
import { motion } from "framer-motion";

const About = ({ aboutRef }) => {
  return (
    <section className={styles.container}>
      <motion.div className={styles.content} ref={aboutRef}>
        <motion.div
          className={styles.left}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2>
            About<span>.</span>
          </h2>
          <p>
            Hey there! <span className={styles.emoji}>👋</span>
            <br />
            <br />
            Welcome to my corner of the web! So, what's my story? Well, I've
            always had a passion for marketing, constantly exploring creative
            ways to reach audiences and make an impact.
            <br />
            <br />
            Along the way, I stumbled upon the captivating world of coding, and
            it was like love at first{" "}
            <span className={styles.helloworld}>"Hello, World!"</span>. So here
            I am, building my portfolio to land that first dream job. Despite
            being relatively new to the scene, I'm driven by a strong motivation
            to learn and grow, always ready to tackle any challenge that comes
            my way. <br />
            <br />
            When I'm not crafting websites, you'll often find me shooting hoops
            on the basketball court.
          </p>
        </motion.div>
        <motion.div
          className={styles.right}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img src={aboutPicture} alt="about illustration" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
