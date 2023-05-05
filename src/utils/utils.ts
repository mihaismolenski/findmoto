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

export const getCcForMoto = (displacement: string): number => {
  return displacement ? Number(displacement.split("ccm")[0].trim()) : 0;
};

export const getPowerForMoto = (power: string): number => {
  return power ? Number(power.split("HP")[0].trim()) : 0;
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
    case "Aeon":
      return "../images/manufacturers/aeon.png";
    case "American IronHorse":
      return "../images/manufacturers/american_ironhorse.png";
    case "Aprilia":
      return "../images/manufacturers/aprilia.png";
    case "Arctic":
      return "../images/manufacturers/arctic.webp";
    case "Bajaj":
      return "../images/manufacturers/bajaj.webp";
    case "Baotian":
      return "../images/manufacturers/baotian.png";
    case "Benelli":
      return "../images/manufacturers/benelli.png";
    case "Beta":
      return "../images/manufacturers/beta.png";
    case "Big Dog":
      return "../images/manufacturers/bigdog.png";
    case "Bimota":
      return "../images/manufacturers/bimota.svg";
    case "BMW":
      return "../images/manufacturers/bmw.png";
    case "Boss Hoss":
      return "../images/manufacturers/boss-hoss.png";
    case "Buell":
      return "../images/manufacturers/buell.png";
    case "California Scooter":
    case "CSC Motorcycles":
      return "../images/manufacturers/csc.png";
    case "Can-Am":
      return "../images/manufacturers/can-am.png";
    case "CF Moto":
      return "../images/manufacturers/cfmoto.webp";
    case "Cobra":
      return "../images/manufacturers/cobra.png";
    case "Ducati":
      return "../images/manufacturers/ducati.png";
    case "E-Ton":
      return "../images/manufacturers/e-ton.png";
    case "GAS GAS":
      return "../images/manufacturers/gasgas.webp";
    case "Harley-Davidson":
      return "../images/manufacturers/harley.webp";
    case "Hero":
    case "Hero Honda":
      return "../images/manufacturers/hero.webp";
    case "Honda":
      return "../images/manufacturers/honda.png";
    case "Husqvarna":
      return "../images/manufacturers/husqvarna.png";
    case "Hyosung":
      return "../images/manufacturers/hyosung.webp";
    case "Ice Bear":
      return "../images/manufacturers/ice-bear.jpg";
    case "Indian":
      return "../images/manufacturers/indian.png";
    case "Johnny Pag":
      return "../images/manufacturers/johnny-pag.webp";
    case "Kayo":
      return "../images/manufacturers/kayo.webp";
    case "Kawasaki":
      return "../images/manufacturers/kawasaki.png";
    case "KTM":
      return "../images/manufacturers/ktm.png";
    case "Kymco":
      return "../images/manufacturers/kymco.png";
    case "Lehman":
      return "../images/manufacturers/lehman.ico";
    case "Moto Guzzi":
      return "../images/manufacturers/motoguzzi.png";
    case "MV Agusta":
      return "../images/manufacturers/mvaugusta.png";
    case "Norton":
      return "../images/manufacturers/norton.png";
    case "Polaris":
      return "../images/manufacturers/polaris.png";
    case "Royal":
      return "../images/manufacturers/royal.png";
    case "Sherco":
      return "../images/manufacturers/sherco.png";
    case "Suzuki":
      return "../images/manufacturers/suzuki.webp";
    case "Sym":
      return "../images/manufacturers/sym.png";
    case "Tank Sports":
      return "../images/manufacturers/tank-sports.avif";
    case "TGB":
      return "../images/manufacturers/tgb.png";
    case "TM Racing":
      return "../images/manufacturers/tmracing.png";
    case "Triumph":
      return "../images/manufacturers/triumph.png";
    case "Ural":
      return "../images/manufacturers/ural.png";
    case "Vespa":
      return "../images/manufacturers/vespa.png";
    case "Victory":
      return "../images/manufacturers/victory.png";
    case "Yamaha":
      return "../images/manufacturers/yamaha.png";
    case "Zero":
      return "../images/manufacturers/zero.png";
    case "Zongshen":
      return "../images/manufacturers/zongshen.png";
    default:
      return "";
  }
};
