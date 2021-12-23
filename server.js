const express = require("express");
const { error } = require("console");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static("./public"));

// Define applcation routes
app.get("/", function (req, res) {
  console.log("Loaded /");
});

app.listen(port, () => {
  console.log(`gamma-wrapper-panel listening at http://localhost:${port}`);
});
