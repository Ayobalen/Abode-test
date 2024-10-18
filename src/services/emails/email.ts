import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
const fetch = require('node-fetch');
import { IEmail } from 'src/interfaces';

@Injectable()
export class MailService {
  private API_KEY = 'c88194fa-0a52-43ed-846f-3c3795a4e75b';

  async sendEmail(email: IEmail) {
    try {
      const response = await fetch('https://api.postmarkapp.com/email', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Postmark-Server-Token': this.API_KEY,
        },
        body: JSON.stringify({
          From: email.from,
          To: email.to,
          Subject: email.subject,
          HtmlBody: email.html,
          MessageStream: 'broadcast',
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully!');
      } else {
        const responseBody = await response.json();
        console.error('Failed to send email:', response.statusText, responseBody);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  }
}
