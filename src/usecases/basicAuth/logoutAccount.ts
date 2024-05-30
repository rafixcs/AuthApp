import { AccountLogoutModel } from "./repository/models/account.model";

export interface LogoutAccount {
    logout(account: AccountLogoutModel) : Promise<void>;
}
