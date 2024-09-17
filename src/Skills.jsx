import React, { useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Skills.module.css"; // Assuming you are using CSS Modules

const skillsData = [
  { name: "C++", percentage: 90 },
  { name: "JavaScript", percentage: 90 },
  { name: "Next.js", percentage: 80 },
  { name: "MERN", percentage: 90 },
  { name: "Java", percentage: 80 },
  { name: "Python", percentage: 85 },
  { name: "React", percentage: 88 },
  { name: "SQL", percentage: 75 },
  { name: "Kotlin", percentage: 80 },
  { name: "Android", percentage: 80 },
  { name: "Git", percentage: 80 },
  { name: "Tensorflow", percentage: 70 },
  { name: "Keras", percentage: 70 },
  { name: "Deep Learning", percentage: 80 },
];

const Skills = () => {
  const skillsRef = useRef(null);

  const handlePrev = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollBy({
        left: -500, // Scroll left
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollBy({
        left: 500, // Scroll right
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="skills" className={styles.skills_outer}>
      <h1 style={{ color: "white", textDecoration:"underline" }}>Skills</h1>
      <div className={styles.skills_container}>
        <button className={styles.scroll_btn} onClick={handlePrev}>
          &#8249;
        </button>
        <div className={styles.skills_list} ref={skillsRef}>
          {skillsData.map((skill, index) => (
            <div key={index} className={styles.skill_item}>
              <svg width="0" height="0">
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#3a1d8f", stopOpacity: 1 }}
                    />{" "}
                    {/* Dark blue */}
                    <stop
                      offset="100%"
                      style={{ stopColor: "#7e4b8d", stopOpacity: 1 }}
                    />{" "}
                    {/* Purple */}
                  </linearGradient>
                </defs>
              </svg>
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                styles={buildStyles({
                  pathColor: "url(#gradient1)",
                  textColor: "#fff",
                  trailColor: "#000000",
                  textSize: "20px",
                  strokeLinecap: "butt",
                })}
              />
              <p className={styles.skillName}>{skill.name}</p>
            </div>
          ))}
        </div>
        <button className={styles.scroll_btn} onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Skills;
