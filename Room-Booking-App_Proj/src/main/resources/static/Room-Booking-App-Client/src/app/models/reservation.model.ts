import { Customer } from './customer.model';

export class Reservation {
    hotelId: number;
    roomNumber: number;
    startDate: Date;
    endDate: Date;
    reservationType: boolean;
    customer: Customer;
}