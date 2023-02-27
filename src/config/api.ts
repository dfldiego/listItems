import axios from "axios";
export const THUMBNAIL_PATH = "http://http2.mlstatic.com";

export const getItemsByQueryAPI = async (
  q: string,
  limit?: string,
  offset?: string
) => {
  let url = `https://api.mercadolibre.com/sites/MLA/search?q=${q}`;
  if (offset) {
    url = `${url}&offset=${offset}`;
  }
  if (limit) {
    url = `${url}&limit=${limit}`;
  }
  const response = await axios.get(url);
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
