"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CATEGORY_URL = exports.TRANSACTION_STATUS = exports.NODE_ENV = exports.OtpType = exports.OtpReason = exports.NOTIFICATION_TYPE = exports.KYC_STATUS = exports.DELIVERY_COMPANY = exports.ORDER_STATUS = exports.DELIVERY_OPTIONS = exports.CATEGORY = exports.ID_VERIFICATION = exports.TRANSACTION_TYPE = exports.USER_STATUS = exports.USER_TYPES = exports.ENV = exports.OTP_TIME_EXP = exports.JWT_SECRET = exports.REFRESH_TOKEN_EXPIRES = exports.ACCESS_TOKEN_EXPIRES = exports.MIN_PASSWORD = exports.PHONE_NUMBER_MAX = void 0;
exports.PHONE_NUMBER_MAX = 14;
exports.MIN_PASSWORD = 6;
exports.ACCESS_TOKEN_EXPIRES = 7 * 24 * 3600;
exports.REFRESH_TOKEN_EXPIRES = 7 * 24 * 3600;
exports.JWT_SECRET = 'sec3455';
exports.OTP_TIME_EXP = 3600;
var ENV;
(function (ENV) {
    ENV["MONGO_URI"] = "MONGO_URI";
    ENV["NODE_ENV"] = "NODE_ENV";
})(ENV || (exports.ENV = ENV = {}));
var USER_TYPES;
(function (USER_TYPES) {
    USER_TYPES["USER"] = "user";
    USER_TYPES["ADMIN"] = "admin";
    USER_TYPES["VENDOR"] = "vendor";
})(USER_TYPES || (exports.USER_TYPES = USER_TYPES = {}));
var USER_STATUS;
(function (USER_STATUS) {
    USER_STATUS["ACTIVE"] = "active";
    USER_STATUS["INACTIVE"] = "inactive";
})(USER_STATUS || (exports.USER_STATUS = USER_STATUS = {}));
var TRANSACTION_TYPE;
(function (TRANSACTION_TYPE) {
    TRANSACTION_TYPE["DEPOSIT"] = "deposit";
    TRANSACTION_TYPE["WITHDRAWAL"] = "withdrawal";
    TRANSACTION_TYPE["TRANSFER"] = "transfer";
    TRANSACTION_TYPE["INITIAL"] = "initial";
})(TRANSACTION_TYPE || (exports.TRANSACTION_TYPE = TRANSACTION_TYPE = {}));
var ID_VERIFICATION;
(function (ID_VERIFICATION) {
    ID_VERIFICATION["NATIONAL_IDENTITY_CARD"] = "national_identity_card";
    ID_VERIFICATION["PASSPORT"] = "passport";
    ID_VERIFICATION["DRIVER_LICENSE"] = "driver_license";
})(ID_VERIFICATION || (exports.ID_VERIFICATION = ID_VERIFICATION = {}));
var CATEGORY;
(function (CATEGORY) {
    CATEGORY["MEN"] = "men";
    CATEGORY["WOMEN"] = "women";
    CATEGORY["NATIVE"] = "native";
    CATEGORY["ALTE"] = "alte";
})(CATEGORY || (exports.CATEGORY = CATEGORY = {}));
var DELIVERY_OPTIONS;
(function (DELIVERY_OPTIONS) {
    DELIVERY_OPTIONS["INTER_STATE_DELIVERY"] = "inter_state_delivery";
    DELIVERY_OPTIONS["INTRA_STATE_DELIVERY"] = "intra_state_delivery";
})(DELIVERY_OPTIONS || (exports.DELIVERY_OPTIONS = DELIVERY_OPTIONS = {}));
var ORDER_STATUS;
(function (ORDER_STATUS) {
    ORDER_STATUS["DELIVERED"] = "delivered";
    ORDER_STATUS["PENDING"] = "pending";
    ORDER_STATUS["CANCELLED"] = "cancelled";
    ORDER_STATUS["ASSIGNED"] = "assigned";
})(ORDER_STATUS || (exports.ORDER_STATUS = ORDER_STATUS = {}));
var DELIVERY_COMPANY;
(function (DELIVERY_COMPANY) {
    DELIVERY_COMPANY["DHL"] = "DHL";
    DELIVERY_COMPANY["COURIER"] = "COURIER";
    DELIVERY_COMPANY["GIG"] = "GIG";
})(DELIVERY_COMPANY || (exports.DELIVERY_COMPANY = DELIVERY_COMPANY = {}));
var KYC_STATUS;
(function (KYC_STATUS) {
    KYC_STATUS["SUCCESSFUL"] = "successful";
    KYC_STATUS["REJECTED"] = "rejected";
    KYC_STATUS["PENDING"] = "pending";
})(KYC_STATUS || (exports.KYC_STATUS = KYC_STATUS = {}));
var NOTIFICATION_TYPE;
(function (NOTIFICATION_TYPE) {
    NOTIFICATION_TYPE["ORDER"] = "order";
    NOTIFICATION_TYPE["WALLET"] = "wallet";
    NOTIFICATION_TYPE["KYC"] = "kyc";
    NOTIFICATION_TYPE["WITHDRAWAL"] = "withdrawal";
})(NOTIFICATION_TYPE || (exports.NOTIFICATION_TYPE = NOTIFICATION_TYPE = {}));
var OtpReason;
(function (OtpReason) {
    OtpReason["SIGN_UP"] = "Successful signup";
    OtpReason["VERIFY_PHONE_NUMBER"] = "Verify phone number";
    OtpReason["VERIFY_EMAIL"] = "Verify email";
    OtpReason["VERIFY_ACCOUNT"] = "Verify account";
    OtpReason["FORGOT_PASSWORD"] = "Forgot password";
    OtpReason["SIGNUP_VERIFICATION"] = "Signup verification";
    OtpReason["ORDER_VERIFICATION"] = "Verify Order";
    OtpReason["WIHDRAWAL_VERIFICATION"] = "Withdrawal verification";
})(OtpReason || (exports.OtpReason = OtpReason = {}));
var OtpType;
(function (OtpType) {
    OtpType["SMS"] = "Sms";
    OtpType["EMAIL"] = "Email";
    OtpType["ALL_CHANNEL"] = "All Channel";
})(OtpType || (exports.OtpType = OtpType = {}));
var NODE_ENV;
(function (NODE_ENV) {
    NODE_ENV["DEV"] = "development";
    NODE_ENV["PROD"] = "production";
    NODE_ENV["STAGING"] = "staging";
})(NODE_ENV || (exports.NODE_ENV = NODE_ENV = {}));
var TRANSACTION_STATUS;
(function (TRANSACTION_STATUS) {
    TRANSACTION_STATUS["SUCCESSFUL"] = "successful";
    TRANSACTION_STATUS["PENDING"] = "pending";
    TRANSACTION_STATUS["FAILED"] = "failed";
})(TRANSACTION_STATUS || (exports.TRANSACTION_STATUS = TRANSACTION_STATUS = {}));
exports.DEFAULT_CATEGORY_URL = '';
//# sourceMappingURL=index.js.map