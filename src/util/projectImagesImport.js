import notes from "../assets/projects/img/appnotas.jpg";
import codecracker from "../assets/projects/img/codecracker.jpg";
import exoplanet from "../assets/projects/img/exoplanetFinder.jpg";
import gamertag from "../assets/projects/img/gamertag.jpg";
import imoveis from "../assets/projects/img/imoveis.jpg";
import taptake from "../assets/projects/img/taptakee-sports.jpg";
import backend from "../assets/projects/img/backend.jpg";
import next from "../assets/projects/img/next.jpg";

const imageMap = {
  notes,
  codecracker,
  exoplanet,
  gamertag,
  imoveis,
  taptake,
  backend,
  next
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