import express from "express";
import userController from "../controller/userController";
const router = express.Router();

/**
 *
 * @param {*} app : express app
 */

const initWebRoutes = (app) => {
  router.get("/", userController.index);

  router.get("/user", userController.index);
  router.post("/user", userController.create);
  router.delete("/user/:id", userController.destroy);
  router.get("/user/:id", userController.edit);
  router.put("/user/:id", userController.update);

  return app.use("/", router);
};

export default initWebRoutes;
