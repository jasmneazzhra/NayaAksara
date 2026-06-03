import "./../style/AboutPage.css";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="about-page">
      <header className="navbar">
        <div className="logo">
          <h1>NayaAksara</h1>
        </div>

        <nav className="nav-links">
          <Link to="/">Beranda</Link>
          <Link to="/upload">Unggah</Link>
          <Link to="/how-it-works">Cara Kerja</Link>
          <Link to="/about" className="active">Tentang</Link>
        </nav>
      </header>

      <section className="about-hero">
        <h1>Tentang NayaAksara</h1>

        <p>
          Melestarikan dan mempromosikan keindahan dari Aksara Jawa melalui teknologi pendidikan yang inovatif
        </p>
      </section>

      <section className="mission-section">
        <div className="mission-card">
          <div className="mission-title">
            <span className="mission-icon">◎</span>
            <h2>Misi Kami</h2>
          </div>

          <p>
            NayaAksara berdedikasi untuk melestarikan kekayaan warisan Aksara Jawa dengan
            membuatnya mudah diakses dan menarik bagi semua tingkat pembelajar. Melalui teknologi
            penilaian yang canggih, kami memberdayakan siswa, pendidik, dan penggemar untuk menguasai
            sistem tulisan kuno ini dan menjaganya tetap hidup untuk generasi mendatang.
          </p>
        </div>
      </section>

      <section className="vision-section">
        <div className="vision-card">
          <div className="vision-title">
            <span className="vision-icon">✦</span>
            <h2>Visi Kami</h2>
          </div>

          <p>
            Kami membayangkan masa depan di mana budaya tradisional Jawa dan teknologi
            modern dapat berjalan beriringan secara harmonis. NayaAksara bertujuan menjadi 
            platform terdepan untuk belajar, menilai, dan mengapresiasi Aksara Jawa di seluruh
            Indonesia dan dunia.
          </p>
        </div>
      </section>

      <section className="values-section">
        <h2>Nilai Inti</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Pelestarian Budaya</h3>
            <p>
              Menjaga keindahan Aksara Jawa agar tetap hidup untuk
              generasi mendatang. 
            </p>
          </div>

          <div className="value-card">
            <h3>Inovasi</h3>
            <p>
              Menggabungkan teknologi dan pendidikan untuk menciptakan pengalaman belajar yang bermakna.
            </p>
          </div>

          <div className="value-card">
            <h3>Aksesibilitas</h3>
            <p>
              Membuat pembelajaran Aksara Jawa mudah dan dapat diaksses oleh siapa saja, di mana saja.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 NAYAAKSARA. Preserving Javanese Script Heritage.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
