import { AccountModel, ConsultAccountModel } from "./models/account.model";

export interface GetAccountRepository {
    get(account: ConsultAccountModel): Promise<AccountModel>;
}
