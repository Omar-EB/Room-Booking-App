import { Component, OnInit } from '@angular/core';
import { Unit } from '../../unit';
import { Router } from '@angular/router';
import { UnitService } from '../../shared_service/unit.service';
@Component({
  selector: 'app-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.css']
})
export class UnitFormComponent implements OnInit {

  private unit:Unit;
  
  constructor(private _unitService:UnitService, private _router:Router) { }

  ngOnInit() {
      this.unit=this._unitService.getter();
  }

  processForm(){
      if(this.unit.id==undefined){
        this._unitService.createUnit(this.unit).subscribe( (unit) => {
            console.log(unit);
            console.log('create');
            this._router.navigate(['/']);
        }, (error) => {
            console.log(error);
        });
      } else {
        this._unitService.updateUnit(this.unit).subscribe( (unit) => {
            console.log(unit);
            console.log('update');
            this._router.navigate(['/']);
        }, (error) => {
            console.log(error);
        });
      }
  }

}
