import { Response } from "express";

export const handleHttp = (res: Response, error: any) => {
  res.status(500).send({ ok: false, msg: "" + error });
};
