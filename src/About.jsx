import React from "react";
import styles from "./About.module.css";
import amazonml from "./img/amazonml2.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [refImage, inViewImage] = useInView({
    triggerOnce: false, // Trigger the animation every time the image comes into view
    threshold: 0.2, // 20% of the image should be visible before animation starts
  });

  const [refPoints, inViewPoints] = useInView({
    triggerOnce: false, // Trigger the animation every time points come into view
    threshold: 0.2, // 20% of the points should be visible before animation starts
  });

  return (
    <section id="about" className={styles.about_outer}>
      <h1
        style={{
          color: "white",
          textDecoration: "underline",
          marginTop: "50px",
        }}
      >
        Achievements
      </h1>

      <a
        href="https://drive.google.com/file/d/1HTLbvBRM5y6ZIETwPk21Bu5-aMBKmAFw/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.imagePoints}
      >
        <div className={styles.imagePoints2}>
          {/* Animate the image div from right to left */}
          <motion.div
            ref={refImage}
            id="image"
            // initial={{ x: "100vw", opacity: 0 }} // Image starts offscreen to the right
            animate={
              inViewImage ? { x: 0, opacity: 1 } : { x: "70%", opacity: 0 }
            } // Slide into view when visible
            transition={{ type: "spring", duration: 2, bounce: 0.3 }} // Smooth spring animation
          >
            <img
              src={amazonml}
              alt="amazon"
              style={{
                width: "600px",
                height: "300px",
                boxSizing: "border-box",
                padding: "0",
                margin: "0",
                border: "none",
                borderRadius: "20px",
                boxShadow: "0 0 5px 2px rgba(255, 255, 255, 0.8)",
              }}
            />
          </motion.div>

          {/* Animate the points div opacity from 0 to 1 */}
          <motion.div
            ref={refPoints}
            id="points"
            initial={{ opacity: 0 }}
            animate={inViewPoints ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 4 }} // Fade-in transition
          >
            <div className={styles.title}>
              <h2 style={{ color: "white", textDecoration: "underline" }}>
                Amazon ML Summer School 2024
              </h2>
              <h2 style={{ color: "white", textDecoration: "underline" }}>
                4th Edition
              </h2>
            </div>
            <ul>
              <li>
                Selected for Amazon’s premier ML program, focusing on advanced
                ML concepts.
              </li>
              <li>
                Gained hands-on experience in Reinforcement Learning and
                Generative AI.
              </li>
              <li>Engaged in Q&A sessions with Amazon Scientists.</li>
            </ul>
          </motion.div>
        </div>
      </a>
    </section>
  );
};

export default About;
