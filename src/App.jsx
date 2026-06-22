import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { label: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { label: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { label: "Premiere", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg" },
  { label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { label: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  { label: "Qt", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg" },
];

const socials = [
  { label: "IG", href: "https://www.instagram.com/", aria: "Instagram" },
  { label: "YT", href: "https://www.youtube.com/", aria: "YouTube" },
  { label: "Be", href: "https://www.behance.net/", aria: "Behance" },
  { label: "gh", href: "https://github.com/", aria: "GitHub" },
];

const projects = [
  {
    title: "Portfolio",
    type: "Frontend",
    thumb: "RAHUL",
    className: "thumb-one",
    image:
      "https://cdn.dribbble.com/userupload/43857095/file/original-6db74b69344fed62ba7f88046b070a60.png?resize=1200x900",
    description:
      "Developed to showcase my skills in web development, my portfolio website exemplifies proficiency in technologies such as ReactJS, CSS, and Figma.",
    overview:
      "A personal portfolio built to present profile, skills, selected projects, and photography work in one consistent visual system. The focus is a dark interface, responsive layout, and clear content hierarchy.",
    role: "Frontend Developer",
    year: "2026",
    status: "Completed",
    tech: ["react", "js", "css", "figma"],
  },
  {
    title: "Weather App",
    type: "Full Stack",
    thumb: "Weather",
    className: "thumb-two",
    image:
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=900&q=80",
    description:
      "Developed a full-stack weather app using NodeJS/Express for server-side logic and ReactJS/Tailwindcss for interactive frontend.",
    overview:
      "A weather dashboard concept with visual weather states, realtime-style content blocks, and a clean card-based layout for quick scanning.",
    role: "Full Stack Developer",
    year: "2026",
    status: "Prototype",
    tech: ["react", "js", "css", "figma"],
  },
  {
    title: "Cred Clone",
    type: "Frontend",
    thumb: "Cred",
    className: "thumb-three",
    image:
      "https://cdn.dribbble.com/userupload/13801613/file/original-5e6f8e2cf7a2d47b31dbb6608d68969e.png?resize=1200x900",
    description:
      "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
    overview:
      "A landing page recreation focused on matching premium spacing, bold messaging, and strong contrast through reusable frontend components.",
    role: "Frontend Developer",
    year: "2026",
    status: "Completed",
    tech: ["react", "js", "css", "figma"],
  },
  {
    title: "User Authentication syst...",
    type: "Full Stack",
    thumb: "Metrahin",
    className: "thumb-four",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
    description:
      "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
    overview:
      "An authentication interface concept with login flow, input fields, simple validation-ready structure, and responsive UI treatment.",
    role: "Full Stack Developer",
    year: "2026",
    status: "In Progress",
    tech: ["react", "js", "css", "figma"],
  },
  {
    title: "Todo List",
    type: "Frontend",
    thumb: "Todo",
    className: "thumb-five",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80",
    description:
      "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
    overview:
      "A task management interface designed for quick task entry, progress tracking, and simple visual organization.",
    role: "Frontend Developer",
    year: "2026",
    status: "Completed",
    tech: ["react", "js", "css", "figma"],
  },
  {
    title: "QR Scanner",
    type: "Frontend",
    thumb: "QR",
    className: "thumb-six",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=900&q=80",
    description:
      "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
    overview:
      "A QR scanner interface concept featuring a focused scan preview, result area, and compact mobile-first control layout.",
    role: "Frontend Developer",
    year: "2026",
    status: "Prototype",
    tech: ["react", "js", "css", "figma"],
  },
  {
    title: "Playlist Generator",
    type: "Frontend",
    thumb: "Spotify",
    className: "thumb-seven",
    image:
      "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&w=900&q=80",
    description:
      "Crafted a responsive CRED Landing Page clone using ReactJS for modularity and interactivity, styled with CSS to match the original design.",
    overview:
      "A playlist generator concept for creating music recommendations through a clean, minimal interface inspired by modern streaming products.",
    role: "Frontend Developer",
    year: "2026",
    status: "Concept",
    tech: ["react", "js", "css", "figma"],
  },
];

const photos = [
  {
    title: "Urban Motion",
    category: "Street",
    meta: "Night trails / city mood",
    className: "photo-large",
    src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",
  },
  {
    title: "Warm Portrait",
    category: "Portrait",
    meta: "Low light / warm tone",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Alpine Frame",
    category: "Landscape",
    meta: "Mountain / natural light",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Creative Desk",
    category: "Product",
    meta: "Flat lay / detail",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Quiet Street",
    category: "Travel",
    meta: "Ambient / candid",
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=85",
  },
];

const techIcons = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
};

const aboutStack = [
  { label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { label: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { label: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { label: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { label: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = [...document.querySelectorAll("main section[id]")];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a className="brand" href="#home">
        FIQRY FIRMANSYAH
      </a>
      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`} aria-label="Navigasi utama">
        {navItems.map((item) => (
          <a
            key={item.href}
            className={activeSection === item.href ? "active" : ""}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button
        className="menu-button"
        type="button"
        aria-label="Buka menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <h1>
          HI, I AM
          <br />
          FIQRY FIRMANSYAH.
        </h1>
        <p className="intro">
          A Sydney based front-end developer passionate about building accessible and user friendly
          websites.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#contact">
            Contact Me
          </a>
          <a className="icon-button" href="https://www.linkedin.com/" aria-label="LinkedIn">
            in
          </a>
          <a className="icon-button" href="https://github.com/" aria-label="GitHub">
            gh
          </a>
        </div>
      </div>

      <div className="portrait-card">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90"
          alt="Foto portrait profesional"
        />
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-band" id="about">
      <div className="section-title">ABOUT</div>
      <div className="about-pro">
        <div className="about-summary">
          <p className="about-kicker">Profile</p>
          <h2>Frontend developer who turns clean design into fast, responsive websites.</h2>
          <p>
            I focus on building polished web interfaces with strong visual hierarchy, consistent
            spacing, and smooth user flows. My work combines <strong>React</strong>,{" "}
            <strong>JavaScript</strong>, <strong>CSS</strong>, and <strong>Figma</strong> to create
            portfolio sites, landing pages, and product-style interfaces that feel clear and modern.
          </p>
          <div className="about-actions">
            <a className="download-button" href="#" aria-label="Download resume">
              <span aria-hidden="true">CV</span>
              Download Resume
            </a>
            <a className="about-link" href="#projects">
              View Projects
            </a>
          </div>
        </div>

        <div className="about-stats" aria-label="Portfolio summary">
          <div>
            <strong>07</strong>
            <span>Featured Projects</span>
          </div>
          <div>
            <strong>08</strong>
            <span>Core Tools</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Responsive Layout</span>
          </div>
        </div>

        <div className="about-card about-focus">
          <p className="about-kicker">What I Do</p>
          <ul>
            <li>Build responsive portfolio and landing page interfaces.</li>
            <li>Translate Figma layouts into structured React components.</li>
            <li>Polish spacing, color systems, typography, and UI states.</li>
            <li>Keep pages lightweight, readable, and easy to maintain.</li>
          </ul>
        </div>

        <div className="about-card about-process">
          <p className="about-kicker">Workflow</p>
          <div>
            <span>01</span>
            <strong>Understand</strong>
            <p>Map the content, visual references, and expected user flow.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Build</strong>
            <p>Create reusable components with responsive styling.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Refine</strong>
            <p>Adjust detail, spacing, contrast, and mobile behavior.</p>
          </div>
        </div>

        <div className="about-card about-stack-card">
          <p className="about-kicker">Tech Stack</p>
          <div className="about-stack" aria-label="Tech stack">
            {aboutStack.map((item) => (
              <span key={item.label} title={item.label}>
                <img src={item.icon} alt="" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSocial() {
  return (
    <section className="skills-social">
      <div className="skills-panel">
        <h2>Skills</h2>
        <div className="skill-list" aria-label="Daftar skill">
          {skills.map((skill) => (
            <span className="skill" key={skill.label} title={skill.label}>
              <img src={skill.icon} alt="" />
            </span>
          ))}
        </div>
      </div>
      <div className="social-panel">
        {socials.map((social) => (
          <a href={social.href} aria-label={social.aria} key={social.aria}>
            {social.label}
          </a>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card">
      <div className={`project-thumb ${project.className}`}>
        <img src={project.image} alt="" />
        <span>{project.thumb}</span>
        <i></i>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="project-type">{project.type}</p>
        <p>{project.description}</p>
        <div className="tech-row">
          {project.tech.map((item) => (
            <span key={item}>
              <img src={techIcons[item]} alt={item} />
            </span>
          ))}
        </div>
        <button className="project-more" type="button" onClick={() => onOpen(project)}>
          Lihat lebih lengkap
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}

function Projects({ onOpenProject }) {
  return (
    <section className="projects-section" id="projects">
      <div className="section-title">PROJECTS</div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} onOpen={onOpenProject} />
        ))}
      </div>
    </section>
  );
}

function ProjectDetail({ project, onBack }) {
  return (
    <main className="project-detail-page">
      <button className="back-button" type="button" onClick={onBack}>
        Back
      </button>
      <section className="project-detail-hero">
        <div>
          <p className="about-kicker">{project.type}</p>
          <h1>{project.title}</h1>
          <p>{project.overview}</p>
          <div className="detail-tech-row">
            {project.tech.map((item) => (
              <span key={item}>
                <img src={techIcons[item]} alt={item} />
                {item.toUpperCase()}
              </span>
            ))}
          </div>
        </div>
        <div className={`project-thumb detail-thumb ${project.className}`}>
          <img src={project.image} alt="" />
          <span>{project.thumb}</span>
          <i></i>
        </div>
      </section>

      <section className="project-detail-grid">
        <div className="detail-panel">
          <p className="about-kicker">Overview</p>
          <p>{project.overview}</p>
        </div>
        <div className="detail-panel">
          <p className="about-kicker">Project Info</p>
          <dl>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>
        </div>
        <div className="detail-panel detail-wide">
          <p className="about-kicker">What Was Built</p>
          <ul>
            <li>Responsive layout that adapts cleanly from desktop to mobile.</li>
            <li>Reusable component structure for cards, sections, and content blocks.</li>
            <li>Consistent dark visual system with lime accents and polished spacing.</li>
            <li>Clear content hierarchy so users can understand the project quickly.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-title">GALLERY</div>
      <div className="photo-gallery">
        <div className="gallery-intro">
          <p className="about-kicker">Photography Works</p>
          <h2>Selected shots with cinematic light, clean composition, and strong mood.</h2>
          <div className="gallery-stats" aria-label="Photography summary">
            <span>Street</span>
            <span>Portrait</span>
            <span>Landscape</span>
            <span>Product</span>
          </div>
        </div>
        <div className="photo-grid">
          {photos.map((photo) => (
            <article className={`photo-card ${photo.className || ""}`} key={photo.title}>
              <img src={photo.src} alt={photo.title} />
              <div>
                <span>{photo.category}</span>
                <h3>{photo.title}</h3>
                <p>{photo.meta}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-copy">
        <p className="about-kicker">Contact</p>
        <h2>Let's build a website that feels sharp, useful, and memorable.</h2>
        <p>
          Tertarik bekerja sama, membuat portfolio, landing page, atau dokumentasi visual untuk
          project kamu? Kirim pesan dan saya akan balas secepatnya.
        </p>
        <div className="contact-links" aria-label="Contact links">
          <a href="mailto:fiqry@example.com">fiqry@example.com</a>
          <a href="https://github.com/">GitHub</a>
          <a href="https://www.linkedin.com/">LinkedIn</a>
        </div>
      </div>
      <form className="contact-form">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="your@email.com" />
        </label>
        <label className="message-field">
          Message
          <textarea name="message" rows="5" placeholder="Tell me about your project"></textarea>
        </label>
        <button className="primary-button" type="button">
          Send Message
        </button>
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <a className="brand" href="#home">
          FIQRY FIRMANSYAH
        </a>
        <p>Frontend developer and photography enthusiast based in Indonesia.</p>
      </div>
      <nav aria-label="Footer navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <p className="footer-copy">© 2026 Fiqry Firmansyah. All rights reserved.</p>
    </footer>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.getElementById("fallback")?.remove();
  }, []);

  if (selectedProject) {
    return (
      <>
        <Header />
        <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <SkillsSocial />
        <Projects onOpenProject={setSelectedProject} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
