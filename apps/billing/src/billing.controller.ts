import { Controller, Get } from '@nestjs/common';
import { BillingService } from './billing.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { RmqService } from '@app/commons';

@Controller('billing')
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return this.billingService.getHello();
  }

  @EventPattern('order_created')
  async handleOrderCreated(@Payload() data: any) {
    this.billingService.bill(data);
    // this.rmqService.(context);
  }
}
