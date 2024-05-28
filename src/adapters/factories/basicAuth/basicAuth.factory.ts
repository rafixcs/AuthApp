import { BasicAuthController } from "../../controllers/basicAuth/basicAuth";
import { Controller } from "../../interfaces/controller";
import { basicAuthValidationFactory } from "./validations/basicAuthValidation.factory";

export const basicAuthFactory = (): Controller => {
  const validation = basicAuthValidationFactory();
  const controller = new BasicAuthController(validation);
  return controller;
};
