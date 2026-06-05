import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./../style/TriviaPage.css";

const ALL_TRIVIA = [
  {
    question: "Huruf apa ini: ꦏ",
    options: ["Ka", "Na", "Ta", "Sa"],
    answer: "Ka",
    explanation: "Aksara 'Ka' (ꦏ) memiliki bentuk dasar berupa dua kaki melengkung. Aksara ini sangat umum digunakan dalam penulisan bahasa Jawa."
  },
  {
    question: "Huruf apa ini: ꦩ",
    options: ["Pa", "Ma", "Ga", "Da"],
    answer: "Ma",
    explanation: "Aksara 'Ma' (ꦩ) memiliki ciri khas bentuk yang cukup lebar dengan lengkungan. Jangan tertukar dengan aksara 'Pa' (ꦥ) yang mirip di bagian awalnya."
  },
  {
    question: "Aksara Jawa berasal dari turunan aksara apa?",
    options: ["Latin", "Brahmi", "Arab", "Kanji"],
    answer: "Brahmi",
    explanation: "Aksara Jawa adalah keturunan dari aksara Brahmi (India Selatan), yang berkembang melalui aksara Pallawa dan aksara Kawi sebelum menjadi wujud Aksara Jawa modern."
  },
  {
    question: "Apa nama sandhangan untuk suara 'i' (seperti bunyi 'i' pada 'pipi')?",
    options: ["Wulu", "Suku", "Pepet", "Taling"],
    answer: "Wulu",
    explanation: "Wulu (ꦶ) adalah sandhangan swara berbentuk lingkaran kecil di atas aksara yang mengubah bunyi dasar 'a' menjadi 'i'."
  },
  {
    question: "Huruf apa ini: ꦮ",
    options: ["Wa", "Dha", "Tha", "Nga"],
    answer: "Wa",
    explanation: "Aksara 'Wa' (ꦮ) adalah salah satu dari 20 aksara dasar Hanacaraka. Bentuknya sederhana dan mirip angka 2 yang dilengkungkan."
  },
  {
    question: "Sandhangan Suku mengubah bunyi aksara dasar menjadi?",
    options: ["o", "e", "u", "i"],
    answer: "u",
    explanation: "Suku (ꦸ) diletakkan di bagian bawah belakang aksara untuk mengubah bunyi dasar 'a' menjadi 'u'."
  },
  {
    question: "Legena (aksara dasar) berjumlah berapa huruf?",
    options: ["15", "20", "25", "30"],
    answer: "20",
    explanation: "Aksara Legena (aksara dasar telanjang tanpa sandhangan) berjumlah 20 huruf, yang dikenal sebagai urutan Ha-Na-Ca-Ra-Ka."
  },
  {
    question: "Apa arti dari baris 'Ha Na Ca Ra Ka' secara filosofis?",
    options: ["Ada dua utusan", "Saling bertarung", "Sama saktinya", "Mati semua"],
    answer: "Ada dua utusan",
    explanation: "Secara filosofis dalam legenda Aji Saka, 'Hanacaraka' berarti 'Ada utusan' (ada dua utusan yang saling berdebat dan memegang teguh amanat)."
  },
  {
    question: "Tanda baca koma dalam aksara Jawa disebut?",
    options: ["Pada Lingsa", "Pada Lungsi", "Pada pangkat", "Pangkon"],
    answer: "Pada Lingsa",
    explanation: "Pada Lingsa (꧈) berfungsi sama dengan koma (,) dalam huruf Latin, digunakan untuk jeda pada kalimat."
  },
  {
    question: "Huruf apa ini: ꦚ",
    options: ["Nya", "Ya", "Ra", "La"],
    answer: "Nya",
    explanation: "Aksara 'Nya' (ꦚ) memiliki bentuk yang lumayan rumit dibandingkan aksara lain, dengan lengkungan ganda yang khas."
  }
];

// Helper function to shuffle array
const shuffleArray = (array) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

function TriviaPage() {
  const [triviaData, setTriviaData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // Shuffle the trivia questions once when component mounts
    setTriviaData(shuffleArray(ALL_TRIVIA));
  }, []);

  if (triviaData.length === 0) return null;

  const currentTrivia = triviaData[current];

  const handleAnswer = (option) => {
    if (showAnswer) return; // Prevent changing answer
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
          Uji pengetahuanmu tentang Aksara Jawa dengan pertanyaan acak yang 
          informatif untuk menambah wawasanmu.
        </p>
      </section>

      <section className="trivia-section">
        {/* FUN FACT */}
        <div className="fact-card">
          <h2>Tahukah Kamu?</h2>
          <p>
            Menurut legenda, aksara Jawa diciptakan oleh Aji Saka untuk mengenang dua
            abdi setianya, Dora dan Sembada, yang gugur saat mempertahankan amanat.
          </p>
        </div>

        {/* QUIZ */}
        <div className="quiz-card">
          <div className="quiz-progress">
            <span>Pertanyaan {current + 1} dari {triviaData.length}</span>
          </div>

          <h2>{currentTrivia.question}</h2>

          <div className="options">
            {currentTrivia.options.map((option, index) => {
              let btnClass = "";
              if (showAnswer) {
                if (option === currentTrivia.answer) btnClass = "correct";
                else if (option === selected) btnClass = "wrong";
              }
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={btnClass}
                >
                  {option}
                </button>
              );
            })}
          </div>

          {showAnswer && (
            <div className="result-box">
              {selected === currentTrivia.answer ? (
                <p className="result-title correct-text">🎉 Tepat Sekali!</p>
              ) : (
                <p className="result-title wrong-text">
                  ❌ Kurang Tepat. Jawaban yang benar: <strong>{currentTrivia.answer}</strong>
                </p>
              )}
              
              <div className="explanation-box">
                <h4>Mengapa demikian?</h4>
                <p>{currentTrivia.explanation}</p>
              </div>

              <button className="next-btn" onClick={nextTrivia}>
                Pertanyaan Berikutnya
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