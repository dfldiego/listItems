import axios from "axios";
export const THUMBNAIL_PATH = "http://http2.mlstatic.com";

export const getItemsByQueryAPI = (q: string) => {
  const itemsUrl = `${process.env.API_PATH}/search?q=${q}`;
  return axios.get(itemsUrl);
};

export const getItemAPI = async (id: string) => {
  const itemUrl = `${process.env.API_PATH_ITEMS_ID}/${id}`;
  const response = await axios.get(itemUrl);
  return response.data;
};

export const getItemDescriptionAPI = async (id: string) => {
  const descriptionUrl = `${process.env.API_PATH_ITEMS_ID}/${id}/description`;
  const response = await axios.get(descriptionUrl);
  return response.data;
};
