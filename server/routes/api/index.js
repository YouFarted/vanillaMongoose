import path from "path";
import express from "express";
import {router as usersRoutes} from "./usersApi.js"
import {router as utilsRoutes} from "./utilsApi.js"

export let router = express.Router();

router.use("/users", usersRoutes);
router.use("/utils", utilsRoutes);

export default {router};