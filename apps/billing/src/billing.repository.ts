import { AbstractRepository } from '@app/commons';
import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { Bill } from './schemas/bill.schema';

@Injectable()
export class BillRepository extends AbstractRepository<Bill> {
  protected readonly logger = new Logger(BillRepository.name);

  constructor(
    @InjectModel(Bill.name) BillModel: Model<Bill>,
    @InjectConnection() connection: Connection,
  ) {
    super(BillModel, connection);
  }
}
