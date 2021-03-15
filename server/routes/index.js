import path from "path";
import express from "express";

export const routes = express.Router();
import {router as apiRouter} from "./api/index.js";

// API Routes
routes.use("/api", apiRouter);

const __dirname = path.dirname(import.meta.url.substring(7));
// If no API routes are hit, don't send the React app???
// TODO DO IT
/*
routes.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});*/

export default {};