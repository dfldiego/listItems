import {
  getItemsByQueryAPI,
  getItemAPI,
  getItemDescriptionAPI,
} from "../../config/api";
import {
  getItems,
  getItem,
  getPathFromRootCategories,
} from "../../utils/items";
import { DataStructure, Item } from "./items.interface";

/**
 * Given a query, we return the information as requested in the challenge.
 * @param {string} q - a query
 * @returns {Promise<DataStructure>} A promise with specific structure
 */
export const mercadolibreApiClientSearch = async (
  q: string
): Promise<DataStructure> => {
  const responseApiClient = await getItemsByQueryAPI(q);
  const items: Item[] = getItems(responseApiClient.data.results);
  const categories: string[] = getPathFromRootCategories(
    responseApiClient.data.filters[0]
  );

  return {
    categories,
    items,
  };
};

/**
 * given an ID, we return the Item related to it.
 * @param {string} id - id of item
 * @returns {Promise<DataSItemtructure>} A promise with specific structure item
 */
export const getItemByIdService = async (id: string): Promise<Item> => {
  const [itemDataResponse, itemDataDescriptionResponse] = await Promise.all([
    getItemAPI(id),
    getItemDescriptionAPI(id),
  ]);
  const { author, item }: Item = getItem(
    itemDataResponse,
    itemDataDescriptionResponse
  );
  return {
    author,
    item,
  };
};
