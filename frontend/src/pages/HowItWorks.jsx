import { Link } from "react-router-dom";
import "./../style/HowItWorks.css";

function HowItWorksPage() {
  return (
    <div className="how-page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <h1>NayaAksara</h1>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/upload">Upload</Link>

          <Link to="/how-it-works" className="active">
            How It Works
          </Link>

          <a href="#">About</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="how-hero">
        <h1>How It Works</h1>

        <p>
          Learn how NayaAksara helps you master Aksara Jawa
          writing in four simple steps
        </p>
      </section>

      {/* STEP CARD */}
      <section className="step-section">
        <div className="step-card">
          {/* NUMBER */}
          <div className="step-number">
            <span>1</span>
          </div>

          {/* CONTENT */}
          <div className="step-content">
            <div className="step-title">
              <span className="step-icon">↥</span>

              <h2>Upload Your Writing</h2>
            </div>

            <p className="step-description">
              Take a clear photo or scan of your Aksara Jawa
              handwriting. Make sure the image is well-lit and
              all characters are visible.
            </p>

            <ul className="step-list">
              <li>Use natural lighting or a bright lamp</li>

              <li>Keep the camera steady</li>

              <li>Ensure all characters are in frame</li>
            </ul>
          </div>
        </div>
      </section>
              {/* STEP 2 */}
      <section className="step-section">
        <div className="step-card alt-card">
          {/* NUMBER */}
          <div className="step-number">
            <span>2</span>
          </div>

          {/* CONTENT */}
          <div className="step-content">
            <div className="step-title">
              <span className="step-icon">⌲</span>

              <h2>AI Analysis</h2>
            </div>

            <p className="step-description">
              Our advanced algorithm analyzes your writing across
              multiple criteria including character formation,
              stroke order, spacing, and proportions.
            </p>

            <ul className="step-list">
              <li>Analysis takes just a few seconds</li>

              <li>We examine every character individually</li>

              <li>Multiple assessment criteria are evaluated</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="step-section">
        <div className="step-card">
          {/* NUMBER */}
          <div className="step-number">
            <span>3</span>
          </div>

          {/* CONTENT */}
          <div className="step-content">
            <div className="step-title">
              <span className="step-icon">⌁</span>

              <h2>Receive Detailed Results</h2>
            </div>

            <p className="step-description">
              Get a comprehensive score breakdown with specific
              feedback on each aspect of your writing, plus
              personalized recommendations for improvement.
            </p>

            <ul className="step-list">
              <li>Overall score from 0-100</li>

              <li>Detailed criteria-by-criteria feedback</li>

              <li>Actionable improvement suggestions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STEP 4 */}
      <section className="step-section">
        <div className="step-card alt-card">
          {/* NUMBER */}
          <div className="step-number">
            <span>4</span>
          </div>

          {/* CONTENT */}
          <div className="step-content">
            <div className="step-title">
              <span className="step-icon">✓</span>

              <h2>Track Your Progress</h2>
            </div>

            <p className="step-description">
              Submit multiple assessments over time to monitor
              your improvement and master the art of Aksara Jawa
              writing.
            </p>

            <ul className="step-list">
              <li>Compare results across submissions</li>

              <li>Identify areas of growth</li>

              <li>Celebrate your achievements</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT WE ASSESS */}
      <section className="assess-section">
        <h2>What We Assess</h2>

        <div className="assess-grid">
          {/* CARD 1 */}
          <div className="assess-card">
            <h3>Character Formation</h3>

            <p>
              How accurately you form each Aksara Jawa
              character according to traditional standards
            </p>
          </div>

          {/* CARD 2 */}
          <div className="assess-card">
            <h3>Stroke Order</h3>

            <p>
              Whether you follow the correct sequence
              of strokes for each character
            </p>
          </div>

          {/* CARD 3 */}
          <div className="assess-card">
            <h3>Spacing & Alignment</h3>

            <p>
              Consistent spacing between characters and
              proper alignment on the baseline
            </p>
          </div>

          {/* CARD 4 */}
          <div className="assess-card">
            <h3>Line Quality</h3>

            <p>
              Smoothness and consistency of your pen strokes and line weight
            </p>
          </div>
          
           {/* CARD 5 */}
          <div className="assess-card">
            <h3>Proportions</h3>

            <p>
              Correct Relative sizes and dimensions of character components
            </p>
          </div>

           {/* CARD 6 */}
          <div className="assess-card">
            <h3>Overall Aesthetic</h3>

            <p>
              The visual harmony and beauty of your complete writing sample
            </p>
          </div>
        </div>
      </section>

      {/* TIPS SECTION */}
      <section className="tips-section">
        <div className="tips-container">
          <h2>Tips for Best Results</h2>

          <div className="tips-grid">
            {/* LEFT */}
            <div className="tips-column">
              <h3>Photography Tips</h3>

              <ul>
                <li>Use even, natural lighting</li>
                <li>Avoid shadows and glare</li>
                <li>Keep camera parallel to paper</li>
                <li>Capture the entire writing sample</li>
              </ul>
            </div>

            {/* RIGHT */}
            <div className="tips-column">
              <h3>Writing Tips</h3>

              <ul>
                <li>Use high-contrast ink (black on white)</li>
                <li>Write on clean, unlined paper</li>
                <li>Maintain consistent pen pressure</li>
                <li>Take your time with each character</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Ready To Get Started?</h2>

        <p>
          Upload your first Aksara Jawa writing sample
          and receive instant feedback
        </p>

        <Link to="/login" className="cta-btn">
          Start Your Assessment
        </Link>
      </section>

      {/* EXTRA SPACE */}
      <div className="bottom-space"></div>
    </div>
  );
}

export default HowItWorksPage;