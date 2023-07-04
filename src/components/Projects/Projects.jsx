import styles from "./Projects.module.scss";
import { works } from "../../utils/WorksData";
import Link from "../UI/Link";
import { motion } from "framer-motion";
import {
  sectionVariantsLeft,
  sectionVariantsRight,
} from "../../utils/animations";

const Projects = ({ projectsRef }) => {
  return (
    <section className={styles.container}>
      <div className={styles.content} ref={projectsRef}>
        <div className={styles.title}>
          <h2>
            Projects<span>.</span>
          </h2>
          <p>Some of the projects that I’ve build.</p>
        </div>
        <div className={styles.works_container}>
          {works.map((project) => (
            <div className={styles.work} key={project.id}>
              <motion.div
                variants={sectionVariantsLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={styles.left}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span>{project.stack}</span>
                <div className={styles.buttons}>
                  <Link href={project.liveLink}>Live Demo</Link>
                  <Link href={project.githubLink}>GitHub</Link>
                </div>
              </motion.div>
              <motion.div
                variants={sectionVariantsRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={styles.right}
              >
                <img src={project.photo} alt="design mockup of the project" />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
