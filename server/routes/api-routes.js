KILL THIS FILE

import express from "express";
import sampleDbRoute from "./sampleDbRoute.js";

function doThing(req, res) {
    res.json(
        {
            k0: 5,
            k1: "five"
        })
}

function configSubRouteToDoThing(apiRouter) {
    apiRouter.get("/eh", doThing)
}

export default function configApiRoutes(app) {
    // connect indivitual functions to work under a new Router and pass it back
    let apiRouter = express.Router()
    configSubRouteToDoThing(apiRouter)

    app.use("/api", apiRouter)

    return;
}