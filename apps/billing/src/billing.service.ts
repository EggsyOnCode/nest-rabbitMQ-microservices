import { Injectable, Logger } from '@nestjs/common';
import { BillRepository } from './billing.repository';
import { CreateBillDTO } from './dtos/create-bill.dto';

@Injectable()
export class BillingService {
  constructor(private readonly billingRepo: BillRepository) {}

  private readonly logger = new Logger(BillingService.name);

  getHello(): string {
    return 'Hello World!';
  }

  createBill(data: CreateBillDTO) {
    this.logger.log('Billing...', data);
    this.billingRepo.create(data);
  }
}
