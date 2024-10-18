import { IEmail } from 'src/interfaces';
export declare class MailService {
    private API_KEY;
    sendEmail(email: IEmail): Promise<void>;
}
