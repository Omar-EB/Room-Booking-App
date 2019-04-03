import { HotelChain } from './hotelchain.model';

export class Hotel {
    hotelChain: HotelChain;
    hotelId: number;
    streetName: string;
    streetNumber: number;
    city: string;
    state: string;
    country: string;
    rating: number;
    phoneNumber: string;
    numberOfRooms: number;

    public getAddress(): string {
        return this.streetNumber + ' ' + this.streetName + ' ' + this.city + ', ' + this.state + ', ' + this.country;
    }
}