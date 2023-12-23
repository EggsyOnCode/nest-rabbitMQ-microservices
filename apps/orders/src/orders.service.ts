import { Injectable } from '@nestjs/common';
import { OrdersRepository } from './order.repository';
import { OrderRequestDTO } from './dtos/create-order.request';

@Injectable()
export class OrdersService {
  //order repo defines an abstract interface to interact with the mongoose CRUD operations module
  constructor(private readonly orderRepo: OrdersRepository) {}

  async createOrder(request: OrderRequestDTO) {
    return this.orderRepo.create(request);
  }

  async getOrders() {
    return this.orderRepo.find({});
  }
}
