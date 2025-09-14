const express = require("express");
const dotenv = require("dotenv");
const manifestRouter = require("./routes/manifest");
const metaRouter = require("./routes/meta");
const streamRouter = require("./routes/stream");

dotenv.config();

const app = express();

app.use("/manifest", manifestRouter);
app.use("/meta", metaRouter);
app.use("/stream", streamRouter);

// Redirect root to manifest.json for convenience
app.get("/", (req, res) => {
  res.redirect("/manifest");
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Stremio addon listening on port ${port}`);
});
