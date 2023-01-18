import { useEffect, useState } from "react";

export interface ImagesProps {
    search: string;
    count: number;
}

interface GoogleSearchApiResponse {
    items: {
        pagemap: {
            cse_image: { src: string; }[]
        }
    }[]
}

export const Images = ({ search, count }: ImagesProps) => {
    const [images, setImages] = useState<string[]>([]);
    const [showImages, setShowImages] = useState<boolean[]>([]);

    useEffect(() => {
        setImages([]);
        const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBqLE1FahERvruoWOvZgGIX-e0w5I-dA9U&cx=5299f5c9a1ea1470b&q=${search}`;
        fetch(url)
            .then(response => response.json())
            .then((response: GoogleSearchApiResponse) => {
                setImages(response
                    .items
                    .map(item => item?.pagemap?.cse_image && item?.pagemap?.cse_image[0]?.src)
                    .filter(path => path
                        && !path.includes("static.kbb.com")
                        && !path?.includes("cdn.cycletrader.com")
                        && !path.includes("cdn.atvtrader.com")
                        && !path.includes("ilmberger-carbon.de")));
                setShowImages(Array(response.items.length).fill(true));
            });
    }, [search, count]);



    return <div className="images">
        {images.slice(0, count).map((img, index) => {
            return <img src={img} width="auto" height="150px" alt="moto" key={index} onError={() => setShowImages(showImages.splice(index, 1, false))} style={{ display: showImages[index] ? "unset" : "none" }} />;
        })}
        {images.length === 0 && <div>No images found.</div>}
    </div>
}

export default Images;