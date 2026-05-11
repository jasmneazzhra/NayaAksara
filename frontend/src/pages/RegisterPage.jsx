import "./../style/RegisterPage.css";
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="register-container">
      {/* LEFT SIDE */}
      <div className="register-left">
        <div className="branding">
          <h1>NAYAAKSARA</h1>

          <div className="line"></div>

          <p>Begin your journey with us</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="register-right">
        <div className="register-card">
          <h2>Create Account</h2>
          <p className="subtitle">Join us today</p>

          <form>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Password</label>

              <div className="password-input">
                <input type="password" placeholder="Create a password" />
                <span>👁️</span>
              </div>
            </div>

            <div className="form-group">
              <label>Confirm Password</label>

              <div className="password-input">
                <input type="password" placeholder="Confirm your password" />
                <span>👁️</span>
              </div>
            </div>

            <div className="terms">
              <label>
                <input type="checkbox" />I agree to the Terms of Service and
                Privacy Policy
              </label>
            </div>

            <Link to="/login" className="register-btn">
                CREATE ACCOUNT
            </Link>
          </form>

          <div className="divider">
            <span></span>
            <p>Or sign up with</p>
            <span></span>
          </div>

          <div className="social-buttons">
            <button>Google</button>
            <button>Facebook</button>
          </div>

          <p className="login-text">
            Already have an account? <a href="#">Sign In</a>
          </p>
        </div>

        <p className="copyright">© 2026 NAYAAKSARA. ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default RegisterPage;
