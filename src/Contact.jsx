import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact_outer}>
      <h1 style={{ color: "white", textDecoration: "underline" }}>
        Get In Touch
      </h1>
      <form
        action="mailto:yashbansal1011@gmail.com"
        method="post"
        encType="text/plain"
      >
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="First Name"
            className={styles.istyle}
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Last Name"
            className={styles.istyle}
          />

        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={styles.istyle}
          />
          <input
            type="text"
            name="contactno"
            id="contactno"
            placeholder="Contact No."
            className={styles.istyle}
          />
        </div>

        <textarea
          id="message"
          rows="5"
          name="message"
          placeholder="Message"
          className={styles.istyle}
        ></textarea>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact;
