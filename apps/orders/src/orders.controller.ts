import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderRequestDTO } from './dtos/create-order.request';
import { BILLING_SERIVCE } from './constants/services';
import { ClientProxy } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  constructor(
    private readonly ordersService: OrdersService,
    @Inject(BILLING_SERIVCE) readonly billingClient: ClientProxy,
  ) {}

  @Post()
  async createOrder(@Body() request: OrderRequestDTO) {
    return this.ordersService.createOrder(request);
  }

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }

  @Post()
  async createBill() {
    return null;
  }
}
