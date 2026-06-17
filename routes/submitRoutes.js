const express = require("express");
const router = express.Router();
const multer = require("multer");

const db = require("../config/db");
const { predictImage } = require("../services/aiService");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: storage,

  limits: {
    fileSize: 2 * 1024 * 1024,
  },

  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("File harus berupa gambar"));
    }
  },
});

// router.post("/", upload.single("image"), (req, res) => {
router.post("/", upload.single("image"), async (req, res) => {
  console.log(req.file);

  if (!req.file) {
    return res.status(400).json({
      status: "error",
      message: "File tidak ditemukan",
    });
  }

  try {
    const aiResult = await predictImage(req.file.path);

    console.log("AI RESULT:", aiResult);

    const prediction = aiResult.prediction;

    const confidence = aiResult.confidence;

    const MIN_CONFIDENCE = 0.6;

    const isValid = confidence >= MIN_CONFIDENCE;

    if (!isValid) {
      return res.json({
        status: "success",
        data: {
          prediction,
          confidence,
          is_valid: false,
          message: "Tulisan kurang jelas",
        },
      });
    }

    const sql = `
    SELECT *
    FROM trivia_pool
    WHERE aksara = ?
    LIMIT 1
`;

    db.query(sql, [prediction], (err, result) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          message: "Database error",
        });
      }

      const trivia =
        result.length > 0
          ? result[0]
          : {
              aksara: prediction,
              content: `Belum ada trivia untuk aksara ${prediction}`,
            };

      const insertSql = `
            INSERT INTO submissions
            (
                image_path,
                prediction,
                confidence,
                is_valid
            )
            VALUES (?, ?, ?, ?)
        `;

      db.query(insertSql, [req.file.path, prediction, confidence, true]);

      return res.json({
        status: "success",
        data: {
          prediction,
          confidence,
          is_valid: true,
          trivia: trivia,
        },
      });
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      status: "error",
      message: "AI service error",
      error: error.message,
    });
  }
});

module.exports = router;
