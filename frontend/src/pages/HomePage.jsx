import { Link } from "react-router-dom";
import "./../style/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <h1>NayaAksara</h1>
        </div>

        <nav className="nav-links">
          <a href="#" className="active">
            Home
          </a>

          <a href="#">Upload</a>
          <a href="#">How It Works</a>
          <a href="#">About</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Master the Art of Aksara Jawa</h1>

          <p>
            Upload your Javanese script handwriting and receive instant,
            detailed assessments to improve your skills
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="get-started-btn">
              Get Started
            </Link>

            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <h2>Why Choose NayaAksara?</h2>

        <div className="features-grid">
          {/* CARD 1 */}
          <div className="feature-card">
            <div className="feature-icon">↥</div>

            <h3>Easy Upload</h3>

            <p>
              Simply upload a photo of your handwriting and let our system do
              the rest
            </p>
          </div>

          {/* CARD 2 */}
          <div className="feature-card">
            <div className="feature-icon">⚬</div>

            <h3>Accurate Scoring</h3>

            <p>
              Advanced assessment algorithms provide precise evaluation of your
              writing
            </p>
          </div>

          {/* CARD 3 */}
          <div className="feature-card">
            <div className="feature-icon">📖</div>

            <h3>Detailed Feedback</h3>

            <p>
              Receive comprehensive insights on your strengths and areas for
              improvement
            </p>
          </div>

          {/* CARD 4 */}
          <div className="feature-card">
            <div className="feature-icon">↗</div>

            <h3>Track Progress</h3>

            <p>Monitor your improvement over time with detailed analytics</p>
          </div>
        </div>
      </section>
            {/* CTA SECTION */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready To Improve Your Aksara Jawa Writing?</h2>

          <p>
            Join thousands of learners preserving and mastering
            the beautiful Javanese script
          </p>

          <Link to="/login" className="cta-btn">
            Start Your Assessment
          </Link>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="stats-grid">
          {/* ITEM 1 */}
          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Assessments Completed</p>
          </div>

          {/* ITEM 2 */}
          <div className="stat-item">
            <h3>95%</h3>
            <p>Accuracy Rate</p>
          </div>

          {/* ITEM 3 */}
          <div className="stat-item">
            <h3>5,000+</h3>
            <p>Active Learners</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © 2026 NAYAAKSARA. Preserving Javanese Script Heritage.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
