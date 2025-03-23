const express = require("express");
const Opinion = require("../models/Opinion");
const router = express.Router();

router.post("/submit", async (req, res) => {
    try {
        const { name, party, description } = req.body;
        if (!name || !party || !description) {
            return res.status(400).json({ message: "Sab fields bharen!" });
        }

        const opinion = new Opinion({ name, party, description });
        await opinion.save();
        res.json({ message: "Opinion submit ho gaya!" });
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
