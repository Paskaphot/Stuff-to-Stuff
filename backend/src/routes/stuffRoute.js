const express = require("express");

const stuffsController = require("../controllers/stuffController");

const stuffRouter = express.Router();

stuffRouter.get("/all", stuffsController.allStuff);
stuffRouter.get("/labels", stuffsController.allLabel);
stuffRouter.get("/:id", stuffsController.stuffById);

module.exports = { stuffRouter };
