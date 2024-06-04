import { DbGetAccount } from "../../../dataSources/db/basicAuth/dbGetAccount";
import { DbLoginAccount } from "../../../dataSources/db/basicAuth/dbLoginAccount";
import { AccountMongoRepository } from "../../../dataSources/db/basicAuth/repository/accountMongoRepository";
import { BcryptHashing } from "../../../services/encript/bcrypt";
import { BasicAuthController } from "../../controllers/basicAuth/basicAuth";
import { Controller } from "../../interfaces/controller";
import { accountMongoFactory } from "../accountMongo.factory";
import { basicAuthValidationFactory } from "./validations/basicAuthValidation.factory";

export const basicAuthFactory = (): Controller => {
  const accountMongoRepo = accountMongoFactory();
  const getAccount = new DbGetAccount(accountMongoRepo);
  const loginAccount = new DbLoginAccount(accountMongoRepo);
  const validation = basicAuthValidationFactory();
  const controller = new BasicAuthController(validation, getAccount, loginAccount);
  return controller;
};
