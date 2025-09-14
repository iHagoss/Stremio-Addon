const { addonBuilder } = require("stremio-addon-sdk");
const fetch = require("node-fetch");

const manifest = {
  id: "community.skipper",
  version: "1.0.0",
  name: "Skipper",
  description: "Skip intros and recaps automatically",
  types: ["movie", "series"],
  resources: ["stream"],
  idPrefixes: ["tt"]
};

const builder = new addonBuilder(manifest);

builder.defineStreamHandler(async ({ type, id }) => {
  const skipDataUrl = `https://yourdomain.com/skip-data/${id}.json`;

  let skipData = {};
  try {
    const res = await fetch(skipDataUrl);
    skipData = await res.json();
  } catch (e) {
    console.warn("No skip data found for", id);
  }

  const stream = {
    title: "1080p - Skippable",
    url: "https://yourstreamsource.com/stream.mkv",
    behaviorHints: {
      skip: skipData // Inject skip metadata here
    }
  };

  return Promise.resolve({ streams: [stream] });
});

module.exports = builder.getInterface();
