import { AccountModel } from "./repository/models/account.model";

export interface RegisterAccount { 
    create(account: AccountModel) : Promise<void>;
}
