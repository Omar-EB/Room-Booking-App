import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

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

  private rooms: Room[];
  private selectedRoom: Room;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private location: Location,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.rooms = [];
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
        this.rooms = [];
        for (const roomJson of roomsJson) {
          this.rooms.push(this.apiService.parseToRoom(roomJson));
        }
      },
      (error) => {
        console.log(error);
      });
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
    if (this.startDate == undefined) {
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

  public bookRoom(modal): void {
    if (!this.checkBookFormValid()) {
      return;
    }

    this.apiService.createReservation(this.getBookParams())
      .subscribe(reservationJson => {
        window.alert('Successfully booked');
        this.rooms = [];
      },
      (error) => {
        window.alert(error);
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
