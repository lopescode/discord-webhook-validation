import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignatureVerificationMiddleware } from './middlewares/SignatureVerificationMiddleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SignatureVerificationMiddleware).forRoutes({ path: '/', method: RequestMethod.ALL});
  }
}
