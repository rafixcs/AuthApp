import { RegisterAccountModel } from "../registerAccount";

export interface RegisterAccountRepository {
    create(account: RegisterAccountModel) : Promise<void>;
}
