const Opinion = require("../models/Opinion");

// Submit Opinion
const submitOpinion = async (req, res) => {
  try {
    const { name, party, description } = req.body;
    const opinion = new Opinion({ name, party, description });
    await opinion.save();
    res.status(201).json({ message: "Opinion submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit opinion" });
  }
};

// Get All Opinions
const getOpinions = async (req, res) => {
  try {
    const opinions = await Opinion.find().sort({ createdAt: -1 });
    res.status(200).json(opinions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch opinions" });
  }
};

module.exports = { submitOpinion, getOpinions };
