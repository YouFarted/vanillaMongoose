import express from "express";
import * as userController from "../../controllers/userController.js"

export let router = express.Router()
router.route("/")
.get(userController.findAll)
.post(userController.create)

export default {};