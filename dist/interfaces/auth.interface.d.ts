export interface IUserAuth {
    email: string;
    user?: string;
    phone_number: string;
    password: string;
    login_Date?: Date;
}
export interface IUserToken {
    user: string;
    access_token: string;
    refresh_token: string;
}
export interface IStoreToken {
    store: string;
    access_token: string;
}
export interface ITokenPayload {
    user?: string;
    email: string;
    phone_number: string;
    user_type?: string;
    login_Date?: Date;
}
export interface StorePayload {
    store?: string;
    store_owner: string;
    store_name: string;
    store_contact_number: string;
    store_whatsapp_number: string;
    country: string;
    address: string;
    post_code: string;
}
export interface IAuth {
    access_token: string;
    refresh_token: string;
    user: string;
}
