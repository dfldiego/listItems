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
import { itemsNotFoundError } from "./items.error";
import { DataStructure, Item } from "./items.interface";

/**
 * Given a query, we return the information as requested in the challenge.
 * @param {string} q - a query
 * @returns {Promise<DataStructure>} A promise with specific structure
 */
export const mercadolibreApiClientSearch = async (
  query: string
): Promise<DataStructure> => {
  const responseApiClient = await getItemsByQueryAPI(query);
  const items: Item[] = getItems(responseApiClient.results);

  if (responseApiClient.results.length === 0) {
    const errorData = itemsNotFoundError();
    throw new Error(errorData.error.internalMessage);
  }

  const categories: string[] | [] = getPathFromRootCategories(
    responseApiClient.filters
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
