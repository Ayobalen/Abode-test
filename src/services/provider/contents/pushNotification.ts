// import admin from 'firebase-admin';
// import * as serviceAccount from '../../../bootiq-service-account.json';
// import { NotificationDto } from 'src/api/notification/dtos';
// import { NotificationService } from 'src/api/notification/notification.service';
// import { Injectable } from '@nestjs/common';
// import { NOTIFICATION_TYPE } from 'src/constants';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Notification, NotificationDocument } from 'src/api/notification/schema/notification';

// const data = JSON.parse(JSON.stringify(serviceAccount));
// admin.initializeApp({
//   credential: admin.credential.cert(data),
// });

// @Injectable()
// export class PushNotificationService {
//   constructor(
//     private readonly notificationService: NotificationService,
//     @InjectModel(Notification.name)
//     private readonly notificationModel: Model<NotificationDocument>,
//   ) {}

//   async sendKycSubmissionNotification(fcm_token: string, user?: string) {
//     try {
//       const message = {
//         notification: {
//           title: 'KYC SUBMITTED',
//           body: 'Your kyc has been submitted successfully',
//         },
//         data: {
//           user: user, 
//           type: NOTIFICATION_TYPE.KYC,
//         },
//         token: fcm_token,
//       };
//       const response = await admin.messaging().send(message);
//       console.log('Successfully sent message: ', response);
//       return response;
//     } catch (error) {
//       console.log('Error sending message: ', error);
//       return error;
//     }
//   }

//   async sendKycUpdateNotification(fcm_token: string, user?: string) {
//     try {
//       const message = {
//         notification: {
//           title: 'KYC UPDATED',
//           body: 'Your kyc has been updated successfully',
//         },
//         data: {
//           user: user, 
//           type: NOTIFICATION_TYPE.KYC,
//         },
//         token: fcm_token,
//       };
//       console.log("Sending notification:", message);
//       const response = await admin.messaging().send(message);
//       console.log('Successfully sent message: ', response);
//       return response;
//     } catch (error) {
//       console.log('Error sending message: ', error);
//       return error;
//     }
//   }

//   async sendOrderNotification(fcm_token: string, user?: string) {
//     try {
//       const message = {
//         notification: {
//           title: 'ORDER MESSAGE',
//           body: 'Your order has been created successfully',
//         },
//         data: {
//           user: user,
//           type: NOTIFICATION_TYPE.ORDER,
//         },
//         token: fcm_token,
//       };
//       const response = await admin.messaging().send(message);
//       console.log('Successfully sent message: ', response);
//       return response;
//     } catch (error) {
//       console.log('Error sending message: ', error);
//       return error;
//     }
//   }

//   async sendUpdateOrderNotification(fcm_token: string, user?: string) {
//     try {
//       const message = {
//         notification: {
//           title: 'ORDER MESSAGE',
//           body: 'Your order status has been changed, please check to confirm'
//         },
//         data: {
//           user: user,
//           type: NOTIFICATION_TYPE.ORDER,
//         },
//         token: fcm_token,
//       };
//       const response = await admin.messaging().send(message);
//       console.log('Successfully sent message: ', response);
//     } catch (error) {
//       console.log('Error sending message: ', error);
//       return error;
//     }
//   }

//   async sendOrderDeliveryNotification(fcm_token: string, user?: string) {
//     try {
//       const message = {
//         notification: {
//           title: 'ORDER MESSAGE',
//           body: 'Your order delivery status has been changed, please check to confirm'
//         },
//         data: {
//           user: user,
//           type: NOTIFICATION_TYPE.ORDER,
//         },
//         token: fcm_token,
//       };
//       const response = await admin.messaging().send(message);
//       console.log('Successfully sent message: ', response);
//       return response;
//     } catch (error) {
//       console.log('Error sending message: ', error);
//       return error;
//     }
//   }

//   async sendWithdrawalNotification(fcm_token: string, user?: string) {
//     try {
//       const message = {
//         notification: {
//           title: 'WITHDRAWAL MESSAGE',
//           body: 'A certain amount of money has been withdrawn from your wallet successfully, please reach out to our support if this was not you'
//         },
//         data: {
//           user: user,
//           type: NOTIFICATION_TYPE.WITHDRAWAL,
//         },
//         token: fcm_token,
//       };
//       const response = await admin.messaging().send(message);
//       console.log('Successfully sent message: ', response);
//       return response;
//     } catch (error) {
//       console.log('Error sending message: ', error);
//       return error;
//     }
//   }
// }
