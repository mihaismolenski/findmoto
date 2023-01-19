import { useEffect, useState } from "react";

import useShopApi from "../hooks/useShopApi";
import { ShopResult } from "../types/shop-result";

export interface ListingsProps {
  search: string;
  count: number;
}

export const Listings = ({ search, count }: ListingsProps) => {
  const [service] = useShopApi();
  const [listings, setListings] = useState<ShopResult[]>([]);

  useEffect(() => {
    service(search).then((r: ShopResult[]) => {
      setListings(r);
    });
  }, [search, service]);

  return (
    <div className="listings">
      {listings.slice(0, count).map((l, index) => {
        return (
          <div key={index}>
            {l.price}
            <img src={l.photos[0]} alt="listing" />
          </div>
        );
      })}
    </div>
  );
};

export default Listings;
