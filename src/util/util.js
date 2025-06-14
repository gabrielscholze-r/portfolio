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
    console.error(`Imagem não encontrada para: ${imgPath}`);
    return null;
  }
  
  return image;
};

export function formatDates(dataString) {
  const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
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
    "Outros projetos": "bg-secondary-color text-white",
    "Infraestrutura": "bg-danger text-red",
  };

  return map[tag] || "bg-primary-color text-color";
}