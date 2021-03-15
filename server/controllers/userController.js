import * as db from "../models/index.js"

export function findAll(req, res) {
    db.User.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
}

export function create(req, res) {
  db.User.create(req.body)
  .then(dbModel => res.json(dbModel))
}

export default {};