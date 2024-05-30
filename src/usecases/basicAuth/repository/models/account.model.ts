
export interface AccountModel {
    email: string;
    username: string;
    pass?: string;
}

export interface ConsultAccountModel {
    username: string;
    email?: string;
}

export interface AccountLoginModel {
    username: string;
    email: string;
    isLoged: boolean;
    loginDate?: Date;
    logoutDate?: Date;
}

export interface AccountLogoutModel {
    username: string;
    email?: string;
    isLoged?: boolean;
}
