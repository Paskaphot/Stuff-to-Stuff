const stuffModel = require("../models/stuffModel");

async function allStuff(req, res) {
  const stuffs = await stuffModel.getAllStuff();
  res.json(stuffs);
}

async function allLabel(req, res) {
  const stuffs = await stuffModel.getAllLabel();
  res.json(stuffs);
}

async function stuffById(req, res) {
  try {
    if (!req.params.id) {
      res.status(400);
      return;
    }
    const stuff = await stuffModel.getStuffById(req.params.id);

    if (!stuff) {
      res.status(404);
      return;
    }

    res.json(stuff);
  } catch (err) {
    res.status(400).json("problems retrieving database");
  }
}

module.exports = {
  allStuff,
  allLabel,
  stuffById,
};
