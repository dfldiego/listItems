import {
  ApiItem,
  Filters,
  Item,
  ItemDescription,
} from "../apiServices/items/items.interface";
import { THUMBNAIL_PATH } from "../config/api";

type Price = {
  amount: number;
  decimals: number;
};

/**
 * Given a value, now return its integer and decimal parts.
 * @param price example: 5.50
 * @returns {Price} An object with amount and decimals
 */
export const getAmountAndDecimals = (price: number): Price => {
  const amount = Math.floor(price);
  const decimals = price - Math.floor(price);
  return {
    amount,
    decimals,
  };
};

/**
 * We built a new data structure based on the 'result' property from the MercadoLibre API.
 * @param {ApiItem[]} list - An array of items from Meli Api
 * @returns {Item[]} A list of items
 */
export const getItems = (list: ApiItem[]): Item[] => {
  const listItems: Item[] = list.map((element: ApiItem) => {
    const {
      id,
      title,
      currency_id,
      price,
      thumbnail_id,
      condition,
      shipping: { free_shipping },
      seller: { nickname },
      seller_address: {
        state: { name },
      },
    } = element;
    const { amount, decimals } = getAmountAndDecimals(price);
    const picture = `${THUMBNAIL_PATH}/D_${thumbnail_id}-O.jpg`;

    return {
      author: {
        nickname,
      },
      item: {
        id,
        title,
        price: {
          currency: currency_id,
          amount,
          decimals,
        },
        picture,
        condition,
        free_shipping,
        sellerState: name,
      },
    };
  });

  return listItems;
};

/**
 * get list of string of categories about path from root
 * @param {array} list
 * @returns {string[]} A list of categories
 */
export const getPathFromRootCategories = (
  list: Filters[] | []
): string[] | [] => {
  if (list.length === 0) return [];

  const pathFromRoot = list[0].values[0].path_from_root.map(
    (category) => category.name
  );
  return pathFromRoot;
};

/**
 * We built a new data structure based on the 'result' property from the MercadoLibre API.
 * @param {ApiItem} itemData an item from Meli Api by id
 * @param {ApiItem[]} itemDataDescription - description of item from Meli Api
 * @returns {Item} A structured item
 */
export const getItem = (
  itemData: ApiItem,
  itemDataDescription: ItemDescription
): Item => {
  const {
    id,
    title,
    currency_id,
    price,
    thumbnail_id,
    condition,
    shipping: { free_shipping },
    sold_quantity,
  } = itemData;
  const { plain_text } = itemDataDescription;
  const { amount, decimals } = getAmountAndDecimals(price);
  const picture = `${THUMBNAIL_PATH}/D_${thumbnail_id}-O.jpg`;

  return {
    author: {
      nickname: null,
    },
    item: {
      id,
      title,
      price: {
        currency: currency_id,
        amount,
        decimals,
      },
      picture,
      condition,
      free_shipping,
      sold_quantity,
      description: plain_text,
    },
  };
};
