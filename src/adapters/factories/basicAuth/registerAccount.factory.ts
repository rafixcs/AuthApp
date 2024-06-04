import { DbGetAccount } from "../../../dataSources/db/basicAuth/dbGetAccount";
import { DbRegisterAccount } from "../../../dataSources/db/basicAuth/dbRegisterAccount";
import { AccountMongoRepository } from "../../../dataSources/db/basicAuth/repository/accountMongoRepository";
import { RegisterAccountController } from "../../controllers/basicAuth/registerAccount";
import { Controller } from "../../interfaces/controller";
import { accountMongoFactory } from "../accountMongo.factory";
import { registerAccountValidationFactory } from "./validations/registerAccountValidation.factory";

export const registerAccountFactory = (): Controller => {
  const validator = registerAccountValidationFactory();
  const accountMongoRepository = accountMongoFactory();
  const getAccount = new DbGetAccount(accountMongoRepository);
  const registerAccount = new DbRegisterAccount(accountMongoRepository);
  return new RegisterAccountController(validator, getAccount, registerAccount);
};
