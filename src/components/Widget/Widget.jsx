import { useState } from "react";
import styles from "./Widget.module.scss";
import { FaLink, FaCodepen, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useOutsideClick from "../../hooks/useOutsideClick";

const Widget = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleWidgetClose = () => {
    setIsVisible(false);
  };

  const widgetRef = useOutsideClick(handleWidgetClose);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const icons = [
    { icon: FaCodepen, delay: 0.2, href: "https://codepen.io/borimirdotjs" },
    { icon: FaGithub, delay: 0.1, href: "https://github.com/borimirdotjs" },
    {
      icon: FaLinkedinIn,
      delay: 0,
      href: "https://www.linkedin.com/in/borimirkitev/",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div
          className={styles.button}
          onClick={toggleVisibility}
          ref={widgetRef}
        >
          <FaLink />
        </div>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={styles.icons}
            >
              {icons.map((item, index) => (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2, delay: item.delay }}
                    className={styles.icon}
                    onClick={() => setIsVisible(false)}
                  >
                    <item.icon />
                  </motion.div>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Widget;
