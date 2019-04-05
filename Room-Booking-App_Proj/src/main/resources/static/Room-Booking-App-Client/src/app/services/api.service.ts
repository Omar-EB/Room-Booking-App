import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Room } from '../models/room.model';
import { Hotel } from '../models/hotel.model';
import { HotelChain } from '../models/hotelchain.model';
import { Reservation } from '../models/reservation.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private baseUrl = 'http://localhost:8080/';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(
    private http: Http,
    private httpClient: HttpClient) { }

  getRooms(): Observable<Room[]> {
    const getUrl = this.baseUrl + 'rooms';
    return this.httpClient.get<Room[]>(getUrl);
  }

  getRoomsSearch(searchParameters): Observable<Room[]> {
    const getUrl = this.baseUrl + 'rooms/query';
    return this.httpClient.get<Room[]>(getUrl, {params: searchParameters});
  }

  getReservations(): Observable<Reservation[]> {
    const getUrl = this.baseUrl + 'rooms/reservations';
    return this.httpClient.get<Reservation[]>(getUrl);
  }

  createReservation(reservationParams): Observable<Reservation> {
    const putUrl = this.baseUrl + 'reservation';
    const params = {start: reservationParams.start, end: reservationParams.end};
    return this.httpClient.post<Reservation>(putUrl, reservationParams, {params: params});
  }

  // createUnit(){
  //   return this._http.post(this.baseUrl, JSON.stringify(unit),this.options).pipe(
  //       map((response:Response) => response.json()) , 
  //       catchError((error: HttpErrorResponse) => {
  //           return Observable.throw(error || 'SERVER ERROR')
  //       })
  //   );  
  // }


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

  parseToReservation(reservationJson: any): Reservation {
    const reservation = new Reservation();
    reservation.hotelId = reservationJson.hotel_id;
    reservation.roomNumber = reservationJson.room_number;
    reservation.startDate = new Date(reservationJson.start_date);
    reservation.endDate = new Date(reservationJson.endDate);
    reservation.reservationType = reservationJson.reservation_type;
    reservation.customer = this.parseToCustomer(reservationJson.customer);
    return reservation;
  }

  parseToCustomer(customerJson: any): Customer {
    const customer = new Customer();
    customer.sin = customerJson.sin;
    customer.givenName = customerJson.given_name;
    customer.familyName = customerJson.family_name;
    customer.streetName = customerJson.street_name;
    customer.streetNumber = customerJson.street_number;
    customer.city = customerJson.city;
    customer.state = customerJson.state;
    customer.country = customerJson.country;
    return customer;
  }

}
