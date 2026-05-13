import { Link } from "react-router-dom";
import "./../style/HowItWorks.css";

function HowItWorksPage() {
  return (
    <div className="how-page">
      <header className="navbar">
        <div className="logo">
          <h1>NayaAksara</h1>
        </div>

        <nav className="nav-links">
          <Link to="/">Beranda</Link>
          <Link to="/upload">Unggah</Link>
          <Link to="/how-it-works" className="active"> Cara Kerja </Link>
          <Link to="/about">Tentang</Link>
        </nav>
      </header>

      <section className="how-hero">
        <h1>Cara Kerja</h1>

        <p>
          Pelajari bagaimana NayaAksara membantu Anda menguasai penulisan Aksara Jawa
          dalam empat langkah sederhana
        </p>
      </section>

      <section className="step-section">
        <div className="step-card">
          <div className="step-number">
            <span>1</span>
          </div>

          <div className="step-content">
            <div className="step-title">
              <span className="step-icon">↥</span>

              <h2>Unggah Tulisan Anda</h2>
            </div>

            <p className="step-description">
              Ambil foto atau scan tulisan tangan Aksara Jawa Anda.
              Pastikan gambar memiliki pencahayaan yang baik dan semua
              karakter terlihat jelas.
            </p>

            <ul className="step-list">
              <li>Gunakan pencahayaan alami atau lampu yang terang</li>

              <li>Jaga kamera tetap stabil</li>

              <li>Pastikan semua karakter berada dalam bingkai</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="step-section">
        <div className="step-card alt-card">
          <div className="step-number">
            <span>2</span>
          </div>

          <div className="step-content">
            <div className="step-title">
              <span className="step-icon">⌲</span>

              <h2>Analisis AI</h2>
            </div>

            <p className="step-description">
              Algoritma canggih kami menganalisis tulisan Anda berdasarkan 
              berbagai kriteria seperti bentuk karakter,
              urutan goresan, jaralk, and proporsi.
            </p>

            <ul className="step-list">
              <li>Analisis hanya membutuhkan beberapa detik</li>

              <li>Kami menganalisis setiap karakter secara individual</li>

              <li>Berbagai kriteria penilaian dievaluasi</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="step-section">
        <div className="step-card">
          <div className="step-number">
            <span>3</span>
          </div>

          <div className="step-content">
            <div className="step-title">
              <span className="step-icon">⌁</span>

              <h2>Terima Hasil Detail</h2>
            </div>

            <p className="step-description">
              Dapatkan hasil penilaian lengkap dengan umpan balik spesifik
              untuk setiap aspek tulisan Anda, serta rekomendasi peningkatan yang dipersonalisasi
            </p>

            <ul className="step-list">
              <li>Skor keseluruhan dari 0-100</li>

              <li>Umpan balik berdasarkan kriteria secara rinci </li>

              <li>Saran perbaikan  yang dapat diterapkan</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="step-section">
        <div className="step-card alt-card">
          <div className="step-number">
            <span>4</span>
          </div>

          <div className="step-content">
            <div className="step-title">
              <span className="step-icon">✓</span>

              <h2>Lacak Perkembangan Anda</h2>
            </div>

            <p className="step-description">
              Kirim beberapa hasil penilaian dari waktu ke waktu untuk
              memantau perkembangan Anda dan menguasai Aksara Jawa
            </p>

            <ul className="step-list">
              <li>Identifikasi area peningkatan</li>
              <li>Rayakan Pencapaian Anda</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="assess-section">
        <h2>Apa yang Kami Nilai?</h2>

        <div className="assess-grid">
          <div className="assess-card">
            <h3>Bentuk Karakter</h3>

            <p>
              Seberapa tepat Anda membentuk setiap karakter Aksara Jawa 
              sesuai dengan standar tradisional
            </p>
          </div>

          <div className="assess-card">
            <h3>Urutan Goresan</h3>

            <p>
              Konsistensi jarak antar karakter dan perataan pada garis dasar
            </p>
          </div>

          <div className="assess-card">
            <h3>Jarak dan Perataan</h3>

            <p>
              Konsistensi jarak antar karakter dan perataan pada garis dasar
            </p>
          </div>

          <div className="assess-card">
            <h3>Kualitas Garis</h3>

            <p>
              Keteraturan dan konsistensi dari goresan pena dan tebal garis Anda
            </p>
          </div>
          
          <div className="assess-card">
            <h3>Proporsi</h3>

            <p>
              Konsistensi ukuran dan dimensi komponen-komponen karakter
            </p>
          </div>

          <div className="assess-card">
            <h3>Estetika Keseluruhan</h3>

            <p>
              Keharmonisan visual dan keindahan dari hasil tulisan Anda secara
              keseluruhan
            </p>
          </div>
        </div>
      </section>

      <section className="tips-section">
        <div className="tips-container">
          <h2>Tips Hasil Terbaik</h2>

          <div className="tips-grid">
            <div className="tips-column">
              <h3>Tips Fotografi</h3>

              <ul>
                <li>Gunakan pencahayaan alami yang merata</li>
                <li>Hindari bayangan dan pantulan cahaya</li>
                <li>Posisikan kamera sejajar dengan kertas</li>
                <li>Pastikan seluruh tulisan terlihat</li>
              </ul>
            </div>

            <div className="tips-column">
              <h3>Tips Menulis</h3>

              <ul>
                <li>Gunakan tinta berkontras tinggi (hitam di atas putih)</li>
                <li>Tulis di atas kertas bersih, tanpa garis</li>
                <li>Menjaga tekanan pena yang konsisten</li>
                <li>Luangkan waktu untuk setiap karakter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Siap Memulai?</h2>

        <p>
          Unggah contoh tulisan Aksara Jawa pertama Anda
          dan dapatkan umpan balik instan
        </p>

        <Link to="/login" className="cta-btn">
          Mulai Penilaian
        </Link>
      </section>

      <div className="bottom-space"></div>
    </div>
  );
}

export default HowItWorksPage;