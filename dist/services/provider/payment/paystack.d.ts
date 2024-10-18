import { ConfigService } from '@nestjs/config';
import { AxiosInstance } from 'axios';
export declare class Paystack {
    private readonly configService;
    apiUrl: string;
    options: object;
    _client: AxiosInstance;
    constructor(configService: ConfigService);
    genPaymentLink(payload: any): Promise<{
        data: {
            link: string;
        };
    }>;
    createTransferRecipient(data: any): Promise<any>;
    initiateTransfer(data: any): Promise<any>;
}
