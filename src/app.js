const express = require("express");
const app = express();
const pasteRouter = require("./pastes/pastes.router");
// TODO: Follow instructions in the checkpoint to implement ths API.
const pastes = require("./data/pastes-data");
app.use(express.json());

app.use("/pastes", pasteRouter);

// Not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
