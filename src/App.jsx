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

  const skills = [
    { name: "C", level: "Intermediate", icon: "💻" },
    { name: "C++", level: "Intermediate", icon: "🚀" },
    { name: "Java", level: "Intermediate", icon: "☕" },
    { name: "HTML", level: "Intermediate", icon: "🌐" },
    { name: "CSS", level: "Intermediate", icon: "🎨" },
    { name: "JavaScript", level: "Intermediate", icon: "⚡" },
    { name: "React", level: "Intermediate", icon: "⚛️" },
    { name: "Bootstrap", level: "Intermediate", icon: "🎯" },
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
        {/* NAVBAR (Contact link restored as requested) */}
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

        {/* HERO SECTION */}
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

          {/* HERO RIGHT */}
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

            <div className="code-card" style={{ background: "linear-gradient(135deg, rgba(20,20,30,0.9), rgba(40,20,60,0.8))", border: "1px solid rgba(255,255,255,0.15)" }}>
              <div className="code-header">
                <span style={{ background: "#ff5f56" }}></span>
                <span style={{ background: "#ffbd2e" }}></span>
                <span style={{ background: "#27c93f" }}></span>
              </div>

              <div className="code-body" style={{ padding: "16px", textAlign: "center" }}>
                <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "12px" }}>
                  <span style={{ fontSize: "24px" }} title="Web Development">🌐</span>
                  <span style={{ fontSize: "24px" }} title="Android Development">📱</span>
                  <span style={{ fontSize: "24px" }} title="Database">🗄️</span>
                  <span style={{ fontSize: "24px" }} title="Problem Solving">⚡</span>
                </div>
                <h4 style={{ color: "#fff", fontSize: "16px", marginBottom: "4px" }}>Engineering Digital Excellence</h4>
                <p style={{ color: "#bbb", fontSize: "12px", margin: 0 }}>
                  Crafting high-speed web apps & seamless mobile solutions.
                </p>
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
              <h3>Driven by curiosity and a passion for clean architecture.</h3>
              <p>
                I am Naman Yadav, a dedicated Full Stack Web and Android App Developer based in Gwalior. 
                My journey in technology revolves around building seamless applications that bridge the gap between design and robust backend logic.
              </p>
              <p>
                Whether it's structuring database workflows, optimizing web performance, or engineering responsive mobile solutions, 
                I love turning conceptual challenges into production-ready software.
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
        <section id="contact" className="section">
          <div className="heading">
            <p>GET IN TOUCH</p>
            <h2>
              Contact <span>Me</span>
            </h2>
          </div>

          <motion.div
            className="contact-box"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ maxWidth: "600px", margin: "0 auto", textAlign: "left" }}
          >
            <p style={{ textAlign: "center", marginBottom: "20px" }}>Have a project in mind or want to connect? Drop a message below!</p>
            
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <input type="hidden" name="access_key" value="bbf109f4-4f7d-4744-8784-2dceb23e93a7" />

              <div>
                <label style={{ display: "block", marginBottom: "5px", color: "#ccc", fontSize: "14px" }}>Your Name</label>
                <input type="text" name="name" placeholder="Enter your name" required style={{ width: "100%", padding: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#fff", outline: "none" }} />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "5px", color: "#ccc", fontSize: "14px" }}>Your Email</label>
                <input type="email" name="email" placeholder="Enter your email" required style={{ width: "100%", padding: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#fff", outline: "none" }} />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "5px", color: "#ccc", fontSize: "14px" }}>Your Message</label>
                <textarea name="message" rows="4" placeholder="Type your message here..." required style={{ width: "100%", padding: "12px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", color: "#fff", outline: "none", resize: "vertical" }}></textarea>
              </div>

              <button type="submit" className="primary-btn" style={{ width: "100%", border: "none", cursor: "pointer", textAlign: "center", marginTop: "10px" }}>
                Send Message ✉
              </button>
            </form>
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