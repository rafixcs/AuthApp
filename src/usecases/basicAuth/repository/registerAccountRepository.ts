import { AccountModel } from "./models/account.model";

export interface RegisterAccountRepository {
    create(account: AccountModel) : Promise<void>;
}
