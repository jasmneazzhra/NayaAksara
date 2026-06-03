import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import "./../style/UploadPage.css";
import { useNavigate } from "react-router-dom";
import { submitQuestImage } from "../services/api"; // Backend submit image

function UploadPage() {
  const [file, setFile] = useState(null);
  const inputRef = useRef(null);

  const navigate = useNavigate();

  // Backend submit image
  const handleSubmit = async () => {
    if (!file) return;

    try {
      const result = await submitQuestImage(file);

      console.log("HASIL BACKEND:", result);

      navigate("/scoring", {
        state: {
          file,
          result,
        },
      });
    } catch (error) {
      console.error(error);
      alert("Upload gagal");
    }
  };

  // handle file dari input / drop
  const handleFile = (selectedFile) => {
    if (!selectedFile) return;
    setFile(selectedFile);
  };

  // drag events
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // klik button → buka file picker
  const handleClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="upload-page">
      <header className="navbar">
        <div className="logo">
          <h1>NayaAksara</h1>
        </div>

        <nav className="nav-links">
          <Link to="/" className="active">
            Beranda
          </Link>
          <Link to="/upload">Unggah</Link>
          <Link to="/how-it-works">Cara Kerja</Link>
          <Link to="/about">Tentang</Link>
        </nav>
      </header>

      <section className="upload-header">
        <h1>NayaAksara</h1>
        <p>Penilaian Tulisan Aksara Jawa</p>
      </section>

      <section className="upload-section">
        <div className="upload-content">
          <h2>Unggah Tulisan Aksara Jawa Anda</h2>

          <p>
            Ambil foto atau scan tulisan tangan Aksara Jawa Anda dengan jelas.
            Sistem kami akan menganalisis tulisan Anda dan memberikan skor
            penilaian yang detail.
          </p>

          {/* INPUT HIDDEN */}
          <input
            type="file"
            ref={inputRef}
            hidden
            accept="image/*"
            onChange={(e) => handleFile(e.target.files[0])}
          />

          {/* DROP AREA */}
          <div
            className="upload-box"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            style={{ cursor: "pointer" }}
          >
            <div className="upload-icon">↥</div>

            <h3>Seret & Lepas Gambar Anda di Sini</h3>
            <span>ATAU KLIK UNTUK MENCARI</span>

            <button type="button" onClick={handleClick}>
              Pilih File
            </button>

            <small>FORMAT YANG DIDUKUNG: JPG, PNG, HEIC</small>

            {/* PREVIEW */}
            {file && (
              <div style={{ marginTop: "10px" }}>
                <p>📄 {file.name}</p>

                <button
                  type="button"
                  // onClick={() => navigate("/scoring", { state: { file } })}
                  onClick={handleSubmit} //  backend submit image
                >
                  Nilai Sekarang
                </button>
              </div>
            )}
          </div>

          <div className="upload-features">
            <div className="upload-card">
              <h3>Gambar yang Jelas</h3>
              <p>
                Pastikan tulisan Anda terang dan fokus untuk penilaian yang
                akurat
              </p>
            </div>

            <div className="upload-card">
              <h3>Isi Lengkap</h3>
              <p>Sertakan seluruh bagian tulisan Aksara Jawa dalam gambar</p>
            </div>

            <div className="upload-card">
              <h3>Hasil Instan</h3>
              <p>Dapatkan skor penilaian detail Anda dalam hitungan detik</p>
            </div>
          </div>
        </div>
      </section>

      <div className="bottom-space"></div>
    </div>
  );
}

export default UploadPage;
