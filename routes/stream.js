const express = require("express");
const router = express.Router();

// Example stream response for episodes with forced English subtitles
// Replace URLs with actual accessible video and subtitle URLs.
router.get("/:type/:id", (req, res) => {
  const { type, id } = req.params;

  if (type !== "episode") {
    return res.status(404).json({ error: "Only 'episode' type is supported" });
  }

  // Example stream object
  const streams = [
    {
      title: "Example Episode Stream",
      url: "https://example.com/video/episode.mp4",
      subtitles: [
        {
          url: "https://example.com/subtitles/forced-en.vtt",
          lang: "en",
          forced: true,
        },
      ],
      externalUrl: false,
      infoHash: null,
      // other stream properties as needed
    },
  ];

  res.json(streams);
});

module.exports = router;
