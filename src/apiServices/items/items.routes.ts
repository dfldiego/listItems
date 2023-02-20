import express from "express";
import { getItemsByQuery, getItemById } from "./items.controller";

export const itemsRoutes = express.Router();

/**
 * @route   GET /items?q=:query
 * @desc    Get all items and categories by query
 */
itemsRoutes.get("/", getItemsByQuery);

/**
 * @route   GET /items/:id
 * @desc    Get item by id
 */
itemsRoutes.get("/:id", getItemById);
