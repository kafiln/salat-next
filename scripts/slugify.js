const cities = require("../public/data/cities.json");
const fs = require("fs");

const results = cities.map((e) => ({
  ...e,
  slug: e.names["fr-fr"].replace(/\s/g, "_").toLocaleLowerCase(),
}));

fs.writeFileSync("cities.json", JSON.stringify(results));
