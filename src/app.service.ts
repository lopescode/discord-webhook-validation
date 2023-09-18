import { Injectable } from '@nestjs/common';
import { ValidateWebhookDto } from './dto/ValidateWebhookDto';
import { INTERACTION_CALLBACK_TYPE } from './models/INTERACTION_CALLBACK_TYPE';

@Injectable()
export class AppService {
  validateWebhook({data, type }: ValidateWebhookDto) {
    return { type: INTERACTION_CALLBACK_TYPE.PONG };
  }
}
