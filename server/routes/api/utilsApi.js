import express from "express";
import * as utilsController from "../../controllers/utilsController.js"

export let router = express.Router()
router.route("/seed")
.get(utilsController.seed)


export default {};