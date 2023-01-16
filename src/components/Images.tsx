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

    useEffect(() => {
        setImages([]);
        const url = `https://www.googleapis.com/customsearch/v1?key=AIzaSyBqLE1FahERvruoWOvZgGIX-e0w5I-dA9U&cx=5299f5c9a1ea1470b&q=${search}`;
        fetch(url)
            .then(response => response.json())
            .then((response: GoogleSearchApiResponse) => {
                setImages(response.items.map(item => item?.pagemap?.cse_image && item?.pagemap?.cse_image[0]?.src));

        });
    }, [search, count]);



    return <div className="images">
        {images.filter(img => !!img).slice(0, count).map(img => {
            return <img src={img} width="auto" height="150px" alt="moto" />;
        })}
    </div>
}

export default Images;