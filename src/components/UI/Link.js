import styles from "./Link.module.scss";

const Link = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      data-content={children}
      className={styles.link}
    >
      {children}
    </a>
  );
};

export default Link;
