import { Component, OnInit } from '@angular/core';
import {Unit} from '../../unit';
import {UnitService} from '../../shared_service/unit.service'

@Component({
  selector: 'app-listunit',
  templateUrl: './listunit.component.html',
  styleUrls: ['./listunit.component.css']
})
export class ListunitComponent implements OnInit {

  private units: Unit[];
  constructor(private _unitService:UnitService) { }

  ngOnInit() {
    this._unitService.getUnits().subscribe((units) => { console.log(units); this.units=units;} , (error) => {console.log(error)});
  }

}
