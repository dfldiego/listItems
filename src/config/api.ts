import axios from "axios";
export const THUMBNAIL_PATH = "http://http2.mlstatic.com";

export const getItemsByQueryAPI = async (q: string) => {
  const itemsUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${q}`;
  const response = await axios.get(itemsUrl);
  return response.data;
};

export const getItemAPI = async (id: string) => {
  const itemUrl = `https://api.mercadolibre.com/items/${id}`;
  const response = await axios.get(itemUrl);
  return response.data;
};

export const getItemDescriptionAPI = async (id: string) => {
  const descriptionUrl = `https://api.mercadolibre.com/items/${id}/description`;
  const response = await axios.get(descriptionUrl);
  return response.data;
};
