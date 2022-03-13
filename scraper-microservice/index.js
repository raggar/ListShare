import express from "express";
import got from "got";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import metascraper from "metascraper";
import metascraperDescription from "metascraper-description";
import metascraperImage from "metascraper-image";
import metascraperTitle from "metascraper-title";

const app = express();

// middlwares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.disable("x-powered-by");
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const scraper = metascraper([
  metascraperTitle(),
  metascraperDescription(),
  metascraperImage(),
]);

const fetchMetadata = async (targetUrl) => {
  const { body: html, url } = await got(targetUrl);
  const metadata = await scraper({ html, url });
  return metadata;
};

app.get("/scrape", async (req, res) => {
  const metadata = await fetchMetadata(req.query.url);
  res.json(metadata);
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
