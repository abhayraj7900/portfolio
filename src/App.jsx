import { useEffect, useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaBars,
  FaTimes,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaGraduationCap,
  FaCertificate,
  FaTrophy,
  FaMapMarkerAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import profileImg from "./assets/profile.jpg";
import resumeFile from "./assets/resume.pdf";
import "./App.css";

function App() {
  const [open, setOpen] = useState(() => window.innerWidth > 768);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = () => {
    if (window.innerWidth <= 768) {
      setOpen(false);
    }
  };

  const menuItems = [
    { name: "About", icon: <FaUser />, id: "about" },
    { name: "Skills", icon: <FaCode />, id: "skills" },
    { name: "Projects", icon: <FaProjectDiagram />, id: "projects" },
    { name: "Education", icon: <FaGraduationCap />, id: "education" },
    { name: "Certification", icon: <FaCertificate />, id: "certification" },
    { name: "Achievements", icon: <FaTrophy />, id: "achievements" },
    { name: "Contact", icon: <FaEnvelope />, id: "contact" },
  ];

  return (
    <div className="portfolio">
      <aside className={`sidebar ${open ? "open" : "closed"}`}>
        <div className="topButtons">
          <button className="toggleBtn" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>

          <button className="modeBtn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="profile">
          <div className="avatar">
            <img src={profileImg} alt="Abhay Raj" />
          </div>

          {open && (
            <>
              <h2>Abhay Raj</h2>
              <p>Software Developer</p>
            </>
          )}
        </div>

        <nav className="sideNav">
          {menuItems.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              title={item.name}
              onClick={handleMenuClick}
            >
              {item.icon}
              {open && <span>{item.name}</span>}
            </a>
          ))}
        </nav>

        {open && (
          <div className="socialLinks">
            <a href="https://linkedin.com/in/abhay-raj99" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:abhayraj7900@gmail.com">
              <FaEnvelope />
            </a>
            <a href="tel:+917903310916">
              <FaPhone />
            </a>
            <a href="https://github.com/abhayraj7900" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          </div>
        )}
      </aside>

      {open && <div className="mobileOverlay" onClick={() => setOpen(false)}></div>}

      <main className="mainContent">
        <section className="hero">
          <div className="heroBox">
            <h1>
              Hi, I'm <span>Abhay Raj</span>
            </h1>
            <h3>React.js | MERN Stack | Software Developer</h3>
            <p>
              Motivated Software Developer with hands-on experience in frontend
              technologies like HTML, CSS, JavaScript, and React.js. Basic backend
              knowledge in Node.js, Express.js, and MongoDB.
            </p>

            <div className="heroBtns">
              <a href="#projects">View Projects</a>
              <a href="#contact" className="outline">
                Contact Me
              </a>
              <a href={resumeFile} download="Abhay_Raj_Resume.pdf" className="resumeBtn">
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <Section id="about" title="About Me">
          <div className="aboutBox">
            <p>
              Motivated Software Developer with hands-on experience in frontend
              technologies, including HTML, CSS, JavaScript, and React.js. I also
              have basic knowledge of backend technologies such as Node.js,
              Express.js, and MongoDB. Passionate about expanding my expertise in
              the MERN stack, with experience in building 3+ hands-on projects.
            </p>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid">
            {[
              "JavaScript",
              "React.js",
              "HTML",
              "CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "C",
              "C++",
              "Git & GitHub",
              "VS Code",
            ].map((skill) => (
              <div className="card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <Project
            title="Advanced Todo Application"
            tech="React.js, JavaScript, CSS, HTML"
            desc="Responsive Todo App with CRUD operations, task filtering, dark mode, and mobile-friendly UI."
          />

          <Project
            title="Full Stack Authentication App"
            tech="React.js, Node.js, Express.js, MongoDB"
            desc="Full stack login/signup app with backend APIs, database integration, MVC structure, and RESTful principles."
          />

          <Project
            title="Real-Time Chat Application"
            tech="Python, Django, WebSockets, HTMX, Selenium"
            desc="Real-time chat app with authentication, chat history, group chatting, link sharing, and automation bot."
          />
        </Section>

        <Section id="education" title="Education">
          <div className="timeline">
            <p>
              <b>Bachelor of Electronics and Communication Engineering</b>
            </p>
            <p>Chandigarh University | 2021 - 2025 | Mohali, Punjab</p>

            <br />

            <p>
              <b>Intermediate - PCM</b>
            </p>
            <p>R. B. S. College | 2019 - 2021 | Patna, Bihar</p>
          </div>
        </Section>

        <Section id="certification" title="Certification">
          <div className="infoBox">
            <div className="infoItem">
              <FaCertificate />
              <p>JavaScript Algorithms and Data Structures - FreeCodeCamp</p>
            </div>

            <div className="infoItem">
              <FaCertificate />
              <p>JavaScript, React.js, MERN Stack - Harkirat Singh</p>
            </div>
          </div>
        </Section>

        <Section id="achievements" title="Achievements">
          <div className="infoBox">
            <div className="infoItem">
              <FaTrophy />
              <p>Selected as Top Performer among 20+ students in college mini projects.</p>
            </div>

            <div className="infoItem">
              <FaTrophy />
              <p>College Event Coordinator, DSW Department of Student Welfare.</p>
            </div>
          </div>
        </Section>

        <Section id="language" title="Languages">
          <div className="grid">
            <div className="card">English</div>
            <div className="card">Hindi</div>
          </div>
        </Section>

        <Section id="contact" title="Contact Me">
          <div className="contactBox">
            <h3>Send Me a Message</h3>
            <p>Have a project, job opportunity, or collaboration idea? Feel free to contact me.</p>

            <form
              action="https://formsubmit.co/abhayraj7900@gmail.com"
              method="POST"
              className="contactForm"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contactLinks">
            <a href="tel:+917903310916">
              <FaPhone />
              <span>Call</span>
            </a>

            <a href="mailto:abhayraj7900@gmail.com">
              <FaEnvelope />
              <span>Gmail</span>
            </a>

            <a href="https://linkedin.com/in/abhay-raj99" target="_blank" rel="noreferrer">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a href="https://github.com/abhayraj7900" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Gurugram%2C%20India"
              target="_blank"
              rel="noreferrer"
            >
              <FaMapMarkerAlt />
              <span>Gurugram</span>
            </a>
          </div>
        </Section>
      </main>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Project({ title, tech, desc }) {
  return (
    <div className="projectCard">
      <h3>{title}</h3>
      <p>{desc}</p>
      <span>{tech}</span>
    </div>
  );
}

export default App;