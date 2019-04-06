import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ApiService } from '../../services/api.service';

import { Room } from 'src/app/models/room.model';
import { Customer } from 'src/app/models/customer.model';
import { Employee } from 'src/app/models/employee.model';
import { Hotel } from 'src/app/models/hotel.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  private customers: Customer[];
  private employees: Employee[];
  private hotels: Hotel[];
  private rooms: Room[];

  constructor(
    private location: Location,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getCustomers();
    this.getEmployees();
    this.getHotels();
    this.getRooms();
  }

  public onBack(): void {
    this.location.back();
  }

  private getCustomers(): void {
    this.apiService.getCustomers()
      .subscribe(customers => {
        this.customers = [];
        for (const customer of customers) {
          this.customers.push(this.apiService.parseToCustomer(customer));
        }
      },
      (error) => {
        console.log(error);
      });
  }

  private getEmployees(): void {
    this.apiService.getEmployees()
      .subscribe(employees => {
        this.employees = [];
        for (const employee of employees) {
          this.employees.push(this.apiService.parseToEmployee(employee));
        }
      },
      (error) => {
        console.log(error)
      });
  }

  private getHotels(): void {
    this.apiService.getHotels()
      .subscribe(hotels => {
        this.hotels = [];
        for (const hotel of hotels) {
          this.hotels.push(this.apiService.parseToHotel(hotel));
        }
      },
      (error) => {
        console.log(error);
      });
  }

  private getRooms(): void {
    this.apiService.getRooms()
      .subscribe(rooms => {
        this.rooms = [];
        for (const room of rooms) {
          this.rooms.push(this.apiService.parseToRoom(room));
        }
      },
      (error) => {
        console.log(error);
      });
  }

  public onUpdateCustomer(customer: Customer): void {
    console.log(customer);
  }

  public onDeleteCustomer(customer: Customer): void {
    console.log(customer);
  }

  public onUpdateEmployee(employee: Employee): void {
    console.log(employee);
  }

  public onDeleteEmployee(employee: Employee): void {
    console.log(employee);
  }

  public onUpdateHotel(hotel: Hotel): void {
    console.log(hotel);
  }

  public onDeleteHotel(hotel: Hotel): void {
    console.log(hotel);
  }

  public onUpdateRoom(room: Room): void {
    console.log(room);
  }

  public onDeleteRoom(room: Room): void {
    console.log(room);
  }


}
