import "./../style/RegisterPage.css";
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="register-container">
      <div className="register-left">
        <div className="branding">
          <h1>NAYAAKSARA</h1>

          <div className="line"></div>

          <p>Mulai perjalanan Anda bersama kami</p>
        </div>
      </div>

      <div className="register-right">
        <div className="register-card">
          <h2>Buat Akun</h2>
          <p className="subtitle">Bergabunglah dengan kami hari ini</p>

          <form>
            <div className="form-group">
              <label>Nama Lengkap</label>
              <input type="text" placeholder="Masukkan nama lengkap Anda" />
            </div>

            <div className="form-group">
              <label>Alamat Email</label>
              <input type="email" placeholder="Masukkan email Anda" />
            </div>

            <div className="form-group">
              <label>Password</label>

              <div className="password-input">
                <input type="password" placeholder="Buat kata sandi" />
                <span>👁️</span>
              </div>
            </div>

            <div className="form-group">
              <label>Konfirmasi Password</label>

              <div className="password-input">
                <input type="password" placeholder="Konfirmasi kata sandi Anda" />
                <span>👁️</span>
              </div>
            </div>

            <div className="terms">
              <label>
                <input type="checkbox" />Saya setuju dengan Syarat Layanan dan
                Kebijakan Privasi
              </label>
            </div>

            <Link to="/login" className="register-btn">
                BUAT AKUN
            </Link>
          </form>

          <div className="divider">
            <span></span>
            <p>Atau daftar dengan</p>
            <span></span>
          </div>

          <div className="social-buttons">
            <button>Google</button>
            <button>Facebook</button>
          </div>

          <p className="login-text">
            Sudah punya akun? <Link to="/login">Masuk</Link>
          </p>
        </div>

        <p className="copyright">© 2026 NAYAAKSARA. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default RegisterPage;
