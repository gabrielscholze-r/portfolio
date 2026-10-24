import notes from "../assets/projects/img/appnotas.avif";
import codecracker from "../assets/projects/img/codecracker.avif";
import exoplanet from "../assets/projects/img/exoplanetFinder.avif";
import gamertag from "../assets/projects/img/gamertag.avif";
import imoveis from "../assets/projects/img/imoveis.avif";
import taptake from "../assets/projects/img/taptakee-sports.avif";
import backend from "../assets/projects/img/backend.avif";
import spendzero from "../assets/projects/img/spendzero.avif";
import wellfit from "../assets/projects/img/wellfit.avif";

const imageMap = {
  notes,
  codecracker,
  exoplanet,
  gamertag,
  imoveis,
  taptake,
  backend,
  spendzero,
  wellfit
};

export const imageMapper = (imgPath) => {
  const image = imageMap[imgPath];
  
  if (!image) {
    console.error(`Image not found: ${imgPath}`);
    return null;
  }
  
  return image;
};

const siteImages = import.meta.glob("../assets/sites/img/*.avif", {
  eager: true,
  import: "default",
});

export const siteImageMapper = (name) => {
  const image = siteImages[`../assets/sites/img/${name}.avif`];

  if (!image) {
    console.error(`Site image not found: ${name}`);
    return null;
  }

  return image;
};

// merges an item's translation (its `pt` object, for example) over the original
export const localize = (item, lang) =>
  item[lang] ? { ...item, ...item[lang] } : item;

export function formatDates(dataString, lang = "en") {
  const data = new Date(dataString + "T00:00:00");

  return new Intl.DateTimeFormat(lang === "pt" ? "pt-BR" : "en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(data);
}

export function getTagClass(tag) {
  const map = {
    "Portfolio": "bg-primary-color text-white",
    "Personal Projects": "bg-secondary-color text-white",
    "Infrastructure": "bg-danger text-red",
  };

  return map[tag] || "bg-primary-color text-color";
}