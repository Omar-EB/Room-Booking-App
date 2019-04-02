import { Hotel } from './hotel.model';

export class Room {
    hotel: Hotel;
    room_id: {hotel_id: number, room_number: number};
    view_type: string;
    capacity: number;
    price: number;
    extendable: boolean;
    area: number;
}