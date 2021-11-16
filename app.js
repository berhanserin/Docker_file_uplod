const express = require("express");
const path = require("path");
const multer = require("multer");
const app = express();

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "public");
  },
  filename: function (req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });

app.post("/", upload.single("files"), (req, res) => {
  res.send({ file: req.file.filename });
});

app.use("/", express.static(__dirname + "/public"));

app.listen(3000, () => {
  console.log("Server Aktif");
});
