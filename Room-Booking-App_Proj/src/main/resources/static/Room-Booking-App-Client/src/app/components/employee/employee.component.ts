import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Reservation } from 'src/app/models/reservation.model';
import { CheckIn } from 'src/app/models/checkin.model';
import { Room } from 'src/app/models/room.model';

import { ApiService } from '../../services/api.service';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private reservations: Reservation[];
  private selectedReservation: Reservation;

  private checkIn: CheckIn;

  private hotelChains: string[];
  private hotelChain: string;
  private hotelId: number;
  private startDate: string;
  private endDate: string;
  private rating: number;
  private roomCapacity: number;
  private area: number;
  private price: number;

  private customer: Customer;

  private rooms: Room[];
  private selectedRoom: Room;

  constructor(
    private location: Location,
    private apiService: ApiService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.customer = new Customer();
    this.checkIn = new CheckIn();
    this.reservations = [];
    this.rooms = [];
    this.getReservations();
    this.getHotelChainNames();
  }

  public onBack(): void {
    this.location.back();
  }


  public onSearch(): void {
    if (!this.checkSearchFormValid()) {
      return;
    }
    this.apiService.getRoomsByHotelIdSearch(this.getSearchParams())
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
    searchParams.hotel_id = this.hotelId;
    searchParams.start = this.startDate + ':00';
    searchParams.end = this.endDate + ':00';
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
    } else if (!this.hotelId) {
      window.alert('Hotel ID missing');
      return false;
    }

    return true;
  }


  public onCheckIn(modal): void {
    if (!this.checkPaymentForm()) {
      return;
    }

    this.setCheckInInfo();
    this.apiService.createCheckIn(this.getCheckInParams())
      .subscribe(checkInJson => {
        this.checkIn = new CheckIn();
        this.selectedReservation.reservationType = true;
      },
      (error) => {
        console.log(error);
      });

    modal.close('');
  }

  private setCheckInInfo(): void {
    this.checkIn.hotelId = this.selectedReservation.hotelId;
    this.checkIn.roomNumber = this.selectedReservation.roomNumber;
    this.checkIn.startDate = this.selectedReservation.startDate;
    this.checkIn.endDate = this.selectedReservation.endDate;
  }

  private getCheckInParams(): {} {
    const checkInParams: any = {};
    checkInParams.hotel_id = this.checkIn.hotelId;
    checkInParams.room_number = this.checkIn.roomNumber;
    checkInParams.start_date = this.checkIn.startDate;
    checkInParams.end_date = this.checkIn.endDate;
    checkInParams.employee_sin = this.checkIn.employeeSin;
    checkInParams.payment = this.checkIn.payment;
    return checkInParams;
  }

  private checkPaymentForm(): boolean {
    if (!this.checkIn.employeeSin) {
      window.alert('Employee sin missing');
      return false;
    }
    if (!this.checkIn.payment) {
      window.alert('Payment missing');
      return false;
    }
    return true;
  }

  private getReservations(): void {
    this.apiService.getReservations()
      .subscribe(reservationsJson => {
        for (const reservationJson of reservationsJson) {
          this.reservations.push(this.apiService.parseToReservation(reservationJson));
        }
      },
      (error) => {
        console.log(error);
      });
  }

  public openCheckIn(checkin: NgbModal, reservation: Reservation): void {
    this.selectedReservation = reservation;
    this.modalService.open(checkin, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  public openRenting(renting: NgbModal, room: Room): void {
    this.selectedRoom = room;
    this.modalService.open(renting, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  public onCreateRenting(modal): void {
    if (!this.checkRentFormValid()) {
      return;
    }
    this.apiService.createReservation(this.getRentParams())
      .subscribe(reservation => {
        const newRooms = [];
        for (const room of this.rooms) {
          if (room.hotel.hotelId != this.selectedRoom.hotel.hotelId && room.roomNumber != this.selectedRoom.roomNumber) {
            newRooms.push(room);
          }
        }
        this.rooms = newRooms;
      },
      (error) => {
        window.alert('Error in booking of renting');
        console.log(error);
      }
    );

    modal.close('Save click');
  }

  private getRentParams() {
    const bookParams: any = {};
    bookParams.hotel_id = this.selectedRoom.hotel.hotelId;
    bookParams.room_number = this.selectedRoom.roomNumber;
    bookParams.start = this.startDate + ':00';
    bookParams.end = this.endDate + ':00';
    return bookParams;
  }

  private checkRentFormValid(): boolean {
    if (!this.customer.sin) {
      window.alert('Sin is missing');
      return false;
    } else if (!this.customer.givenName) {
      window.alert('Given name is missing');
      return false;
    } else if (!this.customer.familyName) {
      window.alert('Family name is missing');
      return false;
    } else if (!this.customer.streetName) {
      window.alert('Street name is missing');
      return false;
    } else if (!this.customer.streetNumber) {
      window.alert('Street number is missing');
      return false;
    } else if (!this.customer.city) {
      window.alert('City is missing');
      return false;
    } else if (!this.customer.state) {
      window.alert('State is missing');
      return false;
    } else if (!this.customer.country) {
      window.alert('Country is missing');
      return false;
    } else if (!this.checkIn.payment) {
      window.alert('Payment is missing');
      return false;
    } else if (!this.checkIn.employeeSin) {
      window.alert('Employee SIN is missing');
      return false;
    }
    return true;
  }

}
