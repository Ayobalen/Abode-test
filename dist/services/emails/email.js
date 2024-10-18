"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const fetch = require('node-fetch');
let MailService = class MailService {
    constructor() {
        this.API_KEY = 'c88194fa-0a52-43ed-846f-3c3795a4e75b';
    }
    async sendEmail(email) {
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
            }
            else {
                const responseBody = await response.json();
                console.error('Failed to send email:', response.statusText, responseBody);
            }
        }
        catch (error) {
            console.error('Failed to send email:', error);
        }
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)()
], MailService);
//# sourceMappingURL=email.js.map