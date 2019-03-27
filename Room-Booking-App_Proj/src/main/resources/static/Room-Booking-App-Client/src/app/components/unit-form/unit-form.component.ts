import { Component, OnInit } from '@angular/core';
import { Unit } from '../../unit';
@Component({
  selector: 'app-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.css']
})
export class UnitFormComponent implements OnInit {

  private unit:Unit;
  
  constructor() { }

  ngOnInit() {
  }

}
