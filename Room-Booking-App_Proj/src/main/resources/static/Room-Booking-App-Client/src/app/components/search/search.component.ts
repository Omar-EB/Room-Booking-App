import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  private startDate: Date;
  private endDate: Date;
  private rating: number;
  private roomCapacity: number;
  private area: number;
  private price: number;

  private customer: Customer;

  private rooms: Room[] = [];
  private selectedRoom: Room;


  constructor(
    private apiService: ApiService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.rating = 1;
    this.customer = new Customer();
  }

  public onSearch(): void {
    if (!this.checkSearchFormValid) {
      return;
    }
    this.apiService.getRooms().subscribe(roomsJson => {
      for (const roomJson of roomsJson) {
        this.rooms.push(this.apiService.parseToRoom(roomJson));
      }
    },
    (error) => {
      console.log(error);
    });
  }

  private checkSearchFormValid(): boolean {
    return true;
  }

  public open(booking, room: Room): void {
    this.selectedRoom = room;
    this.modalService.open(booking, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  public bookRoom(modal): void {
    if (!this.checkBookFormValid()) {
      return;
    }
    modal.close('Save click');
    const reservation = new Reservation();
    reservation.hotelId = this.selectedRoom.hotel.hotelId;
    reservation.roomNumber = this.selectedRoom.roomNumber;
    reservation.startDate = this.startDate;
    reservation.endDate = this.endDate;
    reservation.reservationType = false;
    reservation.customer = this.customer;
    console.log(JSON.stringify(reservation));
  }

  private checkBookFormValid(): boolean {
    if (this.customer.sin == '' || this.customer.sin == null) {
      window.alert('Sin is missing');
      return false;
    } else if (this.customer.givenName == '' || this.customer.givenName == null) {
      window.alert('Given name is missing');
      return false;
    } else if (this.customer.familyName == '' || this.customer.familyName == null) {
      window.alert('Family name is missing');
      return false;
    } else if (this.customer.streetName == '' || this.customer.streetName == null) {
      window.alert('Street name is missing');
      return false;
    } else if (this.customer.streetNumber == null) {
      window.alert('Street number is missing');
      return false;
    } else if (this.customer.city == '' || this.customer.city == null) {
      window.alert('City is missing');
      return false;
    } else if (this.customer.state == '' || this.customer.state == null) {
      window.alert('State is missing');
      return false;
    } else if (this.customer.country == '' || this.customer.country == null) {
      window.alert('Country is missing');
      return false;
    }
    return true;
  }

}
