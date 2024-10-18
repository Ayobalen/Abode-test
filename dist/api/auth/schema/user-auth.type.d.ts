export declare class UserAuthType {
    _id: string;
    email: string;
    phone_number?: string;
    password: string;
    confirm_password?: string;
    previousPasswords?: string[];
    deleted: boolean;
    userAuthId?: string;
    accessToken: string;
    refreshToken: string;
}
