import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import randomatic = require('randomatic');
import Mailgun from 'mailgun.js';
import Client from 'mailgun.js/client';
import formdata = require('form-data');
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import * as Sentry from '@sentry/node';
import { OtpReason, OtpType } from 'src/constants';
import axios from 'axios';
import moment = require('moment');
import { IEmail, SmsMeta } from 'src/interfaces';
import { ENV } from 'src/constants';
import { Otp, OtpDocument } from 'src/common/schema';

@Injectable()
export class OtpService {
  private emailClient: Client;
  //private termiiClient: Axios;
  private termii_sender_id: string;
  private termii_api_key: string;
  private termii_url: string;
  private axios_http = axios;

  constructor(
    private readonly configService: ConfigService,
    @InjectModel(Otp.name) private readonly otpModel: Model<OtpDocument>,
  ) {
  }

  async sendSMS(to: string, message: string, otp_reason?: OtpReason): Promise<any> {
    const response = await this.sendWithTermii(to, message);
    console.log(response);
    try {
    } catch (err) {
      console.log(err);
    }
  }

  async createOtp(data: any): Promise<OtpDocument> {
    const createdOtp = await this.otpModel.create(data);
    return createdOtp;
  }

  async getCode(): Promise<string> {
    return new Promise<string>((resolve) => {
      const code = randomatic('0', 4);
      resolve(code);
    });
  }

  async updateOtp(
    filterQuery: FilterQuery<OtpDocument>,
    updateQuery: UpdateQuery<OtpDocument>,
    options?: QueryOptions,
  ) {
    const sms = await this.otpModel.findOneAndUpdate(filterQuery, updateQuery, options);
    return sms;
  }

  async getOtp(filterQuery: FilterQuery<OtpDocument>) {
    const code = await this.otpModel.findOne(filterQuery);
    return code;
  }

  async getOtps(filterQuery: FilterQuery<OtpDocument>) {
    const otps = await this.otpModel.find(filterQuery);
    return otps;
  }

  async sendWithTermii(to: string, body: string) {
    let number = to;
    if (!to.startsWith('+')) {
      number = `+${to}`;
    }
    console.log(to);
    const data = {
      to: number,
      from: 'legum',
      sms: body,
      type: 'plain',
      api_key: 'TLVUMqChaTvRpJnZVxk5XRJ2GQclUj8croaftrXvRB2yKqo7Wx98grG3dhITZM',
      channel: 'dnd',
    };
    console.log(data);
    try {
      const response = await axios.post('https://api.ng.termii.com/api/sms/send', data, {
        headers: { 'Content-Type': 'application/json', 'cache-control': 'no-cache' },
      });
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
