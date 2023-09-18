import { ValidateWebhookDto } from './dto/ValidateWebhookDto';
import { INTERACTION_CALLBACK_TYPE } from './models/INTERACTION_CALLBACK_TYPE';
export declare class AppService {
    validateWebhook({ data, type }: ValidateWebhookDto): {
        type: INTERACTION_CALLBACK_TYPE;
    };
}
