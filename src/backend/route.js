const cors = require("cors");
const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

function server() {
  const server = express();

  server.use(cors());
  server.use(bodyParser.json());

  server.get("/api/detail/:personId", (req, res) => {
    const data = require("./person.json");
    res.status(200).jsonp(data);
  });

  server.post("/api/agree", (req, res) => {
    try {
      const agree = req.body.agree;
      const filePath = path.resolve(__dirname, "./agree.json");
      let data = JSON.parse(fs.readFileSync(filePath));
      data.agree = agree;

      fs.writeFileSync(filePath, JSON.stringify(data));
      res.status(200).jsonp({ success: true });
    } catch (error) {
      throw new Error("error", error);
    }
  });

  return server;
}

module.exports = server;
