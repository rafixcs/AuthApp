import { AccountMongoRepository } from "../../dataSources/db/basicAuth/repository/accountMongoRepository";
import { BcryptHashing } from "../../services/encript/bcrypt";

export const accountMongoFactory = () : AccountMongoRepository => {
  const hashService = new BcryptHashing();
  const accountMongoRepo = new AccountMongoRepository(hashService);
  return accountMongoRepo;
};
