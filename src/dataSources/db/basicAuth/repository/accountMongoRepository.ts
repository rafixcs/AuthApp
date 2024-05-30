import { Collection } from "mongoose";
import { MongoManager } from "../../../../adapters/presentation/api/config/mongoManager";
import { AccountAlreadyLogged } from "../../../../adapters/presentation/api/errors/accountAlreadyLogged";
import { AccountNotFound } from "../../../../adapters/presentation/api/errors/accountNotFound";
import { GetAccountRepository } from "../../../../usecases/basicAuth/repository/getAccountRepository";
import { LoginAccountRepository } from "../../../../usecases/basicAuth/repository/loginAccountRepository";
import { LogoutAccountRepository } from "../../../../usecases/basicAuth/repository/logoutAccountRepository";
import { ConsultAccountModel, AccountModel, AccountLoginModel, AccountLogoutModel } from "../../../../usecases/basicAuth/repository/models/account.model";
import { RegisterAccountRepository } from "../../../../usecases/basicAuth/repository/registerAccountRepository";

const BASIC_ACCOUNT_COLLECTION = "basic_accounts";
const LOGIN_ACCOUNT_COLLECTION = "login_accounts";

export class AccountMongoRepository implements 
  GetAccountRepository, 
  RegisterAccountRepository,
  LoginAccountRepository,
  LogoutAccountRepository {
  
  async logout(account: AccountLogoutModel): Promise<void> {
    const collection = MongoManager.getInstance().getCollection(LOGIN_ACCOUNT_COLLECTION);

    account.isLoged = true;

    const loggedAccount = await collection.findOne(account);
    if(!loggedAccount) throw new Error("Account not loged");

    const updateAccount = {
      isLoged: false,
      logoutDate: new Date()
    };
    
    const { modifiedCount } = await collection.updateOne(
      {_id: loggedAccount._id},
      { $set: updateAccount});

    if(modifiedCount === 0) throw new Error("Failed to logout");
  }
  
  async login(account: AccountLoginModel): Promise<AccountLoginModel> {
    const loginCollection = MongoManager.getInstance().getCollection(LOGIN_ACCOUNT_COLLECTION);

    try {
      const consult: ConsultAccountModel = {
        username: account.username
      };

      const accountExists = await this.get(consult);
    } catch (error) {
      if(error instanceof Error) {
        throw error;
      }
    }

    const query: AccountLoginModel = {
      username: account.username,
      email: account.email,
      isLoged: true
    };

    const loginById = await loginCollection.findOne(query);

    if(loginById) throw new AccountAlreadyLogged();

    account.loginDate = new Date();
    account.isLoged = true;

    const { insertedId } = await loginCollection.insertOne(account);
    const accountById = await loginCollection.findOne({_id: insertedId});
    if(!accountById) throw new Error("Login not created");

    return account;
  }

  async get(account: ConsultAccountModel): Promise<AccountModel> {
    const collection = MongoManager.getInstance().getCollection(BASIC_ACCOUNT_COLLECTION);

    const query: ConsultAccountModel = {
      username: account.username
    };

    if(account.email) {
      query.email = account.email;
    }
    
    const accountById = await collection.findOne(query);
    if(!accountById) throw new AccountNotFound(account.username);

    const accountRepo : AccountModel = {
      email: accountById.email,
      username: accountById.username,
      pass: accountById.pass
    };

    return accountRepo;
  }
  
  async create(account: AccountModel): Promise<void> {
    const collection = MongoManager.getInstance().getCollection(BASIC_ACCOUNT_COLLECTION);
    const { insertedId } = await collection.insertOne(account);
    const accountById = await collection.findOne({_id: insertedId});
    if(!accountById) throw new Error("Account not created");
  }

}
