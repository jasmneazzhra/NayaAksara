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

    // =====================================
    // TEMPORARY MOCK AI
    // NANTI DIGANTI DENGAN AI ENDPOINT

    // const randomNumber = Math.floor(Math.random() * 10);

    // if (randomNumber > 3) {
    //     const sql = `
    //         SELECT * FROM trivia_pool
    //         ORDER BY RAND()
    //         LIMIT 1
    //     `;

    //     db.query(sql, (err, result) => {
    //         if (err) {
    //             return res.status(500).json({
    //                 status: "error",
    //                 message: "Database error",
    //             });
    //         }

    //         const imagePath = req.file.path;

    //         const insertSql = `
    //             INSERT INTO submissions (image_path, prediction, confidence, is_valid)
    //             VALUES (?, ?, ?, ?)
    //         `;

    //         db.query(insertSql, [imagePath, "ha", 0.92, true]);

    //         return res.json({
    //             status: "success",
    //             data: {
    //                 prediction: "ha",
    //                 confidence: 0.92,
    //                 is_valid: true,
    //                 trivia: result[0],
    //             },
    //         });
    //     });
    // } else {
    //     return res.json({
    //         status: "success",
    //         data: {
    //             prediction: "unknown",
    //             confidence: 0.3,
    //             is_valid: false,
    //             message: "Tulisan kurang jelas",
    //         },
    //     });
    // }
    // =====================================

    try {

    const aiResult =
        await predictImage(req.file.path);

    console.log("AI RESULT:", aiResult);

    const prediction =
        aiResult.prediction;

    const confidence =
        aiResult.confidence;

    const MIN_CONFIDENCE = 0.60;

const isValid =
    confidence >= MIN_CONFIDENCE;

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
        ORDER BY RAND()
        LIMIT 1
    `;

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                status: "error",
                message: "Database error",
            });
        }

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

        db.query(
            insertSql,
            [
                req.file.path,
                prediction,
                confidence,
                true
            ]
        );

        return res.json({
            status: "success",
            data: {
                prediction,
                confidence,
                is_valid: true,
                trivia: result[0],
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