import { AccountModel, ConsultAccountModel } from "./repository/models/account.model";

export interface GetAccount {
    get(account: ConsultAccountModel) : Promise<AccountModel>; 
}
