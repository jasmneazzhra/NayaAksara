const express = require("express");
require("./config/db");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const questRoutes = require("./routes/questRoutes");
const submitRoutes = require("./routes/submitRoutes");

app.use("/api/submit-quest", submitRoutes);
app.use("/api/quests", questRoutes);

app.get("/", (req, res) => {
    res.send("Backend NayaAksara jalan!");
});

// Hanya jalankan listener jika di local (bukan di Vercel serverless)
if (process.env.NODE_ENV !== "production") {
    app.listen(3000, () => {
        console.log("Server jalan di port 3000");
    });
}

app.use((err, req, res, next) => {

    if (err instanceof Error) {

        return res.status(400).json({
            success: false,
            message: err.message
        });

    }

    next();

});

module.exports = app;