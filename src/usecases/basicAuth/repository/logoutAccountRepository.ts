import { AccountLogoutModel } from "./models/account.model";

export interface LogoutAccountRepository {
  logout(account: AccountLogoutModel) : Promise<void>;
}
