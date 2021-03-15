import express from "express";
import path from "path";
//import dotenv from "dotenv";
//import mongoose from 'mongoose';
//import * as db from './models/index.js';
//import { routes } from "./routes/index.js";

//dotenv.config({path:path.resolve(process.cwd(), "..", '.env')});

const port = process.env.PORT || 3001;

// I user a --production argument to server.js to decide if we're running the
//  built express client from the build folder.
// if you're not production, a dedicated local server is hosting express on port 3000
let production = process.argv.find(el => el == "--production");
//production = 1;

if(production) {
    console.log("We're running in production");
} else {
    console.log("We're NOT running in production");
}

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(routes);

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

/*
// uncomment this section to watch the database connectivity happen

db.Book.create({author: "author", title:"title"})
.then(newBook => {
    console.log("!!!!!!! NEW BOOK",newBook);
}) 
db.Shoe.create({make:"Nike", model:"Air"})
.then(newShoe => {
    console.log("!!!!!!! NEW Shoe",newShoe);
})
*/

/*
db.User.create({firstName:"firstNameTest", lastName:"lastNameTest"})
.then(newUser => {
    console.log("new user", newUser);
})


let clientstaticpath = "";

// needed for ES6 modules as configured in package.json where "type": "module"
// __dirname doesn't work with ES6 modules
    // https://github.com/nodejs/node/issues/28114
const __dirname = path.dirname(import.meta.url.substring(7));

if(production) {
    clientstaticpath = path.join(__dirname, "..", "build", "clientbuild");
}

if(clientstaticpath != "") {
    app.use(express.static(clientstaticpath));
*/

//app.use("/nonReact",express.static(path.join(__dirname,"nonReact_publics")));
app.get("/", (req, res) => {
    res.end("At least the server is running");
})

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

