const express = require("express");
const candidates = express.Router();

const candidates_controller = require("../controllers/candidatesController");

candidates.get("/get", candidates_controller.getCandidateds);

module.exports = candidates;