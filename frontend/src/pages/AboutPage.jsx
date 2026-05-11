import "./../style/AboutPage.css";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="about-page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <h1>NayaAksara</h1>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/about" className="active">
            About
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="about-hero">
        <h1>About NayaAksara</h1>

        <p>
          Preserving and promoting the beautiful art of Javanese script
          through innovative technology and education
        </p>
      </section>

      {/* MISSION SECTION */}
      <section className="mission-section">
        <div className="mission-card">
          <div className="mission-title">
            <span className="mission-icon">◎</span>
            <h2>Our Mission</h2>
          </div>

          <p>
            NayaAksara is dedicated to preserving the rich heritage of
            Aksara Jawa (Javanese Script) by making it accessible and
            engaging for learners of all levels. Through our advanced
            assessment technology, we empower students, educators, and
            enthusiasts to master this ancient writing system and keep
            it alive for future generations.
          </p>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="vision-section">
        <div className="vision-card">
          <div className="vision-title">
            <span className="vision-icon">✦</span>
            <h2>Our Vision</h2>
          </div>

          <p>
            We envision a future where traditional Javanese culture and
            modern technology work together harmoniously. NayaAksara aims
            to become the leading platform for learning, assessing, and
            appreciating Aksara Jawa across Indonesia and beyond.
          </p>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="values-section">
        <h2>Core Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Cultural Preservation</h3>
            <p>
              Keeping the beauty of Javanese script alive for future
              generations.
            </p>
          </div>

          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              Combining technology and education to create meaningful
              learning experiences.
            </p>
          </div>

          <div className="value-card">
            <h3>Accessibility</h3>
            <p>
              Making Aksara Jawa learning easy and available to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 NAYAAKSARA. Preserving Javanese Script Heritage.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
