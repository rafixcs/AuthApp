import { Express, Router } from "express";
import taskRoutes from "../routes/basicAuthRoutes";

export default (app: Express) => {
  const router = Router();
  taskRoutes(router);
  app.use("/api", router);
};
