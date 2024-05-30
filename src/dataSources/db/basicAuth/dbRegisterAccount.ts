import { RegisterAccount } from "../../../usecases/basicAuth/registerAccount";
import { AccountModel } from "../../../usecases/basicAuth/repository/models/account.model";
import { RegisterAccountRepository } from "../../../usecases/basicAuth/repository/registerAccountRepository";

export class DbRegisterAccount implements RegisterAccount {
  constructor(private readonly registerAccountRepository: RegisterAccountRepository) {}
  async create(account: AccountModel): Promise<void> {
    await this.registerAccountRepository.create(account);
  }
}
