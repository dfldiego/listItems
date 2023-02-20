import express from "express";
import { itemsRoutes } from "../apiServices/items/items.routes";

export const appRoutes = express.Router();

appRoutes.use("/api/items", itemsRoutes);
