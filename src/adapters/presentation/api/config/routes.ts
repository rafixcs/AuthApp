import { Express, Router } from "express";
import taskRoutes from "../routes/taskRoutes";

export default (app: Express) => {
    const router = Router();
    taskRoutes(router);
    app.use("/api", router);
}
