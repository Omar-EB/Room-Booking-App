import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Reservation } from '../../models/reservation.model';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private reservations: Reservation[];
  private selectedReservation: Reservation;

  constructor(
    private location: Location,
    private apiService: ApiService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.reservations = [];
    this.getReservations();
  }

  public onBack(): void {
    this.location.back();
  }

  private getReservations(): void {
    this.apiService.getReservations()
      .subscribe(reservationsJson => {
        console.log(reservationsJson);
        for (const reservationJson of reservationsJson) {
          this.reservations.push(this.apiService.parseToReservation(reservationJson));
        }
      },
      (error) => {
        console.log(error);
      });
  }

  public open(checkin: NgbModal, reservation: Reservation): void {
    this.selectedReservation = reservation;
    this.modalService.open(checkin, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

}
