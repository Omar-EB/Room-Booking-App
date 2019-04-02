import { Component, OnInit } from '@angular/core';
import { Room } from '../../models/room.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private startDate: Date;
  private endDate: Date;
  private rating: number = 1;
  private roomCapacity: number;
  private area: number;
  private price: number;
  private rooms: Room[] = [];

  private hotelChain: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onSearch() {
    this.apiService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
    },
    (error) => {
      console.log(error);
    });
  }

}
