import styles from "./Contact.module.scss";
import contactPic from "../../assets/pixeltrue-newsletter-1 1.png";
import { motion } from "framer-motion";
import {
  sectionVariantsLeft,
  sectionVariantsRight,
} from "../../utils/animations";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { isValidEmail } from "../../utils/utils";
import { toast } from "react-hot-toast";

const Contact = ({ contactRef }) => {
  const formRef = useRef(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      return toast.error("Please enter a valid e-mail");
    }

    emailjs
      .sendForm(
        "service_kbtbv5o",
        "template_vyxv2j1",
        formRef.current,
        "iWUB7pD2NCNHTZila"
      )
      .then(
        () => {
          toast.success(
            "Thank you for your message. I will get back to you ASAP",
            {
              duration: 4000,
            }
          );
        },
        (error) => {
          console.log(error.text);
        }
      );

    setMessage("");
    setEmail("");
  };

  return (
    <section className={styles.container} ref={contactRef}>
      <div className={styles.title}>
        <h2>
          Contact<span>.</span>
        </h2>
        <p>I'm open for any opportunity.</p>
      </div>
      <div className={styles.wrapper}>
        <motion.div
          variants={sectionVariantsLeft}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className={styles.form_container}
        >
          <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="from_name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button disabled={!message || !email}>Send</button>
          </form>
        </motion.div>
        <motion.div
          variants={sectionVariantsRight}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className={styles.picture}
        >
          <img src={contactPic} alt="contact illustration" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
