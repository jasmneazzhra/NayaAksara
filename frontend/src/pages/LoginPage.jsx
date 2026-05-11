import "./../style/LoginPage.css";
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-container">
      {/* LEFT SIDE */}
      <div className="login-left">
        <div className="branding">
          <h1>NAYAAKSARA</h1>

          <div className="line"></div>

          <p>Where tradition meets innovation</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="login-card">
          <h2>Welcome Back</h2>
          <p className="subtitle">Sign in to your account</p>

          <form>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Password</label>

              <div className="password-input">
                <input type="password" placeholder="Enter your password" />
                <span>👁️</span>
              </div>
            </div>

            <div className="options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#">Forgot Password?</a>
            </div>

            <Link to="/" className="signin-btn">
              SIGN IN
            </Link>
          </form>

          <div className="divider">
            <span></span>
            <p>Or continue with</p>
            <span></span>
          </div>

          <div className="social-buttons">
            <button>Google</button>
            <button>Facebook</button>
          </div>

          <p className="signup-text">
            Don’t have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>

        <p className="copyright">© 2026 NAYAAKSARA. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default LoginPage;
