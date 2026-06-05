import { Link } from "react-router-dom";
import "./../style/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <header className="navbar">
        <div className="logo">
          <h1>NayaAksara</h1>
        </div>

        <nav className="nav-links">
          <Link to="/" className="active">Beranda</Link>
          <Link to="/upload">Unggah</Link>
          <Link to="/how-it-works">Cara Kerja</Link>
          <Link to="/about">Tentang</Link>
        </nav>
  </header>

      <section className="hero-section">
        <div className="hero-content">
          <h1>Kuasi Seni Aksara Jawa</h1>

          <p>
            Unggah tulisan tangan Aksara JAwa dan dapatkan penilaian instan
            yang detail untuk meningkatkan keterampilan menulis Anda.
          </p>

          <div className="hero-buttons">
            <Link to="/upload" className="get-started-btn">
              Mulai Sekarang
            </Link>

            <Link to="/how-it-works" className="learn-more-btn">Pelajari Lebih Lanjut</Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Kenapa memilih NayaAksara</h2>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">↥</div>

            <h3>Unggah dengan mudah</h3>

            <p>
              Cukup unggah foto tulisan tangan Aksara Jawa Anda dan biarkan sistem kami yang bekerja. 
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚬</div>

            <h3>Penilaian Akurat</h3>

            <p>
              Algoritma penilaian canggih menyediakan evaluasi yang tepat terhadap
              tulisan Anda
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📖</div>

            <h3>Feedback Detail</h3>

            <p>
              Dapatkan wawasan lengkap tentang kelebihan dan area yang perlu
              ditingkatkan untuk menguasai Aksara Jawa
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">↗</div>

            <h3>Melacak Progres </h3>

            <p>Pantau perkembangan Anda seiring waktu dengan analisis detail</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Siap Meningkatkan Tulisan Aksara Jawa Anda?</h2>

          <p>
            Bergabunglah dengan ribuan pembelajar yang melestarikan dan menguasai
            keindahan Aksara Jawa
          </p>

          <Link to="/upload" className="cta-btn">
            Mulai Penilaian Anda
          </Link>
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-grid">

          <div className="stat-item">
            <h3>10,000+</h3>
            <p>Penilaian Selesai</p>
          </div>

          <div className="stat-item">
            <h3>95%</h3>
            <p>Rate Akurasi</p>
          </div>

          <div className="stat-item">
            <h3>5,000+</h3>
            <p>Pengguna Aktif</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          © 2026 NAYAAKSARA. Preserving Javanese Script Heritage.
        </p>
      </footer>
    </div>
  );
}

export default HomePage;
