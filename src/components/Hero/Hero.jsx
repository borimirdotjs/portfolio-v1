import styles from "./Hero.module.scss";
import { handleScroll } from "../../utils/utils";

const Hero = ({ contactRef }) => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
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
      </div>
      <div className={styles.right}>
        {/* <img src={avatar} alt="avatar" /> */}
      </div>
    </section>
  );
};

export default Hero;
