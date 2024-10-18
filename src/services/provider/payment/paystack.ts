import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
import { SentryException } from 'src/helpers/sentry.exceptions';

@Injectable()
export class Paystack {
  apiUrl: string;
  options: object;
  _client: AxiosInstance;
  constructor(private readonly configService: ConfigService) {
    this.apiUrl = 'https://api.paystack.co';
    this._client = axios.create({
      baseURL: this.apiUrl,
      headers: {
        authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
      },
    });
  }
  async genPaymentLink(payload: any) {
    if (!payload) {
      throw new Error('Payload cannot be undefined or null');
    }
    try {
      const data = {
        ...payload,
        amount: payload.amount,
        callback_url: 'https://localhost/api/v1/webhooks/payment-status',
      };

      if (payload.metadata && payload.metadata.user) {
        delete payload.metadata.user;
      }
      const response = await this._client.post('/transaction/initialize', data, this.options);
      return {
        data: { link: `${response.data.data.authorization_url}` },
      };
    } catch (error) {
      throw new SentryException(error, error.response?.data?.message);
    }
  }

  async createTransferRecipient(data: any) {
    try {
      const response = await this._client.post('/transferrecipient', data, this.options);
      return response.data;
    } catch (error) {
      throw new SentryException(error, error.response?.data?.message);
    }
  }

  async initiateTransfer(data: any) {
    try {
      const response = await this._client.post('/transfer', data, this.options);
      return response.data;
    } catch (error) {
      throw new SentryException(error, error.response?.data?.message);
    }
  }

  // async completeTransfer(transferCode: string) {
  //   try {
  //     const response = await this._client.post('/transfer/complete', {
  //       transfer_code: transferCode,
  //     });

  //     if (response.data.success) {
  //       console.log('Transfer completed successfully.');
  //       return response.data; // Return the response data
  //     } else {
  //       console.error('Transfer completion failed:', response.data.message);
  //       throw new Error(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error completing transfer:', error.message);
  //     throw new SentryException(error, error.response?.data?.message);
  //   }
  // }
}
