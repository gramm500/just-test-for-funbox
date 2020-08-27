const port = process.env.PORT || 3000;
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const app = express();
app.set("view engine", "ejs");
const upload = multer();
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("home");
});

app.listen(port, function () {
    console.log("server running on port 3000")
})