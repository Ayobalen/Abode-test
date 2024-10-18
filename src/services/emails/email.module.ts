import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './email';

@Module({
  imports: [MailerModule.forRoot({})],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
