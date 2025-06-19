import notes from "../assets/projects/img/appnotas.jpg";
import codecracker from "../assets/projects/img/codecracker.jpg";
import exoplanet from "../assets/projects/img/exoplanetFinder.jpg";
import gamertag from "../assets/projects/img/gamertag.jpg";
import imoveis from "../assets/projects/img/imoveis.jpg";
import taptake from "../assets/projects/img/taptakee-sports.jpg";
import backend from "../assets/projects/img/backend.jpg";
import spendzero from "../assets/projects/img/spendzero.jpg";

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