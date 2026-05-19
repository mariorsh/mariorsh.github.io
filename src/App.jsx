import { useEffect } from "react";

const content = {
  es: {
    lang: "es",
    navLabel: "Navegación principal",
    contact: "Contacto",
    mobileContact: "Contacto",
    links: [
      ["#profile", "Perfil"],
      ["#experience", "Experiencia"],
      ["#stack", "Stack"],
      ["#education", "Formación"]
    ],
    hero: {
      eyebrow: "Android Developer · Madrid",
      title: "Mobile engineer",
      statement: "LOCAL-FIRST",
      lead: "Soy Mario Ríos Holgado. Desarrollo aplicaciones Android con Kotlin, Jetpack Compose y Java/XML, modernizo arquitecturas legacy y construyo productos móviles preparados para funcionar rápido, offline y con IA ejecutándose cerca del usuario.",
      actions: {
        experience: "Ver experiencia",
        cv: "Descargar CV"
      }
    },
    profileCard: {
      aria: "Resumen profesional",
      alt: "Ilustración de Mario Ríos Holgado",
      eyebrow: "Kotlin · Compose · AI",
      statement: "MOBILE CRAFT. PRODUCT SENSE.",
      focus: "Foco actual",
      title: "Android moderno, IA on-device y sistemas local-first.",
      text: "Trabajo entre producto, arquitectura y experiencia de usuario: de apps empresariales con servicios SOAP y SQL Server a prototipos móviles con Kotlin Multiplatform, SwiftUI básico, backend escalable y diseño en Figma."
    },
    profile: {
      eyebrow: "01 · Perfil",
      title: "Un perfil móvil con criterio de producto.",
      intro: "Este portfolio funciona como CV vivo: resume lo que hago, dónde aporto más valor y qué tecnologías manejo sin convertir la página en una colección de ruido.",
      cards: [
        {
          tone: "dark",
          title: "Android de producción",
          text: "Desarrollo y mantenimiento de apps Android con Kotlin, Jetpack Compose y Java/XML, incluyendo migraciones desde bases legacy hacia patrones modernos y reactivos."
        },
        {
          tone: "lime",
          title: "IA local y privacidad",
          text: "Interés y experiencia práctica con LLMs locales, ejecución on-device y experiencias de IA con menor latencia, más privacidad y mejor continuidad offline."
        },
        {
          title: "Diseño + sistemas",
          text: "Capacidad para conectar UI/UX, backend, cloud y datos. Me gusta que una solución sea sólida por dentro y clara para quien la usa."
        }
      ]
    },
    experience: {
      eyebrow: "02 · Experiencia",
      title: "Trabajo real en móvil, web y docencia técnica.",
      intro: "La trayectoria combina desarrollo Android, sistemas empresariales Java, automatización, cloud y enseñanza. Esa mezcla me da una lectura amplia del producto técnico.",
      roles: [
        {
          company: "TELYNET",
          meta: "Android Developer · Madrid",
          dates: "Febrero 2026 - Actualidad",
          bullets: [
            "Desarrollo y mantenimiento de aplicaciones Android con Java/XML, Kotlin y Jetpack Compose.",
            "Migración de aplicaciones desde arquitecturas legacy hacia arquitecturas modernas.",
            "Desarrollo de aplicaciones local-first y servicios SOAP con Java 8."
          ]
        },
        {
          company: "AYESA",
          meta: "Java Web & Android Developer · Madrid",
          dates: "Diciembre 2023 - Febrero 2026",
          bullets: [
            "Desarrollo de aplicaciones web con JSF, PrimeFaces y Java 8.",
            "Servicios SOAP, stored procedures y trabajo con bases de datos SQL Server.",
            "Migración de aplicaciones Android desde Java hacia Kotlin y Jetpack Compose."
          ]
        },
        {
          company: "Centro Profesional JOYFE",
          meta: "Higher Education Teacher · Madrid",
          dates: "Septiembre 2024 - Actualidad",
          bullets: [
            "Docencia de programación Android con Kotlin y Jetpack Compose.",
            "Docencia de infraestructura cloud con AWS Academy.",
            "UX/UI con Figma aplicado a Android, web y soluciones C# WPF .NET."
          ]
        },
        {
          company: "AYESA / Former Ibermática",
          meta: "Jira Developer & Big Data Administrator · Madrid",
          dates: "Enero 2023 - Diciembre 2023",
          bullets: [
            "Configuración de Jira para equipos de desarrollo e IT con workflows, automatizaciones y Scriptrunner con Groovy.",
            "Scripts Python para automatización de procesos y monitorización de equipos."
          ]
        },
        {
          company: "Dars Telecom S.L.",
          meta: "Junior QA Developer · Madrid",
          dates: "Enero 2023 - Marzo 2023",
          bullets: [
            "Automatización de pruebas con Java 8, Selenium, Spring y gestión de dependencias con Maven."
          ]
        }
      ]
    },
    stack: {
      eyebrow: "03 · Posicionamiento",
      quote: "Android engineer with",
      accent: "AI product",
      quoteEnd: "taste.",
      text: "Mi punto fuerte está en construir experiencias móviles modernas y entender qué necesita el producto: rendimiento, claridad visual, arquitectura mantenible y una IA que no se sienta pegada con cinta.",
      stackLabel: "Stack principal",
      skills: ["Kotlin", "Jetpack Compose", "Android", "Java/XML", "KMP", "SwiftUI básico", "Local LLMs", "Local-first", "Java Spring", "Python Flask", "SOAP", "SQL Server", "AWS", "Angular", "Tailwind CSS", "Figma", "Bash", "Groovy"]
    },
    education: {
      eyebrow: "04 · Formación",
      title: "Base técnica y aprendizaje continuo.",
      intro: "Formación profesional orientada a aplicaciones web y multiplataforma, reforzada con certificaciones en cloud, Python, Unity, Java y SQL.",
      items: [
        {
          school: "Centro Profesional JOYFE",
          title: "CFGS Desarrollo de Aplicaciones Web",
          text: "Septiembre 2023 - Junio 2024. Desarrollo completo de aplicaciones web y módulo propio de Web3, blockchain y metaverso."
        },
        {
          school: "Centro Profesional JOYFE",
          title: "CFGS Desarrollo de Aplicaciones Multiplataforma",
          text: "Septiembre 2020 - Junio 2022. Java, C/C++, JavaScript, PHP, C#, Python, Kotlin e implementaciones cloud con AWS."
        }
      ]
    },
    certs: [
      ["English B2", "Cambridge FCE"],
      ["AWS Academy", "Cloud Foundations"],
      ["Python", "OpenEDG"],
      ["Unity", "Certified User Programmer"],
      ["Oracle Academy", "Java Fundamentals · SQL"]
    ],
    cta: {
      title: "Hablemos de la próxima experiencia móvil.",
      text: "Disponible para conversaciones sobre Android, Kotlin Multiplatform, IA on-device, productos local-first y equipos que valoren tanto la arquitectura como la experiencia de usuario."
    },
    footer: "Portfolio CV con identidad visual Dressing."
  },
  en: {
    lang: "en",
    navLabel: "Main navigation",
    contact: "Contact",
    mobileContact: "Contact",
    links: [
      ["#profile", "Profile"],
      ["#experience", "Experience"],
      ["#stack", "Stack"],
      ["#education", "Education"]
    ],
    hero: {
      eyebrow: "Android Developer · Madrid",
      title: "Mobile engineer",
      statement: "LOCAL-FIRST",
      lead: "I am Mario Ríos Holgado. I build Android applications with Kotlin, Jetpack Compose and Java/XML, modernize legacy architectures, and create mobile products designed to feel fast, work offline and run AI close to the user.",
      actions: {
        experience: "View experience",
        cv: "Download CV"
      }
    },
    profileCard: {
      aria: "Professional summary",
      alt: "Illustration of Mario Ríos Holgado",
      eyebrow: "Kotlin · Compose · AI",
      statement: "MOBILE CRAFT. PRODUCT SENSE.",
      focus: "Current focus",
      title: "Modern Android, on-device AI and local-first systems.",
      text: "I work across product, architecture and user experience: from enterprise apps with SOAP services and SQL Server to mobile prototypes with Kotlin Multiplatform, basic SwiftUI, scalable backend work and Figma design."
    },
    profile: {
      eyebrow: "01 · Profile",
      title: "A mobile profile with product judgement.",
      intro: "This portfolio works as a living CV: it summarizes what I do, where I bring the most value and which technologies I work with without turning the page into noise.",
      cards: [
        {
          tone: "dark",
          title: "Production Android",
          text: "Development and maintenance of Android apps with Kotlin, Jetpack Compose and Java/XML, including migrations from legacy codebases to modern reactive patterns."
        },
        {
          tone: "lime",
          title: "Local AI and privacy",
          text: "Hands-on interest and experience with local LLMs, on-device execution and AI experiences with lower latency, stronger privacy and better offline continuity."
        },
        {
          title: "Design + systems",
          text: "Ability to connect UI/UX, backend, cloud and data. I like solutions that are solid inside and clear for the people using them."
        }
      ]
    },
    experience: {
      eyebrow: "02 · Experience",
      title: "Real work across mobile, web and technical teaching.",
      intro: "My path combines Android development, enterprise Java systems, automation, cloud and teaching. That mix gives me a broad reading of technical product work.",
      roles: [
        {
          company: "TELYNET",
          meta: "Android Developer · Madrid",
          dates: "February 2026 - Present",
          bullets: [
            "Development and maintenance of Android applications with Java/XML, Kotlin and Jetpack Compose.",
            "Migration of applications from legacy architectures to modern architectures.",
            "Local-first application development and SOAP services with Java 8."
          ]
        },
        {
          company: "AYESA",
          meta: "Java Web & Android Developer · Madrid",
          dates: "December 2023 - February 2026",
          bullets: [
            "Development of web applications with JSF, PrimeFaces and Java 8.",
            "SOAP services, stored procedures and work with SQL Server databases.",
            "Migration of Android applications from Java to Kotlin and Jetpack Compose."
          ]
        },
        {
          company: "Centro Profesional JOYFE",
          meta: "Higher Education Teacher · Madrid",
          dates: "September 2024 - Present",
          bullets: [
            "Teaching Android programming with Kotlin and Jetpack Compose.",
            "Teaching cloud infrastructure with AWS Academy.",
            "UX/UI with Figma applied to Android, web and C# WPF .NET solutions."
          ]
        },
        {
          company: "AYESA / Former Ibermática",
          meta: "Jira Developer & Big Data Administrator · Madrid",
          dates: "January 2023 - December 2023",
          bullets: [
            "Jira setup for development and IT teams with workflows, automations and Scriptrunner with Groovy.",
            "Python scripts for process automation and equipment monitoring."
          ]
        },
        {
          company: "Dars Telecom S.L.",
          meta: "Junior QA Developer · Madrid",
          dates: "January 2023 - March 2023",
          bullets: [
            "Test automation with Java 8, Selenium, Spring and dependency management with Maven."
          ]
        }
      ]
    },
    stack: {
      eyebrow: "03 · Positioning",
      quote: "Android engineer with",
      accent: "AI product",
      quoteEnd: "taste.",
      text: "My strongest area is building modern mobile experiences while understanding what the product needs: performance, visual clarity, maintainable architecture and AI that feels naturally integrated.",
      stackLabel: "Core stack",
      skills: ["Kotlin", "Jetpack Compose", "Android", "Java/XML", "KMP", "Basic SwiftUI", "Local LLMs", "Local-first", "Java Spring", "Python Flask", "SOAP", "SQL Server", "AWS", "Angular", "Tailwind CSS", "Figma", "Bash", "Groovy"]
    },
    education: {
      eyebrow: "04 · Education",
      title: "Technical foundation and continuous learning.",
      intro: "Vocational education focused on web and multiplatform applications, reinforced with certifications in cloud, Python, Unity, Java and SQL.",
      items: [
        {
          school: "Centro Profesional JOYFE",
          title: "Higher Education Certificate in Web Application Development",
          text: "September 2023 - June 2024. Full web application development and a proprietary Web3, blockchain and metaverse module."
        },
        {
          school: "Centro Profesional JOYFE",
          title: "Higher Education Certificate in Multiplatform Application Development",
          text: "September 2020 - June 2022. Java, C/C++, JavaScript, PHP, C#, Python, Kotlin and cloud implementations with AWS."
        }
      ]
    },
    certs: [
      ["English B2", "Cambridge FCE"],
      ["AWS Academy", "Cloud Foundations"],
      ["Python", "OpenEDG"],
      ["Unity", "Certified User Programmer"],
      ["Oracle Academy", "Java Fundamentals · SQL"]
    ],
    cta: {
      title: "Let's talk about the next mobile experience.",
      text: "Available for conversations around Android, Kotlin Multiplatform, on-device AI, local-first products and teams that value architecture as much as user experience."
    },
    footer: "Portfolio CV with Dressing visual identity."
  }
};

function getInitialLanguage() {
  return window.location.pathname.startsWith("/en") ? "en" : "es";
}

function setLanguageMetadata(language) {
  document.documentElement.lang = language;
  document.title = "Mario Ríos Holgado | Android Developer";
  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute(
      "content",
      language === "en"
        ? "Mario Ríos Holgado, Android Developer specialized in Kotlin, Jetpack Compose, local-first architectures and on-device AI."
        : "Mario Ríos Holgado, Android Developer especializado en Kotlin, Jetpack Compose, arquitecturas local-first e IA on-device."
    );
  }
}

function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");

    if (!targets.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.1
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}

function App() {
  const language = getInitialLanguage();
  const t = content[language];

  useEffect(() => {
    setLanguageMetadata(language);
  }, [language]);

  useScrollReveal();

  return (
    <>
      <Nav t={t} language={language} />
      <main id="top">
        <Hero t={t} />
        <ProfileSection t={t.profile} />
        <ExperienceSection t={t.experience} />
        <StackSection t={t.stack} />
        <EducationSection education={t.education} certs={t.certs} />
        <ContactSection t={t.cta} />
      </main>
      <footer className="wrap">
        © <span>{new Date().getFullYear()}</span> Mario Ríos Holgado · {t.footer}
      </footer>
    </>
  );
}

function Nav({ t, language }) {
  return (
    <nav className="nav" aria-label={t.navLabel}>
      <a className="brand" href="#top">Mario Ríos Holgado</a>
      <div className="links">
        {t.links.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        <a className="pill-link" href="mailto:mariorioshol@gmail.com">{t.contact}</a>
      </div>
      <div className="lang-switch" aria-label={language === "es" ? "Selector de idioma" : "Language selector"}>
        <a className={language === "es" ? "active" : ""} href="/" lang="es" aria-current={language === "es" ? "page" : undefined}>ES</a>
        <a className={language === "en" ? "active" : ""} href="/en/" lang="en" aria-current={language === "en" ? "page" : undefined}>EN</a>
      </div>
      <a className="pill-link mobile" href="mailto:mariorioshol@gmail.com">{t.mobileContact}</a>
    </nav>
  );
}

function Hero({ t }) {
  const card = t.profileCard;

  return (
    <section className="hero wrap">
      <div className="reveal">
        <div className="eyebrow">{t.hero.eyebrow}</div>
        <h1>{t.hero.title} <span>{t.hero.statement}</span></h1>
        <p className="lead">{t.hero.lead}</p>
        <div className="actions">
          <a className="btn primary" href="#experience">{t.hero.actions.experience}</a>
          <a className="btn" href="/CV_Mario_Rios_Holgado_2026.pdf" target="_blank" rel="noreferrer">{t.hero.actions.cv}</a>
          <a className="btn dark" href="mailto:mariorioshol@gmail.com">mariorioshol@gmail.com</a>
        </div>
      </div>
      <aside className="profile-card float-in" aria-label={card.aria}>
        <img className="portrait" src="/img/mario-illustration.png" alt={card.alt} />
        <div className="identity">
          <div className="eyebrow">{card.eyebrow}</div>
          <p className="statement">{card.statement}</p>
        </div>
        <div className="summary-panel">
          <div className="eyebrow">{card.focus}</div>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
          <div className="chips">
            {["Kotlin", "Jetpack Compose", "Local LLMs", "AWS"].map((chip) => <span className="chip" key={chip}>{chip}</span>)}
          </div>
        </div>
      </aside>
    </section>
  );
}

function ProfileSection({ t }) {
  return (
    <section className="section wrap" id="profile">
      <SectionHead eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <div className="grid-3">
        {t.cards.map((card, index) => (
          <article className={`card reveal-card ${card.tone ?? ""}`} data-reveal style={{ "--delay": `${index * 90}ms` }} key={card.title}>
            <div className="mark">{String(index + 1).padStart(2, "0")}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection({ t }) {
  return (
    <section className="section wrap" id="experience">
      <SectionHead eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
      <div className="timeline">
        {t.roles.map((role, index) => (
          <article className="role reveal-card" data-reveal style={{ "--delay": `${Math.min(index * 70, 280)}ms` }} key={`${role.company}-${role.dates}`}>
            <div>
              <h3>{role.company}</h3>
              <div className="meta">{role.meta}<br />{role.dates}</div>
            </div>
            <ul>
              {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function StackSection({ t }) {
  return (
    <section className="section wrap" id="stack">
      <div className="split">
        <article className="card lime reveal-card" data-reveal>
          <div className="eyebrow">{t.eyebrow}</div>
          <p className="quote">{t.quote} <span>{t.accent}</span> {t.quoteEnd}</p>
          <p className="stack-copy">{t.text}</p>
        </article>
        <article className="card reveal-card" data-reveal style={{ "--delay": "120ms" }}>
          <div className="eyebrow">{t.stackLabel}</div>
          <div className="stack">
            {t.skills.map((skill, index) => <span className="reveal-chip" style={{ "--delay": `${index * 28}ms` }} key={skill}>{skill}</span>)}
          </div>
        </article>
      </div>
    </section>
  );
}

function EducationSection({ education, certs }) {
  return (
    <section className="section wrap" id="education">
      <SectionHead eyebrow={education.eyebrow} title={education.title} intro={education.intro} />
      <div className="education">
        {education.items.map((item, index) => (
          <article className="card edu-card reveal-card" data-reveal style={{ "--delay": `${index * 110}ms` }} key={item.title}>
            <div className="eyebrow">{item.school}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
      <div className="certs">
        {certs.map(([name, detail], index) => (
          <div className="cert reveal-card" data-reveal style={{ "--delay": `${index * 55}ms` }} key={name}>{name}<small>{detail}</small></div>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ t }) {
  return (
    <section className="contact wrap" id="contact">
      <div className="contact-card reveal-card" data-reveal>
        <h2>{t.title}</h2>
        <p>{t.text}</p>
        <div className="actions">
          <a className="btn" href="mailto:mariorioshol@gmail.com">Email</a>
          <a className="btn" href="https://github.com/mariorsh" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn" href="https://www.linkedin.com/in/mariorh/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, intro }) {
  return (
    <div className="section-head">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      <p>{intro}</p>
    </div>
  );
}

export default App;
