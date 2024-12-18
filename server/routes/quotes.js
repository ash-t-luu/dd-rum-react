const express = require("express");
const quotesController = require("../controllers/quotesController");

const router = express.Router();

router.get("/", quotesController.getRandomQuote, (_req, res) => {
  res.status(200).json({ quote: res.locals.quote });
});

module.exports = router;
