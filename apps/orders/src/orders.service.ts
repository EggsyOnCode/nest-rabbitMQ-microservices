import { Inject, Injectable } from '@nestjs/common';
import { OrdersRepository } from './order.repository';
import { OrderRequestDTO } from './dtos/create-order.request';
import { lastValueFrom } from 'rxjs';
import { BILLING_SERIVCE } from './constants/services';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  //order repo defines an abstract interface to interact with the mongoose CRUD operations module
  constructor(
    private readonly orderRepo: OrdersRepository,
    @Inject(BILLING_SERIVCE) private billingClient: ClientProxy,
  ) {}

  async createOrder(request: OrderRequestDTO) {
    const session = await this.orderRepo.startTransaction();
    try {
      const order = await this.orderRepo.create(request, { session: session });
      await lastValueFrom(
        this.billingClient.emit('order_created', { request }),
      );
      await session.commitTransaction();
      return order;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    }
  }

  async getOrders() {
    return this.orderRepo.find({});
  }
}
