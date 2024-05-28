import { RegisterAccountController } from "../../controllers/basicAuth/registerAccount";
import { Controller } from "../../interfaces/controller";
import { registerAccountValidationFactory } from "./validations/registerAccountValidation.factory";

export const registerAccountFactory = (): Controller => {
  const validator = registerAccountValidationFactory();
  return new RegisterAccountController(validator);
};
