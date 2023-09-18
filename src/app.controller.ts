import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ValidateWebhookDto } from './dto/ValidateWebhookDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  validateWebhook(@Body() validateWebhookDto: ValidateWebhookDto) {
    return this.appService.validateWebhook(validateWebhookDto);
  }
}
