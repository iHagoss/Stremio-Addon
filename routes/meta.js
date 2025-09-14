const express = require("express");
const router = express.Router();

router.get("/:type/:id", (req, res) => {
  const { type, id } = req.params;

  if (type !== "series") {
    return res.status(404).json({ error: "Only 'series' type is supported" });
  }

  // Example metadata with chapters
  const meta = {
    id: id,
    type: "series",
    name: "Example Series",
    description: "A series with forced English subtitles and intro/credits chapters.",
    poster: "https://example.com/poster.jpg",
    background: "https://example.com/background.jpg",
    genres: ["Drama", "Thriller"],
    year: 2023,
    chapters: [
      {
        id: "intro",
        type: "intro",
        start: 0,
        end: 120,
        name: "Intro"
      },
      {
        id: "credits",
        type: "credits",
        start: 3300,
        end: 3600,
        name: "Credits"
      }
    ]
  };

  res.json(meta);
});

module.exports = router;
