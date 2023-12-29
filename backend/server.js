// server
const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hi!!!!");
});

app.get("/api/items", (req, res) => {
  res.json({ a: 123 });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}........`);
});
