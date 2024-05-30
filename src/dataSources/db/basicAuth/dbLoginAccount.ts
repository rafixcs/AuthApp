import { LoginAccount } from "../../../usecases/basicAuth/loginAccount";
import { LoginAccountRepository } from "../../../usecases/basicAuth/repository/loginAccountRepository";
import { AccountLoginModel } from "../../../usecases/basicAuth/repository/models/account.model";

export class DbLoginAccount implements LoginAccount {
  constructor(private readonly loginAccountRepository: LoginAccountRepository) {}
  login(account: AccountLoginModel): Promise<AccountLoginModel> {
    const loginAccount = this.loginAccountRepository.login(account);
    return loginAccount;
  }
}
