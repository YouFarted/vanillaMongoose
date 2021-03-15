import path from "path";
import express from "express";
import {router as usersRoutes} from "./usersApi.js"

export let router = express.Router();

router.use("/users", usersRoutes);

export default {router};