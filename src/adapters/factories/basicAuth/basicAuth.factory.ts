import { DbGetAccount } from "../../../dataSources/db/basicAuth/dbGetAccount";
import { DbLoginAccount } from "../../../dataSources/db/basicAuth/dbLoginAccount";
import { AccountMongoRepository } from "../../../dataSources/db/basicAuth/repository/accountMongoRepository";
import { BasicAuthController } from "../../controllers/basicAuth/basicAuth";
import { Controller } from "../../interfaces/controller";
import { basicAuthValidationFactory } from "./validations/basicAuthValidation.factory";

export const basicAuthFactory = (): Controller => {
  const accountMongoRepo = new AccountMongoRepository();
  const getAccount = new DbGetAccount(accountMongoRepo);
  const loginAccount = new DbLoginAccount(accountMongoRepo);
  const validation = basicAuthValidationFactory();
  const controller = new BasicAuthController(validation, getAccount, loginAccount);
  return controller;
};
