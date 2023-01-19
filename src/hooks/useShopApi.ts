import { olxGetListings } from "../api/olx.api";

export const useShopApi = () => {
  const region = "";

  switch (region) {
    default:
      return [olxGetListings];
  }
};

export default useShopApi;
