import {
  ID_NOT_FOUND,
  QUERY_EMPTY_ERROR,
  ITEMS_NOT_FOUND,
} from "../../constants/error";

export const queryEmptyError = (message?: string) => {
  return {
    ok: false,
    error: {
      userMessage: "error.queryEmptyError",
      internalMessage: message || QUERY_EMPTY_ERROR,
      code: 400,
      moreInfo: "",
    },
  };
};

export const idNotFoundError = (message?: string) => {
  return {
    ok: false,
    error: {
      userMessage: "error.idNotFoundError",
      internalMessage: message || ID_NOT_FOUND,
      code: 400,
      moreInfo: "",
    },
  };
};

export const itemsNotFoundError = (message?: string) => {
  return {
    ok: false,
    error: {
      userMessage: "error.itemsNotFoundError",
      internalMessage: message || ITEMS_NOT_FOUND,
      code: 400,
      moreInfo: "",
    },
  };
};
