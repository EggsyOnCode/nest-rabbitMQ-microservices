import { Controller, Get } from '@nestjs/common';
import { BillingService } from './billing.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/commons';
import { CreateBillDTO } from './dtos/create-bill.dto';

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
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    const billDTO: CreateBillDTO = {
      customer: data.name + ' Rehman',
      items: ['Milk Packets', 'Lolliles'],
      total_price: data.price,
    };
    this.billingService.createBill(billDTO);
    this.rmqService.ack(context);
  }
}
