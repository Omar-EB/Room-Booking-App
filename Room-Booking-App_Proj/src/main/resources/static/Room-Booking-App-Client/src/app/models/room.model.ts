import { Hotel } from './hotel.model';

export class Room {
    hotel: Hotel;
    roomNumber: number;
    viewType: string;
    capacity: number;
    price: number;
    extendable: boolean;
    area: number;
}