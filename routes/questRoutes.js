const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.get("/", (req, res) => {

    const sql = "SELECT * FROM quests";

    db.query(sql, (err, result) => {

        if (err) {
            res.status(500).json({
                success: false,
                message: "Gagal mengambil data quests"
            });
        } else {
            res.json({
                success: true,
                data: result
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
            res.status(500).json({
                success: false,
                message: "Gagal menambahkan quest"
            });
        } else {
            res.json({
                success: true,
                message: "Quest berhasil ditambahkan"
            });
        }

    });

});

module.exports = router;