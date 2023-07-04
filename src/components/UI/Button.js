import styles from "./Button.module.scss";

const Button = ({ children, padding, borderColor }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
