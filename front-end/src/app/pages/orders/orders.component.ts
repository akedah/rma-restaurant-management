import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data) => {
      this.orders = data;
    });
  }

  updateOrderStatus(id: number, status: string) {
    this.orderService.updateOrderStatus(id, status).subscribe(() => {
      this.orders = this.orders.map((order: { id: number; status: string; }) => {
        if (order.id === id) {
          order.status = status;
        }
        return order;
      });
    });
  }
}
