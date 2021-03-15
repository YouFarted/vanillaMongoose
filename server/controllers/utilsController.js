import * as db from "../models/index.js"

export async function seed(req, res)
{
    await db.User.deleteMany({});
    await db.User.create({firstName:"firstName1", lastName:"lastName1"})
    await db.User.create({firstName:"firstName2", lastName:"lastName2"})
    res.end("done seeding");    
}

export default {};