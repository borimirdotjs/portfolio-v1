import styles from "./Footer.module.scss";
import blackLogo from "../../assets/bklogo-black.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span onClick={() => scrollToTop()} className={styles.scrollup}>
          ☝️
        </span>
        <div className={styles.content_items}>
          <a
            href="https://github.com/borimirdotjs/portfolio-v1"
            target="_blank"
            rel="noreferrer"
          >
            <img src={blackLogo} alt="black logo" />
            <span>Designed & Built by Borimir Kitev</span>
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Footer;
