import express from "express";
import { publicRouter } from "./routes/routes.js";
import RedisConfig from "./config/config.js";

const app = express();

app.use(publicRouter);

// consume from channel redis
const redisconfig = new RedisConfig();
redisconfig.consume("mazufik21", (message) => {
  console.log("Received message: ", message);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080!");
});
