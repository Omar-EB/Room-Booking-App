import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Room } from '../../models/room.model';
import { Hotel } from '../../models/hotel.model';
import { Customer } from '../../models/customer.model';
import { Reservation } from '../../models/reservation.model';


import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private hotelChains: string[];
  private hotelChain: string;
  private startDate: string;
  private endDate: string;
  private city: string;
  private state: string;
  private country: string;
  private rating: number;
  private roomCapacity: number;
  private area: number;
  private price: number;

  private customerSin: string;


  // private customer: Customer;
  // Integer hotel_id = (Integer) json.get("hotel_id");
  // Integer room_number = (Integer) json.get("room_number");
  // String customer_sin = (String) json.get("customer_sin");
  // String given_name = (String) json.get("given_name");
  // String family_name = (String) json.get("family_name");
  // String street_name = (String) json.get("street_name");
  //   Integer street_number = (Integer) json.get("street_number");
  //   String city = (String) json.get("city");
  //   String state = (String) json.get("state");
  //   String country = (String) json.get("country");

  private rooms: Room[];
  private selectedRoom: Room;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private location: Location,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.rooms = [];
    this.getHotelChainNames();
  }

  public onBack(): void {
    this.location.back();
  }

  public onSearch(): void {
    if (!this.checkSearchFormValid()) {
      return;
    }
    this.apiService.getRoomsSearch(this.getSearchParams())
      .subscribe(roomsJson => {
        if (roomsJson.length == 0) {
          window.alert('No results found for given search');
          return;
        }
        this.rooms = [];
        for (const roomJson of roomsJson) {
          this.rooms.push(this.apiService.parseToRoom(roomJson));
        }
      },
      (error) => {
        console.log(error);
      });
  }

  private getHotelChainNames(): void {
    this.apiService.getHotelChainNames()
      .subscribe(hotelChainNames => {
        this.hotelChains = hotelChainNames;
      },
      (error) => {
        console.log(error);
      })
  }

  private getSearchParams() {
    const searchParams: any = {}
    searchParams.start = this.startDate + ':00';
    searchParams.end = this.endDate + ':00';
    searchParams.city = this.city;
    searchParams.state = this.state;
    searchParams.country = this.country;
    if (this.roomCapacity != undefined) {
      searchParams.capacity = this.roomCapacity; 
    }
    if (this.rating != undefined) {
      searchParams.rating = this.rating;
    }
    if (this.price != undefined) {
      searchParams.price = this.price;
    }
    if (this.area != undefined) {
      searchParams.area = this.area;
    }
    return searchParams;
  }

  private checkSearchFormValid(): boolean {
    if (!this.hotelChain) {
      window.alert('Hotel Chain missing');
      return false;
    } else if (this.startDate == undefined) {
      window.alert('Start date missing');
      return false;
    } else if (this.endDate == undefined) {
      window.alert('End date missing');
      return false;
    } else if (!this.city) {
      window.alert('City is missing');
      return false;
    } else if (!this.state) {
      window.alert('State is missing');
      return false;
    } else if (!this.country) {
      window.alert('Country is missing');
      return false;
    }

    return true;
  }

  public open(booking: NgbModal, room: Room): void {
    this.selectedRoom = room;
    this.modalService.open(booking, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  public onBookRoom(modal): void {
    if (!this.checkBookFormValid()) {
      return;
    }
    this.apiService.createReservation(this.getBookParams())
      .subscribe(reservation => {
        console.log(reservation);
        window.alert('Successfully booked');
        const newRooms = [];
        for (const room of this.rooms) {
          if (room.hotel.hotelId != this.selectedRoom.hotel.hotelId && room.roomNumber != this.selectedRoom.roomNumber) {
            newRooms.push(room);
          }
        }
        this.rooms = newRooms;
      },
      (error) => {
        window.alert('Error in booking');
        console.log(error);
      }
    );

    modal.close('Save click');
  }

  private getBookParams() {
    const bookParams: any = {};
    bookParams.hotel_id = this.selectedRoom.hotel.hotelId;
    bookParams.room_number = this.selectedRoom.roomNumber;
    bookParams.start = this.startDate + ':00';
    bookParams.end = this.endDate + ':00';
    bookParams.customer_sin = this.customerSin;
    return bookParams;
  }

  private checkBookFormValid(): boolean {
    if (!this.customerSin) {
      window.alert('Sin is missing');
      return false;
    }
    return true;
  }


}
