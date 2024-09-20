import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @Column()
  status: string;  // Pending, In-Progress, Completed

  @Column()
  kitchenStatus: string;
}