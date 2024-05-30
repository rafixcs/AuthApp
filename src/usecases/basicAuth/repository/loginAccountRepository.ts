import { AccountLoginModel } from "./models/account.model";

export interface LoginAccountRepository {
    login(account: AccountLoginModel) : Promise<AccountLoginModel>;
}
