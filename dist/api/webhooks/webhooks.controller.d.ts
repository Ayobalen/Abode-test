import { OrderProvider } from '../order/order.provider';
import { BankProvider } from '../bank/bank.provider';
export declare class WebhooksController {
    private readonly orderProvider;
    private readonly bankProvider;
    constructor(orderProvider: OrderProvider, bankProvider: BankProvider);
    handleWebhook(body: any): Promise<{
        data: string;
    }>;
}
