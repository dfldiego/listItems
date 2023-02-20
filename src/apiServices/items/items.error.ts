import {
  ID_NOT_FOUND,
  DATA_EMPTY_ERROR,
  QUERY_EMPTY_ERROR,
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

export const dataEmptyError = (message?: string) => {
  return {
    ok: false,
    error: {
      userMessage: "error.dataEmptyError",
      internalMessage: message || DATA_EMPTY_ERROR,
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
