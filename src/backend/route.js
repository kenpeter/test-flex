const cors = require("cors");
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

function server() {
  const server = express();

  server.use(cors());
  server.use(bodyParser.json());

  server.get("/detail", (req, res) => {
    const data = require("./detail.json");
    res.status(200).jsonp(data);
  });

  server.post("/agree", (req, res) => {
    try {
      const agree = req.body.agree;
      const filePath = path.resolve(__dirname, "./agree.json");
      let data = JSON.parse(fs.readFileSync(filePath));
      data.agree = agree;

      // * If I remove it or change it to a delay loop, no net work err
      // * fs.writeSync or fs.writeFileSync network cause err
      fs.writeFileSync(filePath, JSON.stringify(data));

      res.status(200).jsonp({ success: true });
    } catch (error) {
      throw new Error("error", error);
    }
  });

  return server;
}

module.exports = server;
