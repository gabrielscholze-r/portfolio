import notes from "../assets/projects/img/appnotas.avif";
import codecracker from "../assets/projects/img/codecracker.avif";
import exoplanet from "../assets/projects/img/exoplanetFinder.avif";
import gamertag from "../assets/projects/img/gamertag.avif";
import imoveis from "../assets/projects/img/imoveis.avif";
import taptake from "../assets/projects/img/taptakee-sports.avif";
import backend from "../assets/projects/img/backend.avif";
import spendzero from "../assets/projects/img/spendzero.avif";

const imageMap = {
  notes,
  codecracker,
  exoplanet,
  gamertag,
  imoveis,
  taptake,
  backend,
  spendzero
};

export const imageMapper = (imgPath) => {
  const image = imageMap[imgPath];
  
  if (!image) {
    console.error(`Image not found: ${imgPath}`);
    return null;
  }
  
  return image;
};

export function formatDates(dataString) {
  const meses = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const data = new Date(dataString);
  const dia = data.getDay()
  const mes = meses[data.getMonth()];
  const ano = data.getFullYear();

  return `${dia} de ${mes} de ${ano}`;
}

export function getTagClass(tag) {
  const map = {
    "Portfolio": "bg-primary-color text-white",
    "Personal Projects": "bg-secondary-color text-white",
    "Infrastructure": "bg-danger text-red",
  };

  return map[tag] || "bg-primary-color text-color";
}