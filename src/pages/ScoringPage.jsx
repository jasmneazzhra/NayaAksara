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
        <h1>Hasil Penilaian Anda</h1>
        <p>Bagus sekali! Kami telah selesai menganalisis tulisan Aksara Jawa yang Anda unggah.</p>
      </section>

      <section className="scoring-section">
        <div className="scoring-main-container">
          {/* Main Score Centerpiece */}
          <div className="score-hero-card">
            <div className="score-hero-header">
              <h2>Akurasi Penulisan</h2>
              <span className={`status-badge ${result?.data?.is_valid ? 'valid' : 'invalid'}`}>
                {result?.data?.is_valid ? "✔ Dikenali AI" : "⚠ Kurang Jelas"}
              </span>
            </div>

            <div className="score-hero-content">
              <div className="score-circle-large">
                <span>{score}</span>
                <p>Skor Keyakinan</p>
              </div>
              
              <div className="score-hero-text">
                <h3>Huruf Terdeteksi: <strong>{result?.data?.prediction?.toUpperCase() || "?"}</strong></h3>
                <p className="score-label">
                  {result?.data?.is_valid
                    ? "Hebat! Model AI kami dapat mengenali aksara Anda dengan tingkat keyakinan yang baik. Terus pertahankan latihan menulis Anda!"
                    : "Hmm, model AI kami kesulitan mengenali aksara ini dengan yakin. Cobalah menulis dengan garis yang lebih tegas atau periksa pencahayaan foto Anda."}
                </p>
              </div>
            </div>
          </div>

          <div className="scoring-grid">
            {/* Image Preview */}
            <div className="preview-card">
              <h3>Gambar yang Anda Unggah</h3>
              {uploadedFile ? (
                <img
                  src={URL.createObjectURL(uploadedFile)}
                  alt="Uploaded"
                  className="preview-image"
                />
              ) : (
                <div className="no-image">Tidak ada gambar yang diunggah</div>
              )}
            </div>

            {/* Analysis Details */}
            <div className="detail-card">
              <h3>Detail Analisis</h3>
              <div className="analysis-item">
                <div className="analysis-header">
                  <span>Tingkat Keyakinan (Confidence)</span>
                  <strong>{score}%</strong>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${score}%`,
                      backgroundColor: score >= 80 ? "#4caf50" : score >= 50 ? "#ff9800" : "#f44336",
                    }}
                  ></div>
                </div>
                <p className="analysis-desc">
                  Persentase seberapa yakin sistem bahwa tulisan Anda sesuai dengan bentuk standar aksara.
                </p>
              </div>

              <div className="trivia-mini-card">
                <h4>Tahukah Kamu tentang {result?.data?.trivia?.aksara?.toUpperCase() || "?"}?</h4>
                <p>{result?.data?.trivia?.content || "Aksara Jawa memiliki sejarah dan filosofi yang sangat dalam. Terus berlatih untuk melestarikannya!"}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="button-wrapper">
          <Link to="/upload" className="upload-again-btn">
            Unggah Tulisan Lain
          </Link>
          <Link to="/trivia" className="trivia-btn">
            Uji Pengetahuan (Trivia)
          </Link>
        </div>
      </section>

      <div className="bottom-space"></div>
    </div>
  );
}

export default ScoringPage;
