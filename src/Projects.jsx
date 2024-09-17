import React, { useRef, useState } from "react";
import styles from "./Projects.module.css";
import messiah from "./img/messiah-removebg-preview.png";
import t1life from "./img/t1life-removebg-preview.png";
import choti from "./img/chotnew.png";
import ipdf from "./img/ipdf-removebg-preview.png";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaPlay, FaCloud } from "react-icons/fa";
import { SiLeetcode, SiGoogleplay } from "react-icons/si";
import gify from "./img/gify-removebg-preview.png";
const Projects = () => {
  const projectsRef = useRef(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Handle hover state
  const handleMouseEnter = (icon) => setHoveredIcon(icon);
  const handleMouseLeave = () => setHoveredIcon(null);

  // Determine icon color based on hover state
  const getIconColor = (icon) => (hoveredIcon === icon ? "black" : "white");
  const images = [
    {
      image: messiah,
      name: "Messiah WAMR",
      link1: (
        <motion.div
          className="box"
          onMouseEnter={() => handleMouseEnter("googleplay")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://github.com/Yash12Bansal/Messiah-WAMR/releases/tag/v2.3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={15}
              color={getIconColor("googleplay")}
              className="icon"
            />
          </a>
        </motion.div>
      ),
      link2: (
        <motion.div
          className="box"
          onMouseEnter={() => handleMouseEnter("googleplay")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.yash.messiahwamr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGoogleplay
              size={15}
              color={getIconColor("googleplay")}
              className="icon"
            />
          </a>
        </motion.div>
      ),
    },
    {
      image: choti,
      name: "Chotilulli.life",
      link1: (
        <motion.div
          className="box"
          onMouseEnter={() => handleMouseEnter("googleplay")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://github.com/Yash12Bansal/chotilulli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={15}
              color={getIconColor("googleplay")}
              className="icon"
            />
          </a>
        </motion.div>
      ),
      link2: (
        <motion.div
          className="box"
          onMouseEnter={() => handleMouseEnter("googleplay")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://www.chotilulli.life/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCloud
              size={15}
              color={getIconColor("googleplay")}
              className="icon"
            />
          </a>
        </motion.div>
      ),
    },
    {
      image: ipdf,
      name: "iPDF",
      link1: (
        <motion.div
          className="box"
          onMouseEnter={() => handleMouseEnter("googleplay")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://github.com/Yash12Bansal/iPDF/tree/master"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={15}
              color={getIconColor("googleplay")}
              className="icon"
            />
          </a>
        </motion.div>
      ),
      link2: (
        <motion.div
          className="box"
          onMouseEnter={() => handleMouseEnter("googleplay")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.yash.pdfconverter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGoogleplay
              size={15}
              color={getIconColor("googleplay")}
              className="icon"
            />
          </a>
        </motion.div>
      ),
    },
    {
      image: gify,
      name: "Gify",
      link1: (
        <motion.div
          className="box"
          onMouseEnter={() => handleMouseEnter("googleplay")}
          onMouseLeave={handleMouseLeave}
        >
          <a
            href="https://github.com/Yash12Bansal/Gify/releases/tag/Release"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={15}
              color={getIconColor("googleplay")}
              className="icon"
            />
          </a>
        </motion.div>
      ),
    },
  ];

  const handlePrev = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollBy({
        left: -500, // Scroll left
        behavior: "smooth",
      });
    }
  };

  const handleNext = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollBy({
        left: 500, // Scroll right
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className={styles.projects_outer}>
      <h1 style={{ color: "white", textDecoration: "underline" }}>Projects</h1>
      <div className={styles.projects_container}>
        <button className={styles.scroll_btn} onClick={handlePrev}>
          &#8249;
        </button>
        <div className={styles.projects_list} ref={projectsRef}>
          {images.map((src, index) => {
            return (
              <div key={index} className={styles.projects_item}>
                <motion.div
                  className={styles.nameImage}
                  animate={{
                    y: [0, -20, 0], // Bounce animation
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                >
                  <div className={styles.projectName}>{src.name}</div>

                  <motion.img
                    key={index}
                    src={src.image}
                    alt={`Bouncing Image ${index + 1}`}
                    style={{
                      // position: "absolute", // Absolute positioning
                      width: "200px", // Image size
                      height: "200px",
                      // border: "1px solid white",
                      padding: "20px",
                      // top: `${y}px`,
                      // left: `${x}px`,
                    }}
                  />
                </motion.div>
                <div className={styles.projectNameLinks}>
                  <div className={styles.projectLinks}>
                    <div className={styles.eachLink}>{src.link1}</div>
                    {index != 3 && (
                      <div className={styles.eachLink}>{src.link2}</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}{" "}
        </div>
        <button className={styles.scroll_btn} onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Projects;
