import { BasicAuthController } from "../controllers/basicAuth";
import { Controller } from "../interfaces/controller";

export const basicAuthFactory = (): Controller => {
  const controller = new BasicAuthController();
  return controller;
};
