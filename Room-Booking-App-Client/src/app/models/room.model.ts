import { Hotel } from './hotel.model';

export class Room {
    hotel: Hotel = new Hotel();
    roomNumber: number;
    viewType: string;
    capacity: number;
    price: number;
    extendable: boolean;
    area: number;
    amenities: string[] = [];

}