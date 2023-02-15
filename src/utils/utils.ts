import { MotorcycleData } from "../types/motorcycle-data";

export const getTypeName = (type: string) => {
  switch (type) {
    case "Allround":
      return "Adventure";
    case "Unspecified category":
      return "Other";
    case "Prototype / concept model":
      return "Prototype / concept";
    default:
      return type;
  }
};

export const shuffle = (array: MotorcycleData[]) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const getLogo = (manufacturer: string) => {
  switch (manufacturer) {
    case "Aprilia":
      return "../images/manufacturers/aprilia.png";
    case "Bajaj":
      return "../images/manufacturers/bajaj.webp";
    case "Benelli":
      return "../images/manufacturers/benelli.png";
    case "Beta":
      return "../images/manufacturers/beta.png";
    case "Bimota":
      return "../images/manufacturers/bimota.svg";
    case "BMW":
      return "../images/manufacturers/bmw.png";
    case "CF Moto":
      return "../images/manufacturers/cfmoto.webp";
    case "Cobra":
      return "../images/manufacturers/cobra.png";
    case "Ducati":
      return "../images/manufacturers/ducati.png";
    case "GAS GAS":
      return "../images/manufacturers/gasgas.webp";
    case "Harley-Davidson":
      return "../images/manufacturers/harley.webp";
    case "Hero":
      return "../images/manufacturers/hero.webp";
    case "Honda":
      return "../images/manufacturers/honda.png";
    case "Husqvarna":
      return "../images/manufacturers/husqvarna.png";
    case "Indian":
      return "../images/manufacturers/indian.png";
    case "Kawasaki":
      return "../images/manufacturers/kawasaki.png";
    case "KTM":
      return "../images/manufacturers/ktm.png";
    case "Moto Guzzi":
      return "../images/manufacturers/motoguzzi.png";
    case "MV Agusta":
      return "../images/manufacturers/mvaugusta.png";
    case "Norton":
      return "../images/manufacturers/norton.png";
    case "Royal":
      return "../images/manufacturers/royal.png";
    case "Sherco":
      return "../images/manufacturers/sherco.png";
    case "Suzuki":
      return "../images/manufacturers/suzuki.webp";
    case "TM Racing":
      return "../images/manufacturers/tmracing.png";
    case "Triumph":
      return "../images/manufacturers/triumph.png";
    case "Victory":
      return "../images/manufacturers/victory.png";
    case "Yamaha":
      return "../images/manufacturers/yamaha.png";
    case "Zero":
      return "../images/manufacturers/zero.png";
    default:
      return "-";
  }
};
