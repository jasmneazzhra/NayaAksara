import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UploadPage from './pages/UploadPage';
import HowItWorks from "./pages/HowItWorks";
import AboutPage from "./pages/AboutPage";
import ScoringPage from './pages/ScoringPage';
import TriviaPage from "./pages/TriviaPage"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/scoring" element={<ScoringPage />} />
      <Route path="/trivia" element={<TriviaPage />} />
    </Routes>
  );
}

export default App;