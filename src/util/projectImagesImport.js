import notes from "../assets/projects/img/appnotas.png";
import codecracker from "../assets/projects/img/codecracker.png";
import exoplanet from "../assets/projects/img/exoplanetFinder.png";
import gamertag from "../assets/projects/img/gamertag.png";
import imoveis from "../assets/projects/img/imoveis.png";
import taptake from "../assets/projects/img/taptakee-sports.png";
import backend from "../assets/projects/img/backend.png";

const imageMap = {
  notes,
  codecracker,
  exoplanet,
  gamertag,
  imoveis,
  taptake,
  backend
};

const imageMapper = (imgPath) => {
  const image = imageMap[imgPath];
  
  if (!image) {
    console.error(`Imagem não encontrada para: ${imgPath}`);
    return null;
  }
  
  return image;
};

export default imageMapper;