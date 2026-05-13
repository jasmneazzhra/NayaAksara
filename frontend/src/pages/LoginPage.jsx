import "./../style/LoginPage.css";
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-left">
        <div className="branding">
          <h1>NAYAAKSARA</h1>

          <div className="line"></div>

          <p>Tempat Tradisi Bertemu Inovasi</p>
        </div>
      </div>

      <div className="login-right">
        <div className="login-card">
          <h2>Selamat Datang Kembali</h2>
          <p className="subtitle">Masuk ke akun Anda</p>

          <form>
            <div className="form-group">
              <label>Alamat Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Password</label>

              <div className="password-input">
                <input type="password" placeholder="Masukkan kata sandi Anda" />
                <span>👁️</span>
              </div>
            </div>

            <div className="options">
              <label>
                <input type="checkbox" />
                Ingat saya
              </label>

              <a href="#">Lupa Kata Sandi?</a>
            </div>

            <Link to="/" className="signin-btn">
              MASUK
            </Link>
          </form>

          <div className="divider">
            <span></span>
            <p>Atau lanjutkan dengan</p>
            <span></span>
          </div>

          <div className="social-buttons">
            <button>Google</button>
            <button>Facebook</button>
          </div>

          <p className="signup-text">
            Belum punya akun? <Link to="/register">Daftar</Link>
          </p>
        </div>

        <p className="copyright">© 2026 NAYAAKSARA. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default LoginPage;
