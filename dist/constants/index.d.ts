export declare const PHONE_NUMBER_MAX = 14;
export declare const MIN_PASSWORD = 6;
export declare const ACCESS_TOKEN_EXPIRES: number;
export declare const REFRESH_TOKEN_EXPIRES: number;
export declare const JWT_SECRET = "sec3455";
export declare const OTP_TIME_EXP = 3600;
export declare enum ENV {
    MONGO_URI = "MONGO_URI",
    NODE_ENV = "NODE_ENV"
}
export declare enum USER_TYPES {
    USER = "user",
    ADMIN = "admin",
    VENDOR = "vendor"
}
export declare enum USER_STATUS {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export declare enum TRANSACTION_TYPE {
    DEPOSIT = "deposit",
    WITHDRAWAL = "withdrawal",
    TRANSFER = "transfer",
    INITIAL = "initial"
}
export declare enum ID_VERIFICATION {
    NATIONAL_IDENTITY_CARD = "national_identity_card",
    PASSPORT = "passport",
    DRIVER_LICENSE = "driver_license"
}
export declare enum CATEGORY {
    MEN = "men",
    WOMEN = "women",
    NATIVE = "native",
    ALTE = "alte"
}
export declare enum DELIVERY_OPTIONS {
    INTER_STATE_DELIVERY = "inter_state_delivery",
    INTRA_STATE_DELIVERY = "intra_state_delivery"
}
export declare enum ORDER_STATUS {
    DELIVERED = "delivered",
    PENDING = "pending",
    CANCELLED = "cancelled",
    ASSIGNED = "assigned"
}
export declare enum DELIVERY_COMPANY {
    DHL = "DHL",
    COURIER = "COURIER",
    GIG = "GIG"
}
export declare enum KYC_STATUS {
    SUCCESSFUL = "successful",
    REJECTED = "rejected",
    PENDING = "pending"
}
export declare enum NOTIFICATION_TYPE {
    ORDER = "order",
    WALLET = "wallet",
    KYC = "kyc",
    WITHDRAWAL = "withdrawal"
}
export declare enum OtpReason {
    SIGN_UP = "Successful signup",
    VERIFY_PHONE_NUMBER = "Verify phone number",
    VERIFY_EMAIL = "Verify email",
    VERIFY_ACCOUNT = "Verify account",
    FORGOT_PASSWORD = "Forgot password",
    SIGNUP_VERIFICATION = "Signup verification",
    ORDER_VERIFICATION = "Verify Order",
    WIHDRAWAL_VERIFICATION = "Withdrawal verification"
}
export declare enum OtpType {
    SMS = "Sms",
    EMAIL = "Email",
    ALL_CHANNEL = "All Channel"
}
export declare enum NODE_ENV {
    DEV = "development",
    PROD = "production",
    STAGING = "staging"
}
export declare enum TRANSACTION_STATUS {
    SUCCESSFUL = "successful",
    PENDING = "pending",
    FAILED = "failed"
}
export declare const DEFAULT_CATEGORY_URL = "";
