import { GetAccount } from "../../../usecases/basicAuth/getAccount";
import { GetAccountRepository } from "../../../usecases/basicAuth/repository/getAccountRepository";
import { ConsultAccountModel, AccountModel } from "../../../usecases/basicAuth/repository/models/account.model";

export class DbGetAccount implements GetAccount {
  constructor(private readonly getAccountRepository: GetAccountRepository) {}
  async get(account: ConsultAccountModel): Promise<AccountModel> {
    const _account = await this.getAccountRepository.get(account);
    return _account;
  }
}
