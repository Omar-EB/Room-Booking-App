import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  private customer: Customer;
  private employee: Employee;
  private hotel: Hotel;
  private room: Room;

  constructor(
    private location: Location,
    private apiService: ApiService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.customer = new Customer();
    this.employee = new Employee();
    this.hotel = new Hotel();
    this.room = new Room();
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

//=========================================================================================
  public openCreateCustomer(createCustomer: NgbModal): void {
    this.customer = new Customer();
    this.modalService.open(createCustomer, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  public openCreateEmployee(createEmployee: NgbModal): void {
    this.employee = new Employee();
    this.modalService.open(createEmployee, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  public openCreateHotel(createHotel: NgbModal): void {
    this.hotel = new Hotel();
    this.modalService.open(createHotel, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  public openCreateRoom(createRoom: NgbModal): void {
    this.room = new Room();
    this.modalService.open(createRoom, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

//=========================================================================================
  public openUpdateCustomer(updateCustomer: NgbModal, customer: Customer): void {
    this.customer = customer;
    this.modalService.open(updateCustomer, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  public openUpdateEmployee(updateEmployee: NgbModal, employee: Employee): void {
    this.employee = employee;
    this.modalService.open(updateEmployee, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  public openUpdateHotel(updateHotel: NgbModal, hotel: Hotel): void {
    this.hotel = hotel;
    this.modalService.open(updateHotel, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

  public openUpdateRoom(updateRoom: NgbModal, room: Room): void {
    this.room = room;;
    this.modalService.open(updateRoom, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

//=========================================================================================

  public onCreateCustomer(modal): void {
    if (!this.checkCustomerInfoValid()) {
      return;
    }

    this.apiService.createCustomer(this.getCustomerParams())
      .subscribe(result => {
        this.customers.push(this.customer);
      },
      (error) => {
        console.log(error);
      });

    modal.close('');
  }

  public onCreateEmployee(modal): void {
    if (!this.checkEmployeeInfoValid()) {
      return;
    }

    this.apiService.createEmployee(this.getEmployeeParams())
      .subscribe(result => {
        this.employees.push(this.employee);
      },
      (error) => {
        console.log(error);
      });

    modal.close('');
  }

  public onCreateHotel(modal): void {
    if (!this.checkHotelInfoValid()) {
      return;
    }

    this.apiService.createHotel(this.getHotelParams())
      .subscribe(result => {
        this.hotels.push(this.hotel);
      },
      (error) => {
        console.log(error);
      });

    modal.close('');
  }

  public onCreateRoom(modal): void {
    if (!this.checkRoomInfoValid()) {
      return;
    }

    this.apiService.createRoom(this.getRoomParams())
      .subscribe(result => {
        this.rooms.push(this.room);
      },
      (error) => {
        console.log(error);
      });

    modal.close('');
  }

//=========================================================================================

  public onUpdateCustomer(modal): void {
    if (!this.checkCustomerInfoValid()) {
      return;
    }

    this.apiService.updateCustomer(this.getCustomerParams())
      .subscribe(result => {
        const newCustomers = [];
        for (const customer of this.customers) {
          if (customer.sin != this.customer.sin) {
            newCustomers.push(customer);
          } else {
            newCustomers.push(this.customer);
          }
        } 
        this.customers = newCustomers;
      },
      (error) => {
        console.log(error)
      });

    modal.close('');
  }

  public onUpdateEmployee(modal): void {
    if (!this.checkEmployeeInfoValid()) {
      return;
    }

    this.apiService.updateEmployee(this.getEmployeeParams())
      .subscribe(result => {
        const newEmployees = [];
        for (const employee of this.employees) {
          if (employee.sin != this.employee.sin) {
            newEmployees.push(employee);
          } else {
            newEmployees.push(this.employee);
          }
        } 
        this.employees = newEmployees;
      },
      (error) => {
        console.log(error)
      });

    modal.close('');
  }

  public onUpdateHotel(modal): void {
    if (!this.checkHotelInfoValid()) {
      return;
    }

    this.apiService.updateHotel(this.getHotelParams())
      .subscribe(result => {
        const newHotels = [];
        for (const h of this.hotels) {
          if (h.hotelId != this.hotel.hotelId) {
            newHotels.push(h);
          } else {
            newHotels.push(this.hotel);
          }
        } 
        this.hotels = newHotels;
      },
      (error) => {
        console.log(error)
      });

    modal.close('');
  }

  public onUpdateRoom(modal): void {
    if (!this.checkRoomInfoValid()) {
      return;
    }

    this.apiService.updateRoom(this.getRoomParams())
    .subscribe(result => {
      const newRooms = [];
      for (const r of this.rooms) {
        if (r.hotel.hotelId != this.room.hotel.hotelId || r.roomNumber != this.room.roomNumber) {
          newRooms.push(r);
        } else {
          newRooms.push(this.room);
        }
      } 
      this.rooms = newRooms;
    },
    (error) => {
      console.log(error)
    });

    modal.close('');
  }

//=========================================================================================

  public onDeleteCustomer(customer: Customer): void {
    this.apiService.deleteCustomer(customer.sin)
      .subscribe(result => {
        const newCustomers = [];
        for (const cust of this.customers) {
          if (cust.sin != customer.sin) {
            newCustomers.push(cust);
          }
        }
        this.customers = newCustomers;
      },
      (error) => {
        console.log(error);
      });
  }

  public onDeleteEmployee(employee: Employee): void {
    this.apiService.deleteEmployee(employee.sin)
    .subscribe(result => {
      const newEmployees = [];
      for (const emp of this.employees) {
        if (emp.sin != employee.sin) {
          newEmployees.push(emp);
        }
      }
      this.employees = newEmployees;
    },
    (error) => {
      console.log(error);
    });
  }

  public onDeleteHotel(hotel: Hotel): void {
    this.apiService.deleteHotel(hotel.hotelId)
    .subscribe(result => {
      const newHotels = [];
      for (const h of this.hotels) {
        if (h.hotelId != hotel.hotelId) {
          newHotels.push(h);
        }
      }
      this.hotels = newHotels;
    },
    (error) => {
      console.log(error);
    });
  }

  public onDeleteRoom(room: Room): void {
    this.apiService.deleteRoom(room.hotel.hotelId, room.roomNumber)
    .subscribe(result => {
      const newRooms = [];
      for (const r of this.rooms) {
        if (r.hotel.hotelId != room.hotel.hotelId || r.roomNumber != room.roomNumber) {
          newRooms.push(r);
        }
      }
      this.rooms = newRooms;
    },
    (error) => {
      console.log(error);
    });
  }

//=========================================================================================


  private getCustomerParams() {
    const customerParams: any = {};
    customerParams.customer_sin = this.customer.sin;
    customerParams.given_name = this.customer.givenName;
    customerParams.family_name = this.customer.familyName;
    customerParams.street_name = this.customer.streetName;
    customerParams.street_number = +this.customer.streetNumber;
    customerParams.city = this.customer.city;
    customerParams.state = this.customer.state;
    customerParams.country = this.customer.country;
    return customerParams;
  }

  private getEmployeeParams() {
    const employeeParams: any = {};
    employeeParams.employee_sin = this.employee.sin;
    employeeParams.given_name = this.employee.givenName;
    employeeParams.family_name = this.employee.familyName;
    employeeParams.street_name = this.employee.streetName;
    employeeParams.street_number = +this.employee.streetNumber;
    employeeParams.city = this.employee.city;
    employeeParams.state = this.employee.state;
    employeeParams.country = this.employee.country;
    employeeParams.hotel_id = +this.employee.hotel.hotelId;
    return employeeParams;
  }

  private getHotelParams() {
    const hotelParams: any = {};
    hotelParams.hc_name = this.hotel.hotelChain.hcName;
    hotelParams.hotel_id = this.hotel.hotelId;
    hotelParams.street_name = this.hotel.streetName;
    hotelParams.street_number = +this.hotel.streetNumber;
    hotelParams.city = this.hotel.city;
    hotelParams.state = this.hotel.state;
    hotelParams.country = this.hotel.country;
    hotelParams.rating = +this.hotel.rating;
    hotelParams.phone_number = this.hotel.phoneNumber;
    hotelParams.number_of_rooms = this.hotel.numberOfRooms;
    return hotelParams;
  }

  private getRoomParams() {
    const roomParams: any = {};
    roomParams.hotel_id = +this.room.hotel.hotelId;
    roomParams.room_number = +this.room.roomNumber;
    roomParams.view_type = this.room.viewType;
    roomParams.capacity = +this.room.capacity;
    roomParams.price = +this.room.price;
    roomParams.extendable = !!+this.room.extendable;
    roomParams.area = +this.room.area;
    return roomParams;
  }

  private checkCustomerInfoValid(): boolean {
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
    }
    return true;
  }

  private checkEmployeeInfoValid(): boolean {
    if (!this.employee.sin) {
      window.alert('Sin is missing');
      return false;
    } else if (!this.employee.givenName) {
      window.alert('Given name is missing');
      return false;
    } else if (!this.employee.familyName) {
      window.alert('Family name is missing');
      return false;
    } else if (!this.employee.streetName) {
      window.alert('Street name is missing');
      return false;
    } else if (!this.employee.streetNumber) {
      window.alert('Street number is missing');
      return false;
    } else if (!this.employee.city) {
      window.alert('City is missing');
      return false;
    } else if (!this.employee.state) {
      window.alert('State is missing');
      return false;
    } else if (!this.employee.country) {
      window.alert('Country is missing');
      return false;
    } else if (!this.employee.hotel.hotelId) {
      window.alert('Hotel id is missing');
      return false;
    }
    return true;
  }

  
  private checkHotelInfoValid(): boolean {
    if (!this.hotel.hotelChain.hcName) {
      window.alert('Hotel Chain is missing');
      return false;
    } else if (!this.hotel.streetName) {
      window.alert('Street name is missing');
      return false;
    } else if (!this.hotel.streetNumber) {
      window.alert('Street number is missing');
      return false;
    } else if (!this.hotel.city) {
      window.alert('City is missing');
      return false;
    } else if (!this.hotel.state) {
      window.alert('State is missing');
      return false;
    } else if (!this.hotel.country) {
      window.alert('Country is missing');
      return false;
    } else if (!this.hotel.rating) {
      window.alert('Rating is missing');
      return false;
    } else if (!this.hotel.phoneNumber) {
      window.alert('Phone number is missing');
      return false;
    }
    return true;
  }

  private checkRoomInfoValid(): boolean {
    if (!this.room.hotel.hotelId) {
      window.alert('Hotel id is missing');
      return false;
    } else if (!this.room.roomNumber) {
      window.alert('Room number is missing');
      return false;
    } else if (!this.room.viewType) {
      window.alert('View type is missing');
      return false;
    } else if (!this.room.price) {
      window.alert('Price is missing');
      return false;
    } else if (!this.room.area) {
      window.alert('Area is missing');
      return false;
    }
    return true;
  }

}
