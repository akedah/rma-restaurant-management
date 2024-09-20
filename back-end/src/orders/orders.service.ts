import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(customerName: string): Promise<Order> {
    const order = this.orderRepository.create({ customerName, status: 'Pending' });
    return await this.orderRepository.save(order);
  }

  async getOrders(): Promise<Order[]> {
    return await this.orderRepository.find();
  }

  async updateOrderStatus(id: any, status: string): Promise<Order> {
    await this.orderRepository.update(id, { status });
    return this.orderRepository.findOne(id);
  }
}
