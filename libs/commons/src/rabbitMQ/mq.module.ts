import { Module } from '@nestjs/common';
import { RmqService } from './rabbitMQ.service';

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RabbitMQModule {}
