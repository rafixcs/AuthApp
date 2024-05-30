import { AccountLoginModel } from "./repository/models/account.model";

export interface LoginAccount {
  login(account: AccountLoginModel) : Promise<AccountLoginModel>;
}
