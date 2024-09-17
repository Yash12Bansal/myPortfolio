import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";
import { FaLinkedin, FaGithub, FaPlay } from "react-icons/fa";
import { SiLeetcode, SiGoogleplay } from "react-icons/si";
function App() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Handle hover state
  const handleMouseEnter = (icon) => setHoveredIcon(icon);
  const handleMouseLeave = () => setHoveredIcon(null);

  // Determine icon color based on hover state
  const getIconColor = (icon) => (hoveredIcon === icon ? "black" : "white");
  return (
    <div className="App">
      <header>
        <nav className="nav1">
          <ul>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-50}
                activeClass="active"
                spy={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-50}
                activeClass="active"
                spy={true}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-50}
                activeClass="active"
                spy={true}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                offset={-50}
                activeClass="active"
                spy={true}
              >
                Internships
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-50}
                activeClass="active"
                spy={true}
              >
                Achievements
              </Link>
            </li>{" "}
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-50}
                activeClass="active"
                spy={true}
              >
                Contact
              </Link>
            </li>{" "}
          </ul>
        </nav>

        <nav className="nav2">
          <ul>
            <li>
              <motion.div
                className="box"
                onMouseEnter={() => handleMouseEnter("linkedin")}
                onMouseLeave={handleMouseLeave}
                whileHover={{
                  scale: 1.3, // Scale up when hovered
                  transition: {
                    scale: { duration: 0.5 }, // Smooth transition
                  },
                }}
              >
                <a
                  href="https://linkedin.com/in/YashBansal1011"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    size={15}
                    color={getIconColor("linkedin")}
                    className="icon"
                  />
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div
                className="box"
                onMouseEnter={() => handleMouseEnter("github")}
                onMouseLeave={handleMouseLeave}
                whileHover={{
                  scale: 1.3, // Scale up when hovered
                  transition: {
                    scale: { duration: 0.5 }, // Smooth transition
                  },
                }}
              >
                <a
                  href="https://github.com/Yash12Bansal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    size={15}
                    color={getIconColor("github")}
                    className="icon"
                  />
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div
                className="box"
                onMouseEnter={() => handleMouseEnter("leetcode")}
                onMouseLeave={handleMouseLeave}
                whileHover={{
                  scale: 1.3, // Scale up when hovered
                  transition: {
                    scale: { duration: 0.5 }, // Smooth transition
                  },
                }}
              >
                <a
                  href="https://leetcode.com/u/YashBanal/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLeetcode
                    size={15}
                    color={getIconColor("leetcode")}
                    className="icon"
                  />
                </a>
              </motion.div>
            </li>
            {/* <li>
              <motion.div
                className="box"
                onMouseEnter={() => handleMouseEnter("googleplay")}
                onMouseLeave={handleMouseLeave}
                whileHover={{
                  scale: 1.3, // Scale up when hovered
                  transition: {
                    scale: { duration: 0.5 }, // Smooth transition
                  },
                }}
              >
                <a
                  href="https://leetcode.com/yourprofile"
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
            </li> */}
          </ul>
        </nav>
      </header>

      <main>
        <Home />
        <Skills />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>

      <footer>
        <p>&copy; 2024 Yash Bansal</p>
      </footer>
    </div>
  );
}

export default App;
