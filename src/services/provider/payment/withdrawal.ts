// import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
// import { Model } from 'mongoose';
// import { Withdrawal } from '../../../api/bank/schema/withdrawal';
// import { BankService } from 'src/api/bank/bank.service';
// import { UserService } from 'src/api/user/user.service';
// import { Helpers } from 'src/helpers/general.helpers';
// import { Paystack } from 'src/services/provider/payment/paystack';
// import { InjectModel } from '@nestjs/mongoose';
// import { UtilService } from 'src/helpers';
// import { NOTIFICATION_TYPE, TRANSACTION_STATUS } from 'src/constants';
// import { NotificationService } from 'src/api/notification/notification.service';
// import { PushNotificationService } from '../contents/pushNotification';
// import { MailService } from 'src/services/emails/email';
// import { withdrawalTemplate } from '../contents/emailTemplates/auth.registration';

// @Injectable()
// export class WithdrawalService {
//   constructor(
//     private readonly userService: UserService,
//     private readonly helper: Helpers,
//     //private readonly otpService: OtpService,
//     private readonly mailService: MailService,
//     private readonly bankService: BankService,
//     private readonly paystackService: Paystack,
//     private readonly utilService: UtilService,
//     private readonly notificationService: NotificationService,
//     private readonly pushNotification: PushNotificationService,
//     @InjectModel(Withdrawal.name)
//     private readonly withdrawalModel: Model<Withdrawal>,
//   ) {}

//   async withdrawal(payload: { user: string; amount: number; bank_pin: string }) {
//     if (!payload || !payload.user || !payload.amount) {
//       throw new Error('Invalid payload');
//     }

//     const userExist = await this.userService.getUser({ _id: payload.user });
//     if (!userExist) {
//       throw new NotFoundException('User does not exist');
//     }

//     const bankExist = await this.bankService.getBank({ user: userExist._id });
//     if (!bankExist) {
//       throw new NotFoundException('Bank details do not exist');
//     }
//     const checkPin = await this.utilService.comparePassword(payload.bank_pin, bankExist.bank_pin);
//     if (!checkPin) {
//       throw new BadRequestException('Incorrect pin, please put in the correct pin to withdraw');
//     }
//     try {
//       const recipient = await this.paystackService.createTransferRecipient({
//         type: 'nuban',
//         name: `${userExist.full_name}`,
//         account_number: bankExist.account_number,
//         bank_code: bankExist.bank_code,
//         currency: 'NGN',
//       });

//       const recipientCode = recipient.data.recipient_code;
//       const walletBalance = await this.bankService.getWallet({ user: userExist._id });
//       if (walletBalance.wallet < payload.amount) {
//         throw new BadRequestException('Insufficient balance');
//       }
//       const reference = await this.helper.randomStringGen(10);
//       const modifiedReferenceForPaystack = `WI${reference}`;
//       const transfer = await this.paystackService.initiateTransfer({
//         amount: payload.amount * 100,
//         recipient: recipientCode,
//         reason: 'JUMBO Withdrawal',
//         reference: modifiedReferenceForPaystack,
//       });

//       const updatedBalance = walletBalance.wallet - payload.amount;
//       await this.bankService.updateWallet({ userId: userExist._id }, updatedBalance);

//       await this.mailService.sendEmail({
//         from: 'idris@legum.tech',
//         to: userExist.email,
//         subject: 'WITHDRAWAL',
//         html: withdrawalTemplate(userExist.full_name, payload.amount),
//       });

//       const userId = userExist._id.toString();
//       const notificationResult = await this.notificationService.getNotification({ user: userId });
//       if (!notificationResult) {
//         await this.notificationService.createNofication({
//           user: userId,
//           title: 'WITHDRAWAL MESSAGE',
//           body: 'A certain amount of money has been withdrawn from your wallet successfully, please reach out to our support if this was not you',
//           type: NOTIFICATION_TYPE.WITHDRAWAL,
//         });
//       }
//       let fcm_token = '';
//       if (notificationResult && notificationResult.fcm_token) {
//         fcm_token = notificationResult.fcm_token;
//         await this.pushNotification.sendWithdrawalNotification(fcm_token, userId);
//       } else {
//         console.log('FCM tokens are missing');
//       }

//       const withdrawalRecord = new this.withdrawalModel({
//         user: payload.user,
//         amount: payload.amount,
//         transaction_status: TRANSACTION_STATUS.PENDING,
//         reference: reference,
//         recipient_code: recipientCode,
//       });
//       await withdrawalRecord.save();

//       return transfer;
//     } catch (error) {
//       console.error(error);
//       throw new Error('Failed to initiate transfer');
//     }
//   }
// }
