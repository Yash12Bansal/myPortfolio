import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Experience.module.css";
import { FaCalendarAlt } from "react-icons/fa";
import kalpavriksha from "./img/kalpa.jpg";
import cn from "./img/cnl.jpg";

const Experience = () => {
  const { ref: ref1, inView: inView1, entry: entry1 } = useInView({
    triggerOnce: false, // Trigger animation every time it comes into view
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2, entry: entry2 } = useInView({
    triggerOnce: false, // Trigger animation every time it comes into view
    threshold: 0.1,
  });

  const animationVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    hiddenLeft: { opacity: 0, x: -100 },
    visibleLeft: { opacity: 1, x: 0 },
  };

  return (
    <section id="experience" className={styles.experience_outer}>
      <h1 style={{ color: "white", textDecoration: "underline" }}>
        Internships
      </h1>
      <div className={styles.jobs}>
        <motion.div
          id="div1"
          className={styles.job}
          ref={ref1}
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 1 }}
          style={{ borderBottom: "1px dotted white" }}
        >
          <div className={styles.title}>
            <img
              src={kalpavriksha}
              alt="Kalpavriksha"
              style={{
                width: "90px",
                height: "90px",
                boxSizing: "border-box",
                padding: "0",
                margin: "0",
                border: "none",
                borderRadius: "50%",
                boxShadow: "0 0 5px 2px rgba(255, 255, 255, 0.8)",
              }}
            />
            <div style={{ marginLeft: "20px" }}>
              <div>Software Engineering Intern</div>
              <div>Kalpavriksh Healthcare</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaCalendarAlt size={14} color="white" />
                <div
                  style={{
                    fontSize: "0.9rem",
                    marginLeft: "10px",
                  }}
                >
                  Jan 2023 - Jun 2023
                </div>
              </div>
            </div>
          </div>
          <ul>
            <li>
              Developed a carbohydrate counting tool for Indian foods with a
              database of 700+ items.
            </li>
            <li>
              Automated bolus dose calculation using a reinforcement algorithm
              in the “T1-Life” app.
            </li>
            <li>
              Achieved a 90% patient acceptance rate for the dosage predictions.
            </li>
            <li>
              Built the backend and web app “T1-Expert” (Node.js) for doctors to
              monitor patient data.
            </li>
            <li>
              Set up a CI/CD pipeline using GitHub Actions for automated
              deployment on Azure.
            </li>
          </ul>
        </motion.div>

        <motion.div
          id="div2"
          className={styles.job}
          ref={ref2}
          initial="hiddenLeft"
          animate={inView2 ? "visibleLeft" : "hiddenLeft"}
          variants={animationVariants}
          transition={{ duration: 1 }}
          style={{ marginTop: "50px" }}
        >
          <div className={styles.title}>
            <img
              src={cn}
              alt="Coding Ninjas"
              style={{
                width: "90px",
                height: "90px",
                boxSizing: "border-box",
                padding: "0",
                margin: "0",
                border: "none",
                borderRadius: "50%",
                boxShadow: "0 0 5px 2px rgba(255, 255, 255, 0.8)",
              }}
            />
            <div style={{ marginLeft: "20px" }}>
              <div>Teaching Assistant | ML | DSA</div>
              <div>Coding Ninjas</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FaCalendarAlt size={14} color="white" />
                <div
                  style={{
                    fontSize: "0.9rem",
                    marginLeft: "10px",
                  }}
                >
                  July 2023 - Mar 2024
                </div>
              </div>
            </div>
          </div>
          <ul>
            <li>
              Led daily live sessions on Machine Learning, resolving 95% of
              student queries with a 4.5/5 rating.
            </li>
            <li>Assisted 150+ students with DSA and ML projects.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
