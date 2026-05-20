import { Link, useLocation } from "react-router-dom";
import "./../style/ScoringPage.css";

function ScoringPage() {
  const location = useLocation();

  // data dari UploadPage
  // const uploadedFile = location.state?.file;

  // dummy score sementara
  // const score = 87;
  const result = location.state?.result;
  const uploadedFile = location.state?.file;

  const score = result?.data?.confidence
    ? Math.round(result.data.confidence * 100)
    : 0;

  console.log("DATA DARI BACKEND:", result);

  return (
    <div className="scoring-page">
      <header className="navbar">
        <div className="logo">
          <h1>NayaAksara</h1>
        </div>

        <nav className="nav-links">
          <Link to="/">Beranda</Link>
          <Link to="/upload">Unggah</Link>
          <Link to="/how-it-works">Cara Kerja</Link>
          <Link to="/about">Tentang</Link>
        </nav>
      </header>

      <section className="scoring-header">
        <h1>Hasil Penilaian</h1>
        <p>Analisis AI terhadap tulisan Aksara Jawa Anda</p>
      </section>

      <section className="scoring-section">
        <div className="scoring-container">
          <div className="preview-card">
            <h2>Gambar yang Diunggah</h2>

            {uploadedFile ? (
              <img
                src={URL.createObjectURL(uploadedFile)}
                alt="Uploaded"
                className="preview-image"
              />
            ) : (
              <div className="no-image">Tidak ada gambar</div>
            )}
          </div>

          <div className="score-card">
            <h2>Skor AI</h2>

            <div className="score-circle">
              <span>{score}</span>
              <p>Prediction: {result?.data?.prediction}</p>
              <p>Status: {result?.data?.is_valid ? "Benar" : "Salah"}</p>
              <p>{result?.data?.message}</p>
            </div>

            {/* <p className="score-label">
              Tulisan Anda sangat baik dan cukup mudah dikenali AI.
            </p> */}
            <p className="score-label">
              {result?.data?.is_valid
                ? "Tulisan dikenali sistem dengan baik."
                : result?.data?.message}
            </p>
          </div>
        </div>

        <div className="detail-section">
          <div className="detail-card">
            <h3>Kejelasan Tulisan</h3>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${score}%`,
                  backgroundColor: score > 70 ? "#4caf50" : "#f44336",
                  transition: "width 0.5s ease-in-out",
                }}
              ></div>
            </div>

            <span style={{ fontWeight: "bold" }}>{score}%</span>
          </div>
          <div className="detail-card">
            <h3>Kerapihan Karakter</h3>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${score}%`,
                  backgroundColor: score > 70 ? "#4caf50" : "#f44336",
                  transition: "width 0.5s ease-in-out",
                }}
              ></div>
            </div>

            <span style={{ fontWeight: "bold" }}>{score}%</span>
          </div>
          <div className="detail-card">
            <h3>Kesesuaian Bentuk</h3>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${score}%`,
                  backgroundColor: score > 70 ? "#4caf50" : "#f44336",
                  transition: "width 0.5s ease-in-out",
                }}
              ></div>
            </div>

            <span style={{ fontWeight: "bold" }}>{score}%</span>
          </div>
        </div>

        <div
          className="feedback-card"
          style={{
            marginTop: "20px",
            border: "1px solid #ddd",
            padding: "15px",
          }}
        >
          <h2>Trivia Aksara</h2>
          <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
            {result?.data?.trivia?.aksara?.toUpperCase()}
          </p>
          <p>{result?.data?.trivia?.content}</p>
        </div>

        <div className="button-wrapper">
          <Link to="/upload">
            <button className="upload-again-btn">Upload Lagi</button>
          </Link>

          <Link to="/trivia">
            <button className="trivia-btn">Main Trivia</button>
          </Link>
        </div>
      </section>

      <div className="bottom-space"></div>
    </div>
  );
}

export default ScoringPage;
