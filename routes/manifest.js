const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const manifest = {
    id: "org.example.stremio.forcedsubs",
    version: "1.0.0",
    name: "Forced English Subtitles & Chapters Addon",
    description:
      "Provides streams with forced English subtitles and chapters metadata for series intros and credits.",
    resources: ["stream", "meta"],
    types: ["series", "episode"],
    idPrefixes: ["series", "episode"]
  };
  res.type("application/json").json(manifest);
});

module.exports = router;
