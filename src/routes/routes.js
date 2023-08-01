import express from "express";
import bodyParser from "body-parser";
import controllers from "../controller/controller.js";

const jsonParser = bodyParser.json();
const publicRouter = new express.Router();
publicRouter.post("/api/send", jsonParser, controllers.sendMessageToRedis);

export { publicRouter };
