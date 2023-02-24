import { Request, Response } from "express";
import { handleHttp } from "../../utils/error.handle";
import {
  dataEmptyError,
  idNotFoundError,
  queryEmptyError,
} from "./items.error";
import {
  getItemByIdService,
  mercadolibreApiClientSearch,
} from "./items.service";

export const getItemsByQuery = async (req: Request, res: Response) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).send(queryEmptyError());
  }

  try {
    const response = await mercadolibreApiClientSearch(<string>q);
    if (!response.categories || !response.items) {
      return res.status(400).send(dataEmptyError());
    }
    res.status(200).send({ ok: true, response });
  } catch (error) {
    handleHttp(res, error);
  }
};

export const getItemById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).send(idNotFoundError());
  }

  try {
    const response = await getItemByIdService(<string>id);
    res.status(200).send({ ok: true, response });
  } catch (error) {
    handleHttp(res, error);
  }
};
