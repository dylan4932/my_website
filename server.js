"use strict";
const bodyParser = require("body-parser");
const log = console.log;
const http = require("http");
const https = require("https");

const express = require("express");


const fs = require("fs")

const app = express();
const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(path.join(__dirname, "/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(path.join(__dirname, "/build/index.html"));
});




// /*************************************************/
// // https server listening...

const httpsOption = {
    key: fs.readFileSync("./https/dylan4932.com.key"),
    cert: fs.readFileSync("./https/dylan4932.com_bundle.crt")
}

http.createServer(app).listen(80);
https.createServer(httpsOption, app).listen(443, () => {
    log(`Listening on port ${443}...`);
});


