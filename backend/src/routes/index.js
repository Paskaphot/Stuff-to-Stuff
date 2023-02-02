const { Router } = require("express");

const { stuffRouter } = require("./stuffRoute");

const router = new Router();

router.use("/stuff", stuffRouter);

module.exports = { router };
