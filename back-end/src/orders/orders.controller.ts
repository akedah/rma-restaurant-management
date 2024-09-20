import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { OrderService } from './orders.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  createOrder(@Body() body: { customerName: string }) {
    return this.orderService.createOrder(body.customerName);
  }

  @Get()
  getOrders() {
    return this.orderService.getOrders();
  }

  @Put(':id')
  updateOrderStatus(@Param('id') id: number, @Body() body: { status: string }) {
    return this.orderService.updateOrderStatus(id, body.status);
  }
}
