const logger = require("../../log");

const quotes = [
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The best way to predict the future is to invent it. - Alan Kay",
  "Passion is energy. Feel the power that comes from focusing on what excites you. - Oprah Winfrey",
];

const getRandomQuote = (_req, res, next) => {
  try {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.locals.quote = randomQuote;
    return next();
  } catch (error) {
    logger.error("An error occurred", {
      message: error.message,
      stack: error.stack,
    });
    span.setTag("error.message", error.message);
    return next({
      status: 500,
      message: { error: "An error occurred in generating quote" },
    });
  }
};

module.exports = {
  getRandomQuote,
};
