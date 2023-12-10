const express = require("express");
const authRouter = require("./auth.router");
const tasksRouter = require("./tasks.router");
const routerApi = (app) => {
  const router = express.Router();

  app.use("/v1/api", router);
  router.use("/auth", authRouter);
  router.use("/tasks", tasksRouter);
};
module.exports = routerApi;
