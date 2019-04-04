import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Room } from '../models/room.model';
import { Hotel } from '../models/hotel.model';
import { HotelChain } from '../models/hotelchain.model';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) { }

  getRooms(): Observable<Room[]> {
    const getUrl = this.baseUrl + '/rooms';
    return this.http.get(getUrl, this.options).pipe(
      map((response: Response) => response.json()),
      catchError((error: HttpErrorResponse) => {
        return Observable.throw(error || 'SERVER ERROR')
        })
    );
  }

  createReservation(reservation: Reservation): Observable<Response> {
    const postUrl = this.baseUrl + '/'
    return this.http.post(this.baseUrl, JSON.stringify(reservation), this.options).pipe (
      catchError((error: HttpErrorResponse) => {
        return Observable.throw(error || 'SERVER_ERROR')
      })
    );

  }


  parseToRoom(roomJson: any): Room {
    const room = new Room();
    room.hotel = this.parseToHotel(roomJson.hotel);
    room.roomNumber = roomJson.room_id.room_number;
    room.viewType = roomJson.view_type;
    room.capacity = roomJson.capacity;
    room.price = roomJson.price;
    room.extendable = roomJson.extendable;
    room.area = roomJson.area;
    return room;
  }

  parseToHotel(hotelJson: any): Hotel {
    const hotel = new Hotel();
    hotel.hotelChain = this.parseToHotelChain(hotelJson.hotelChain);
    hotel.hotelId = hotelJson.hotel_id;
    hotel.streetName = hotelJson.street_name;
    hotel.streetNumber = hotelJson.street_number;
    hotel.city = hotelJson.city;
    hotel.state = hotelJson.state;
    hotel.country = hotelJson.country;
    hotel.rating = hotelJson.rating;
    hotel.phoneNumber = hotelJson.phone_number;
    hotel.numberOfRooms = hotelJson.number_of_rooms;
    return hotel;
  }

  parseToHotelChain(hotelChainJson: any): HotelChain {
    const hotelChain = new HotelChain();
    hotelChain.hcName = hotelChainJson.hc_name;
    hotelChain.numberOfHotels = hotelChainJson.number_of_hotels;
    return hotelChain;
  }


}
