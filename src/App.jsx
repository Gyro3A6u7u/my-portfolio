import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import namanImg from "./cot-photo.jpeg";
import "./App.css";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [currentGreeting, setCurrentGreeting] = useState(0);

  const greetings = [
    "Namaste 🙏",
    "Hello 👋",
    "Hola 🌍",
    "Bonjour ✨",
    "Sat Sri Akal 🌟",
  ];

  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(greetingInterval);
          return prev;
        }
      });
    }, 550);

    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3200);

    return () => {
      clearInterval(greetingInterval);
      clearTimeout(timer);
    };
  }, []);

  // Aapke bataye hue exact sequence ke mutabiq skills
  const skills = [
    { name: "C", level: "Advanced", icon: "💻" },
    { name: "C++", level: "Advanced", icon: "🚀" },
    { name: "Java", level: "Advanced", icon: "☕" },
    { name: "HTML", level: "Advanced", icon: "🌐" },
    { name: "CSS", level: "Advanced", icon: "🎨" },
    { name: "JavaScript", level: "Intermediate", icon: "⚡" },
    { name: "React", level: "Intermediate", icon: "⚛️" },
    { name: "Bootstrap", level: "Advanced", icon: "🎯" },
    { name: "PHP", level: "Intermediate", icon: "🐘" },
    { name: "MySQL", level: "Intermediate", icon: "🗄️" },
    { name: "Android", level: "Intermediate", icon: "📱" },
  ];

  return (
    <>
      {/* WELCOME / GREETING PRELOADER */}
      <AnimatePresence>
        {showPreloader && (
          <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              key={currentGreeting}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.5, y: -20 }}
              transition={{ duration: 0.4 }}
              className="greeting-text"
            >
              {greetings[currentGreeting]}
            </motion.div>
            <p className="preloader-sub">Welcome to Naman's Portfolio</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="app">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="logo">
            N<span>.</span>
          </div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* HERO */}
        <section id="home" className="hero">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="tag">WELCOME TO MY PORTFOLIO</p>

            <h2>
              Hi, I'm <span>Naman Yadav</span>
            </h2>

            <h3>
              Full Stack Web & Android <span>Developer</span>
            </h3>

            <p className="hero-text">
              I create modern, responsive websites, high-performance applications
              and full-stack solutions using cutting-edge technologies.
            </p>

            <div className="buttons">
              <a href="#projects" className="primary-btn">
                View Projects ↗
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-icons">
              <a href="https://github.com/Gyro3A6u7u" target="_blank" rel="noreferrer" title="GitHub">GH</a>
              <a href="https://www.linkedin.com/in/naman-yadav-7b36ab275/" target="_blank" rel="noreferrer" title="LinkedIn">IN</a>
              <a href="https://mail.google.com/mail/?view=cm&to=naman650yadav@gmail.com" target="_blank" rel="noreferrer" title="Email">✉</a>
            </div>
          </motion.div>

          {/* HERO RIGHT (REAL IMAGE & CODE CARD) */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="profile-img-container">
              <img
                src={namanImg}
                alt="Naman Yadav"
                className="profile-img"
              />
            </div>

            <div className="code-card">
              <div className="code-header">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-body">
                <p>
                  <span className="purple">const</span> developer = {"{"}
                </p>
                <p>
                  &nbsp;&nbsp;name: <span className="green">"Naman Yadav"</span>,
                </p>
                <p>
                  &nbsp;&nbsp;role: <span className="green">"Full Stack & Android"</span>,
                </p>
                <p>
                  &nbsp;&nbsp;skills: <span className="green">["C", "C++", "Java", "React"]</span>
                </p>
                <p>{"};"}</p>
                <p className="cursor">|</p>
              </div>
            </div>
          </motion.div>

          <a href="#about" className="scroll">
            ↓ Scroll Down
          </a>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="heading">
            <p>GET TO KNOW ME</p>
            <h2>
              About <span>Me</span>
            </h2>
          </div>

          <motion.div
            className="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <h3>Building robust ideas into high-performance applications.</h3>
              <p>
                I am a passionate developer with a strong foundation in both web and mobile app development. 
                I enjoy solving complex problems and turning creative ideas into functional digital reality.
              </p>
              <p>
                Always eager to learn new stacks, optimize backend systems, and craft seamless user interfaces.
              </p>
            </div>

            <div className="about-box">
              <div>
                <strong>01</strong>
                <p>Full Stack Web Development</p>
              </div>
              <div>
                <strong>02</strong>
                <p>Android App Development</p>
              </div>
              <div>
                <strong>03</strong>
                <p>Database & Backend Management</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="heading">
            <p>WHAT I WORK WITH</p>
            <h2>
              My <span>Skills</span>
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((item, index) => (
              <motion.div
                className="skill-card"
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <div className="skill-icon">{item.icon}</div>
                <div className="skill-info">
                  <h3>{item.name}</h3>
                  <span className="skill-level">{item.level}</span>
                </div>
                <div className="skill-glow"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="heading">
            <p>MY WORK</p>
            <h2>
              Featured <span>Projects</span>
            </h2>
          </div>

          <div className="projects">
            <motion.div className="project" whileHover={{ y: -10 }}>
              <span>01</span>
              <h3>Student Placement System</h3>
              <p>A platform designed to help students manage skills, opportunities and career preparation.</p>
              <div className="tech">
                <b>React</b>
                <b>Node.js</b>
                <b>Express</b>
                <b>MySQL</b>
              </div>
              <a href="#">View Project ↗</a>
            </motion.div>

            <motion.div className="project" whileHover={{ y: -10 }}>
              <span>02</span>
              <h3>SabziSmart</h3>
              <p>Smart billing and shop management application for local vegetable and fruit vendors.</p>
              <div className="tech">
                <b>Java</b>
                <b>Android</b>
                <b>XML</b>
              </div>
              <a href="#">View Project ↗</a>
            </motion.div>

            <motion.div className="project" whileHover={{ y: -10 }}>
              <span>03</span>
              <h3>Portfolio Website</h3>
              <p>A modern animated portfolio website showcasing skills, projects and professional journey.</p>
              <div className="tech">
                <b>React</b>
                <b>JavaScript</b>
                <b>CSS</b>
              </div>
              <a href="#">View Project ↗</a>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <motion.div
            className="contact-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <p>HAVE A PROJECT IN MIND?</p>
            <h2>
              Let's build something <span>amazing.</span>
            </h2>
            <p>I'm always interested in collaborating and building high-impact technological solutions.</p>
            <a href="https://mail.google.com/mail/?view=cm&to=naman650yadav@gmail.com" target="_blank" rel="noreferrer" className="primary-btn">
              Send Email ✉
            </a>
          </motion.div>
        </section>

        {/* FOOTER */}
        <footer>
          <p>© 2026 Naman Yadav. All rights reserved.</p>
          <div>
            <a href="#home">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;