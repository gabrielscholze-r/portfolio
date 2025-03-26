
import notes from "../assets/projects/img/appnotas.png"
import codecracker from "../assets/projects/img/codecracker.png"
import exoplanet from "../assets/projects/img/exoplanetFinder.png"
import gamertag from "../assets/projects/img/gamertag.png"
import imoveis from "../assets/projects/img/imoveis.png"
import taptake from "../assets/projects/img/taptakee-sports.png"

const imageMapper = (imgPath) => {
    switch (imgPath) {
        case "notes":
            return notes;
        case "codecracker":
            return codecracker;
        case "exoplanet":
            return exoplanet;
        case "gamertag":
            return gamertag;
        case "imoveis":
            return imoveis;
        case "taptake":
            return taptake;
    }
};

export default imageMapper;