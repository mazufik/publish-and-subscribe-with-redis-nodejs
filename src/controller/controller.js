import RedisConfig from "../config/config.js";

const sendMessageToRedis = async (req, res, next) => {
  try {
    const { message } = req.body;
    const redisConfig = new RedisConfig();
    redisConfig.produce("mazufik21", message);

    res.status(200).json({
      status: "OK!",
      message: "Message successfully send!",
    });
  } catch (e) {
    next(e);
  }
};

const controllers = { sendMessageToRedis };

export default controllers;
