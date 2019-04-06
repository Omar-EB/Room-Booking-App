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
import { CheckIn } from '../models/checkin.model';
import { Employee } from '../models/employee.model';

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

  public getHotelChainNames(): Observable<string[]> {
    const getUrl = this.baseUrl + 'hotelchains';
    return this.httpClient.get<string[]>(getUrl);
  }

  public getHotels(): Observable<Hotel[]> {
    const getUrl = this.baseUrl + 'hotels';
    return this.httpClient.get<Hotel[]>(getUrl);
  }

  public getRooms(): Observable<Room[]> {
    const getUrl = this.baseUrl + 'rooms';
    return this.httpClient.get<Room[]>(getUrl);
  }

  public getRoomsByHotelIdSearch(searchParameters): Observable<Room[]> {
    console.log(searchParameters);
    const getUrl = this.baseUrl + 'rooms/' + searchParameters.hotel_id + '/query';
    return this.httpClient.get<Room[]>(getUrl, {params: searchParameters});
  }

  public getRoomsSearch(searchParameters): Observable<Room[]> {
    const getUrl = this.baseUrl + 'rooms/query';
    return this.httpClient.get<Room[]>(getUrl, {params: searchParameters});
  }

  public getRoomAmenities(roomNumber: number, hotelId: number): Observable<[]> {
    const getUrl = this.baseUrl + 'rooms/' + hotelId + '/' + roomNumber + '/amenities';
    return this.httpClient.get<[]>(getUrl);
  }

  public getCustomers(): Observable<Customer[]> {
    const getUrl = this.baseUrl + 'customers';
    return this.httpClient.get<Customer[]>(getUrl);
  }

  public getEmployees(): Observable<Employee[]> {
    const getUrl = this.baseUrl + 'employees';
    return this.httpClient.get<Employee[]>(getUrl);
  }

  public getReservations(): Observable<Reservation[]> {
    const getUrl = this.baseUrl + 'rooms/reservations';
    return this.httpClient.get<Reservation[]>(getUrl);
  }

  public createReservation(reservationParams): Observable<Reservation> {
    const putUrl = this.baseUrl + 'rooms/reservation';
    const params = {start: reservationParams.start, end: reservationParams.end};
    return this.httpClient.post<Reservation>(putUrl, reservationParams, {params: params});
  }

  public createCheckIn(checkInParams): Observable<CheckIn> {
    const putUrl = this.baseUrl + 'rooms/checkin/';
    const params = {start: checkInParams.start_date.toISOString(), 
                    end: checkInParams.end_date.toISOString(), 
                    payment: '' + checkInParams.payment};
    return this.httpClient.post<CheckIn>(putUrl, checkInParams, {params: params});
  }

  public createRenting(rentingParams){
    const putUrl = this.baseUrl + 'rooms/reservation/checkin';
    const params = {start: rentingParams.start, end: rentingParams.end};
    return this.httpClient.post(putUrl, rentingParams, {params: params});
  }


  public parseToRoom(roomJson: any): Room {
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

  public parseToHotel(hotelJson: any): Hotel {
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

  public parseToHotelChain(hotelChainJson: any): HotelChain {
    const hotelChain = new HotelChain();
    hotelChain.hcName = hotelChainJson.hc_name;
    hotelChain.numberOfHotels = hotelChainJson.number_of_hotels;
    return hotelChain;
  }

  public parseToReservation(reservationJson: any): Reservation {
    const reservation = new Reservation();
    reservation.hotelId = reservationJson.hotel_id;
    reservation.roomNumber = reservationJson.room_number;
    reservation.room = this.parseToRoom(reservationJson.room);
    reservation.startDate = new Date(reservationJson.start_date);
    reservation.endDate = new Date(reservationJson.end_date);
    reservation.reservationType = reservationJson.reservation_type;
    reservation.customer = this.parseToCustomer(reservationJson.customer);
    return reservation;
  }

  public parseToCustomer(customerJson: any): Customer {
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

  public parseToEmployee(employeeJson: any): Employee {
    const employee = new Employee();
    employee.sin = employeeJson.sin;
    employee.givenName = employeeJson.given_name;
    employee.familyName = employeeJson.family_name;
    employee.streetName = employeeJson.street_name;
    employee.streetNumber = employeeJson.street_number;
    employee.city = employeeJson.city;
    employee.state = employeeJson.state;
    employee.country = employeeJson.country;
    employee.hotel = this.parseToHotel(employeeJson.hotel);
    return employee;
  }

}
