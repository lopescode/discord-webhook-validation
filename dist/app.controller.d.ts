import { AppService } from './app.service';
import { ValidateWebhookDto } from './dto/ValidateWebhookDto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    validateWebhook(validateWebhookDto: ValidateWebhookDto): {
        type: import("./models/INTERACTION_CALLBACK_TYPE").INTERACTION_CALLBACK_TYPE;
    };
}
