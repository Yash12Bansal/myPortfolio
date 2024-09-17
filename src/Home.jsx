import React from "react";
import styles from "./Home.module.css";
import messiah from "./img/messiah-removebg-preview.png";
import t1life from "./img/t1life-removebg-preview.png";
import choti from "./img/chotnew.png";
import ipdf from "./img/ipdf-removebg-preview.png";
import gify from "./img/gify-removebg-preview.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typical from "react-typical";
const images = [messiah, t1life, choti, ipdf, gify];
import ReactTypingEffect from "react-typing-effect";
// Helper function to get random positions
// const getRandomPosition = () => {
//   const randomX = Math.floor(Math.random() * (window.innerWidth - 150)); // Random X position
//   const randomY = Math.floor(Math.random() * (window.innerHeight - 150)); // Random Y position
//   return { x: randomX, y: randomY };
// };
const Home = () => {
  const sentences = []; // Define the two sentences
  const [displayedText, setDisplayedText] = useState(""); // State for current text display
  const [sentenceIndex, setSentenceIndex] = useState(0); // Tracks which sentence to type
  useEffect(() => {
    let currentSentence = sentences[sentenceIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < currentSentence.length) {
        setDisplayedText((prev) => prev + currentSentence[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // if (sentenceIndex < sentences.length - 1) {?
        setTimeout(() => {
          setDisplayedText(""); // Clear the text for the next sentence
          setSentenceIndex(sentenceIndex == 0 ? 1 : 0); // Move to the next sentence
        }, currentSentence.length * 200); // Wait 1 second before starting the next sentence
        // }
      }
    }, 200); // Adjust typing speed here

    return () => clearInterval(typingInterval); // Cleanup interval on component unmount
  }, [sentenceIndex]);
  return (
    <section id="home" className={styles.home}>
      <h3>Welcome to my Portfolio</h3>
      {/* {images.map((src, index) => {
        const { x, y } = getRandomPosition(); // Get random position for each image
        return (
          <motion.img
            key={index}
            src={src}
            alt={`Bouncing Image ${index + 1}`}
            style={{
              position: "absolute", // Absolute positioning
              width: "100px", // Image size
              height: "100px",
              top: `${y}px`,
              left: `${x}px`,
            }}
            animate={{
              y: [0, -20, 0], // Bounce animation
            }}
            transition={{
              duration: 1.6,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        );
      })} */}
      <p className={styles.name}>Hi! I'm Yash Bansal,</p>
      <p className={styles.name}>
        <ReactTypingEffect
          text={[
            "Amazon ML Summer School 2024 Selectee",
            "Former SDE Intern at Kalpavriksh Healthcare",
            "Product-Oriented Software Engineer with a Passion for creating impactful user experiences",
          ]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
        />
        {/* <Typical
          className={styles.name}
          steps={[, 2000, , 2000]}
          loop={Infinity}
          wrapper="p"
        /> */}
      </p>
      <p className={styles.name2}> 
        Driven by a deep commitment to creating impactful user experiences, I am
        a product-focused engineer with hands-on experience in full-stack
        development, machine learning, and app development. I have a proven
        ability to deliver high-impact solutions, demonstrated through
        successful project launches. My adaptability to evolving tech landscapes
        and my product-first mindset allow me to consistently contribute to
        innovative and meaningful software solutions.{" "}
      </p>
      {/* <div className={styles.socialLinks}>
        <a href="https://linkedin.com/in/YashBansal1011">LinkedIn</a> |
        <a href="https://github.com/Yash12Bansal">GitHub</a>
      </div> */}
    </section>
  );
};

export default Home;
