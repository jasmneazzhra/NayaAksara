import { Link } from "react-router-dom";
import "./../style/UploadPage.css";

function UploadPage() {
  return (
    <div className="upload-page">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo">
          <h1>NayaAksara</h1>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>

          <Link to="/upload" className="active">
            Upload
          </Link>

          <a href="#">How It Works</a>
          <a href="#">About</a>
        </nav>
      </header>

      {/* HEADER */}
      <section className="upload-header">
        <h1>NayaAksara</h1>

        <p>Aksara Jawa Writing Assessment</p>
      </section>

      {/* UPLOAD SECTION */}
      <section className="upload-section">
        <div className="upload-content">
          <h2>Upload Your Javanese Script Writing</h2>

          <p>
            Take a clear photo or scan of your Aksara Jawa handwriting. Our
            system will analyze your writing and provide you with a detailed
            assessment score.
          </p>

          {/* UPLOAD BOX */}
          <div className="upload-box">
            <div className="upload-icon">↥</div>

            <h3>Drag & Drop Your Image Here</h3>

            <span>OR CLICK TO BROWSE</span>

            <button>Choose File</button>

            <small>SUPPORTED FORMATS: JPG, PNG, HEIC</small>
          </div>

          {/* FEATURES */}
          <div className="upload-features">
            {/* CARD 1 */}
            <div className="upload-card">
              <h3>Clear Image</h3>

              <p>
                Ensure your writing is well-lit and in focus for accurate
                assessment
              </p>
            </div>

            {/* CARD 2 */}
            <div className="upload-card">
              <h3>Complete Text</h3>

              <p>Include all parts of your Aksara Jawa writing in the image</p>
            </div>

            {/* CARD 3 */}
            <div className="upload-card">
              <h3>Instant Results</h3>

              <p>Get your detailed assessment score within seconds</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER SPACE */}
      <div className="bottom-space"></div>
    </div>
  );
}

export default UploadPage;
