export const PHONE_NUMBER_MAX = 14;
export const MIN_PASSWORD = 6;
export const ACCESS_TOKEN_EXPIRES = 7 * 24 * 3600;
export const REFRESH_TOKEN_EXPIRES = 7 * 24 * 3600;
export const JWT_SECRET = 'sec3455';
export const OTP_TIME_EXP = 3600;
export enum ENV {
  MONGO_URI = 'MONGO_URI',
  NODE_ENV = 'NODE_ENV',
}

export enum USER_TYPES {
  USER = 'user',
  ADMIN = 'admin',
  VENDOR = 'vendor',
}

export enum USER_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum TRANSACTION_TYPE {
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
  TRANSFER = 'transfer',
  INITIAL = 'initial',
}

export enum ID_VERIFICATION {
  NATIONAL_IDENTITY_CARD = 'national_identity_card',
  PASSPORT = 'passport',
  DRIVER_LICENSE = 'driver_license',
}

export enum CATEGORY {
  MEN = 'men',
  WOMEN = 'women',
  NATIVE = 'native',
  ALTE = 'alte'
}

export enum DELIVERY_OPTIONS {
  INTER_STATE_DELIVERY = 'inter_state_delivery',
  INTRA_STATE_DELIVERY = 'intra_state_delivery'
}

export enum ORDER_STATUS {
  DELIVERED = 'delivered',
  PENDING = 'pending',
  CANCELLED = 'cancelled',
  ASSIGNED = 'assigned'
}

export enum DELIVERY_COMPANY {
  DHL = 'DHL',
  COURIER = 'COURIER',
  GIG = 'GIG'
}

export enum KYC_STATUS {
  SUCCESSFUL = 'successful',
  REJECTED = 'rejected',
  PENDING = 'pending'
}

export enum NOTIFICATION_TYPE {
  ORDER = 'order',
  WALLET = 'wallet',
  KYC = 'kyc',
  WITHDRAWAL = 'withdrawal'
}

export enum OtpReason {
  SIGN_UP = 'Successful signup',
  VERIFY_PHONE_NUMBER = 'Verify phone number',
  VERIFY_EMAIL = 'Verify email',
  VERIFY_ACCOUNT = 'Verify account',
  FORGOT_PASSWORD = 'Forgot password',
  SIGNUP_VERIFICATION = 'Signup verification',
  ORDER_VERIFICATION = 'Verify Order',
  WIHDRAWAL_VERIFICATION = 'Withdrawal verification'
}

export enum OtpType {
  SMS = 'Sms',
  EMAIL = 'Email',
  ALL_CHANNEL = 'All Channel',
}

export enum NODE_ENV {
  DEV = 'development',
  PROD = 'production',
  STAGING = 'staging',
}

export enum TRANSACTION_STATUS {
  SUCCESSFUL = 'successful',
  PENDING = 'pending',
  FAILED = 'failed',
}


export const DEFAULT_CATEGORY_URL = '';
