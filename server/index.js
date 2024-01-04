const express = require("express");
const route = require("./routes/routes.js");
const cors = require("cors");
const { urlencoded } = require("body-parser");
const app = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use("/api", route);

app.listen(9000, () => {
  console.log("Hello world");
});
