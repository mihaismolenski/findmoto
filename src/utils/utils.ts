import { MotorcycleData } from "../types/motorcycle-data";

export const getTypeName = (type: string) => {
    switch (type) {
        case "Allround": return "Adventure";
        case "Unspecified category": return "Other";
        case "Prototype / concept model": return "Prototype / concept";
        default: return type;
    }
}

export const shuffle = (array: MotorcycleData[]) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}