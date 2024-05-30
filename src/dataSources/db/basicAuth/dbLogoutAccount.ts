import { LogoutAccount } from "../../../usecases/basicAuth/logoutAccount";
import { AccountLogoutModel } from "../../../usecases/basicAuth/repository/models/account.model";
import { LogoutAccountRepository } from "../../../usecases/basicAuth/repository/logoutAccountRepository";


export class DbLogoutAccount implements LogoutAccount {
  constructor(private readonly logoutAccountRepository: LogoutAccountRepository) {}
  async logout(account: AccountLogoutModel): Promise<void> {
    await this.logoutAccountRepository.logout(account);
  }
}
