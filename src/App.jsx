
import { useState } from "react";
import {
  Code2,
  ArrowRight,
  Menu,
  X,
  GitBranch,
  Mail,
  MapPin,
  Send,
  ExternalLink,
  Briefcase,
  GraduationCap,
  UserRound
} from "lucide-react";

import { profile, skills, projects } from "./data";
import "./style.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  const details = [
    {
      icon: <GraduationCap />,
      title: "Education",
      value: "BCA",
      note: "Bachelor of Computer Applications"
    },
    {
      icon: <Briefcase />,
      title: "Internship",
      value: "Website Development",
      note: "Karon Infotech · 120 Hours"
    },
    {
      icon: <UserRound />,
      title: "Mentor",
      value: "Keyur Patel",
      note: "Director / Supervisor"
    },
    {
      icon: <Code2 />,
      title: "Focus",
      value: "Web Development",
      note: "PHP · MySQL · HTML · CSS · JavaScript"
    }
  ];

  return (
    <main className="portfolio" id="home">
      {/* Navigation */}
      <header className="navbar">
        <a className="logo" href="#home">
          <Code2 size={32} />
          <span>
            Shivam Patel<span className="orange">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let's Talk <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero section">
        <div className="hero-content">
          <div className="availability">
            <span />
            Available for opportunities
          </div>

          <p className="eyebrow">DEVELOPER PORTFOLIO</p>

          <h1>
            Hi, I’m <span className="orange">{profile.name}</span> Developer
          </h1>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications.
            Explore my projects, browse my public repositories, and connect
            with me online.
          </p>

          <div className="hero-buttons">
            <a
              className="button button-primary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={18} />
              Explore My GitHub
              <ArrowRight size={17} />
            </a>

            <a
              className="button button-outline"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <span className="linkedin-icon">in</span>
              View LinkedIn
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="social-links">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GitBranch />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="linkedin-icon"
              aria-label="LinkedIn"
            >
              in
            </a>

            <span>Connect with me</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="floating-label label-top">
            <Code2 /> Web Developer
          </div>

          <div className="profile-photo">
            <img
              src="/profile.png"
              alt={`${profile.name} profile`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <span className="photo-fallback">{profile.initials}</span>
          </div>

          <div className="floating-label label-bottom">
            <GitBranch /> Open Source
          </div>

          <div className="code-card">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>

            <pre>
              <code>
                <span className="code-purple">const</span> developer = {"{"}
                {"\n"}  name: <span className="code-green">"Shivam Patel"</span>,
                {"\n"}  skills: <span className="code-green">"Web Development"</span>,
                {"\n"}  projects: <span className="code-green">"Open Source"</span>
                {"\n"}{"}"}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about section" id="about">
        <div className="about-intro">
          <p className="eyebrow">GET TO KNOW ME</p>

          <h2>
            About <span className="orange">Me</span>
          </h2>

          <p>
            I'm passionate about creating digital solutions through clean
            code and modern technologies. I enjoy working on real-world
            projects, learning new tools, and improving my skills every day.
          </p>

          <a className="button button-outline" href="#projects">
            View My Projects <ArrowRight size={17} />
          </a>
        </div>

        <div className="details-grid">
          {details.map((detail) => (
            <article className="detail-card" key={detail.title}>
              <div className="icon-circle">{detail.icon}</div>

              <div>
                <p>{detail.title}</p>
                <h3>{detail.value}</h3>
                <small>{detail.note}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="skills section" id="skills">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MY EXPERTISE</p>
            <h2>
              <span className="orange">Skills</span>
            </h2>
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              <Code2 size={20} />
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="projects section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MY RECENT WORK</p>
            <h2>
              <span className="orange">Projects</span>
            </h2>
          </div>

          <a
            className="text-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            All repositories <ExternalLink size={16} />
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-image"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                <span className="project-overlay">
                  <ExternalLink />
                </span>
              </a>

              <div className="project-info">
                <span className="project-tech">{project.tech}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  View project <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact section" id="contact">
        <div className="contact-content">
          <p className="eyebrow">LET'S CONNECT</p>

          <h2>
            Have a project in <span className="orange">mind?</span>
          </h2>

          <p>
            Have an idea or want to collaborate? Send me a message.
          </p>

          <div className="contact-item">
            <Mail />
            <span>Contact me through LinkedIn or GitHub</span>
          </div>

          <div className="contact-item">
            <MapPin />
            <span>Available for online collaboration</span>
          </div>

          <a
            className="button button-primary"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            Connect with me <ArrowRight size={17} />
          </a>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();

            const form = new FormData(e.currentTarget);
            const subject = encodeURIComponent(
              `Portfolio message from ${form.get("name")}`
            );

            const body = encodeURIComponent(
              `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\nMessage:\n${form.get("message")}`
            );

            window.location.href = `mailto:?subject=${subject}&body=${body}`;
          }}
        >
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            required
          />

          <button className="button button-primary" type="submit">
            <Send size={17} /> Send Message
          </button>

          <small>This opens your default email application.</small>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <a className="logo" href="#home">
          <Code2 /> Shivam Patel<span className="orange">.</span>
        </a>

        <p>Designed with care · © {new Date().getFullYear()} Shivam Patel</p>

        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
