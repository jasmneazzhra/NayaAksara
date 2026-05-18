const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.get("/", (req, res) => {
    const sql = "SELECT * FROM quests";

    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                status: "error",
                message: "Gagal mengambil data quests",
            });
        } else {
            return res.json({
                status: "success",
                data: result,
            });
        }
    });
});

router.post("/", (req, res) => {
    const { aksara, title, difficulty } = req.body;

    const sql = `
        INSERT INTO quests (aksara, title, difficulty)
        VALUES (?, ?, ?)
    `;

    db.query(sql, [aksara, title, difficulty], (err, result) => {
        if (err) {
            return res.status(500).json({
                status: "error",
                message: "Gagal menambahkan quest",
            });
        } else {
            return res.json({
                status: "success",
                message: "Quest berhasil ditambahkan",
            });
        }
    });
});

module.exports = router;