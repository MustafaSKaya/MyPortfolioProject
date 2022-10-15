const express = require("express");
const app = express();
const path = require('path')
const PORT = 8080; // default port 8080

app.use(express.static(path.join(__dirname,"../")));

app.get("/", (request, response) => {
    response.sendFile('index.html', {
        root: path.join(__dirname, '../')
    })
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

