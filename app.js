const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.send("<h1>Hello express</h1>");
});

app.listen(3000);
