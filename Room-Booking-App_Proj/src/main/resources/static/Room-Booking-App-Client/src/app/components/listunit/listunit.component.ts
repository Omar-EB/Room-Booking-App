import { Component, OnInit } from '@angular/core';
import { Unit } from '../../unit';
import { UnitService } from '../../shared_service/unit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listunit',
  templateUrl: './listunit.component.html',
  styleUrls: ['./listunit.component.css']
})
export class ListunitComponent implements OnInit {

  private units: Unit[];
  constructor(private _unitService:UnitService, private _router:Router) { }

  ngOnInit() {
    this._unitService.getUnits().subscribe((units) => {
         console.log(units); 
         this.units=units;
        } , 
        (error) => {
            console.log(error);
        });
  }

  deleteUnit(unit:Unit){
    this._unitService.deletetUnit(unit.id).subscribe((data) => {
        this.units.splice(this.units.indexOf(unit),1);
    },
    (error) => {
        console.log(error);
    });
  }

  updateUnit(unit:Unit){
      this._unitService.setter(unit);
      this._router.navigate(['/op']);
  }

  addUnit(){
      let unit = new Unit();
      this._unitService.setter(unit);
      this._router.navigate(['/op']);
  }

}