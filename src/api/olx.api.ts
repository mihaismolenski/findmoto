import { shopApiFunc, ShopResult } from "../types/shop-result";

interface OlxParam {
    key: string;
    name: string;
    type: string;
    value: {
        key: string;
        label: number;
        currency: number;
    }
}

interface OlxPhoto {
    link: string;
    width: string;
    height: string;
}

interface OlxSearchItem {
    title: string;
    url: string;
    params: OlxParam[];
    photos: OlxPhoto[];
    description: string;
}

interface OlxSearchResult {
    data: OlxSearchItem[];
}

export const olxGetListings: shopApiFunc = (
  search: string
): Promise<ShopResult[]> => {
  const apiEndpoint = `https://www.olx.ro/api/v1/offers/?offset=0&limit=40&query=${search}&filter_refiners=spell_checker&facets=%5B%7B%22field%22%3A%22region%22%2C%22fetchLabel%22%3Atrue%2C%22fetchUrl%22%3Atrue%2C%22limit%22%3A30%7D%5D`;

  return fetch(apiEndpoint)
    .then((response) => response.json())
    .then((json: OlxSearchResult) => {
      console.log(json);

      return json.data.map(r => {
        return {
            price: r.params.find(p => p.key === "price")?.value || "-",
            url: r.url,
            description: r.description,
            photos: r.photos.map(ph => ph.link.replace("width", ph.width.toString()).replace("height", ph.height.toString()))
        } as ShopResult
      }).filter(l => Number(l.price) > 200);
    });
};
