import express from "express";
import got from "got";
import cors from "cors";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use(cors());

import metascraper from "metascraper";
import metascraperDescription from "metascraper-description";
import metascraperImage from "metascraper-image";
import metascraperTitle from "metascraper-title";

const scraper = metascraper([
  metascraperTitle(),
  metascraperDescription(),
  metascraperImage(),
]);

const fetchMetadata = async (targetUrl) => {
  const { body: html, url } = await got(targetUrl);
  const metadata = await scraper({ html, url });
  console.log(metadata);
  return metadata;
};

app.get("/scrape", async function (req, res) {
  console.log(`Scraping meta tags from ${req.query.url}`);
  const metadata = await fetchMetadata(req.query.url);
  res.json(metadata);
});

app.listen(5000, function () {
  console.log("Server listening on port 5000");
});
