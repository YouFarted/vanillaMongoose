import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

let clientstaticpath = "";

// needed for ES6 modules as configured in package.json where "type": "module"
const __dirname = path.dirname(import.meta.url.substring(8));
console.log(`__dirname = ${__dirname}`);

if(process.env.NODE_ENV == "production") {
    clientstaticpath = path.join(__dirname, "..", "build", "clientbuild");
    // __dirname doesn't work with ES6 modules
    // https://github.com/nodejs/node/issues/28114
}
else {
    console.log(`env.NODE_ENV is ${process.env.NODE_ENV}.  Express won't host the client site.`);
}

console.log(`clientstaticpath is set to '${clientstaticpath}'`)

if(clientstaticpath != "") {
    app.use(express.static(clientstaticpath));
}

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
