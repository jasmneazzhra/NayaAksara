// TriviaPage.jsx

import { Link } from "react-router-dom";
import { useState } from "react";
import "./../style/TriviaPage.css";

function TriviaPage() {

  const triviaData = [
    {
      question: "Huruf apa ini: ꦏ",
      options: ["Ka", "Na", "Ta", "Sa"],
      answer: "Ka",
    },
    {
      question: "Huruf apa ini: ꦩ",
      options: ["Pa", "Ma", "Ga", "Da"],
      answer: "Ma",
    },
    {
      question: "Aksara Jawa berasal dari turunan aksara?",
      options: ["Latin", "Brahmi", "Arab", "Kanji"],
      answer: "Brahmi",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const currentTrivia = triviaData[current];

  const handleAnswer = (option) => {
    setSelected(option);
    setShowAnswer(true);
  };

  const nextTrivia = () => {
    setCurrent((prev) => (prev + 1) % triviaData.length);
    setSelected("");
    setShowAnswer(false);
  };

  return (
    <div className="trivia-page">

      <header className="navbar">
        <div className="logo">
          <h1>NayaAksara</h1>
        </div>

        <nav className="nav-links">
          <Link to="/">Beranda</Link>
          <Link to="/upload">Unggah</Link>
          <Link to="/trivia" className="active">Trivia</Link>
          <Link to="/about">Tentang</Link>
        </nav>
      </header>

      <section className="trivia-header">
        <h1>Trivia Aksara Jawa</h1>

        <p>
          Uji pengetahuanmu tentang Aksara Jawa
          dengan kuis singkat dan fakta menarik.
        </p>
      </section>

      <section className="trivia-section">

        {/* FUN FACT */}
        <div className="fact-card">
          <h2>Tahukah Kamu?</h2>

          <p>
            Aksara Jawa memiliki 20 aksara dasar
            yang dikenal dengan nama Hanacaraka.
          </p>
        </div>

        {/* QUIZ */}
        <div className="quiz-card">

          <h2>{currentTrivia.question}</h2>

          <div className="options">
            {currentTrivia.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={
                  showAnswer
                    ? option === currentTrivia.answer
                      ? "correct"
                      : option === selected
                      ? "wrong"
                      : ""
                    : ""
                }
              >
                {option}
              </button>
            ))}
          </div>

          {showAnswer && (
            <div className="result-box">
              {selected === currentTrivia.answer ? (
                <p>🎉 Jawaban Benar!</p>
              ) : (
                <p>
                  ❌ Jawaban Salah. Jawaban yang benar:
                  <strong> {currentTrivia.answer}</strong>
                </p>
              )}

              <button
                className="next-btn"
                onClick={nextTrivia}
              >
                Trivia Berikutnya
              </button>
            </div>
          )}

        </div>

      </section>

      <div className="bottom-space"></div>
    </div>
  );
}

export default TriviaPage;