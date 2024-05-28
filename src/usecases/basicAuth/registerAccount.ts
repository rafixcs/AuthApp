
export interface RegisterAccountModel {
    email: string;
    username: string;
    pass: string;
}

export interface RegisterAccount { 
    create(account: RegisterAccount) : Promise<void>;
}
