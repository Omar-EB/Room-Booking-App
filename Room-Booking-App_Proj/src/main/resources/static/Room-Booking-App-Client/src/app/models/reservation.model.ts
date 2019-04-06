import { Customer } from './customer.model';
import { Room } from './room.model';

export class Reservation {
    hotelId: number;
    roomNumber: number;
    room: Room;
    startDate: Date;
    endDate: Date;
    reservationType: boolean;
    customer: Customer;
}