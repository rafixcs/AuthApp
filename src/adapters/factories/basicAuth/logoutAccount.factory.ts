import { DbLogoutAccount } from "../../../dataSources/db/basicAuth/dbLogoutAccount";
import { AccountMongoRepository } from "../../../dataSources/db/basicAuth/repository/accountMongoRepository";
import { LogoutAccountController } from "../../controllers/basicAuth/logoutAccount.controller";
import { Controller } from "../../interfaces/controller";
import { accountMongoFactory } from "../accountMongo.factory";
import { logoutAccountValidationsFactory } from "./validations/logoutAccountValidation.factory";

export const logoutAccountFactory = (): Controller => {
  const validations = logoutAccountValidationsFactory();
  const mongoRepository = accountMongoFactory();
  const logoutAccount = new DbLogoutAccount(mongoRepository);
  const controller = new LogoutAccountController(validations, logoutAccount);
  return controller;
};
