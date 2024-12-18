const express = require("express");
const logger = require("../log");
const quotesRoute = require("./routes/quotes");
const cors = require("cors");
const app = express();

app.use(cors());

app.use("/api/quotes", quotesRoute);

app.use((_req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.use((err, _req, res, _next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json(err.message || { error: "Internal Server Error" });
});

app.listen(3000, () => {
  logger.info("App has started");
  console.log("Server running on port 3000");
});
