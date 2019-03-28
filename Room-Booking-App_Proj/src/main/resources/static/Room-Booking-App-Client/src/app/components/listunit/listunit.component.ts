import { Component, OnInit } from '@angular/core';
import { Unit } from '../../unit';
import { UnitService } from '../../shared_service/unit.service';
import { Router } from '@angular/router';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listunit',
  templateUrl: './listunit.component.html',
  styleUrls: ['./listunit.component.css']
})
export class ListunitComponent implements OnInit {

  private units: Unit[];
  private description:string;
  private id:number=-1;
  constructor(private _unitService:UnitService, private _router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    //this.route.paramMap.subscribe( (paramMap) =>{this.description = paramMap.get('description');});
    this.description = this.route.snapshot.queryParams["description"];
    var test = this.route.snapshot.paramMap.get('id');
    if(test!=null){
        this.id = Number.parseInt(test);
    } else {
        //
    }
    console.log(this.description);
    console.log(this.id);
    if(this.id==-1){
        if (this.description==undefined){
            this._unitService.getUnits().subscribe((units) => {
            console.log(units); 
            this.units=units;
            } , 
            (error) => {
                console.log(error);
            });
            console.log('description undefined');
        } else {
            this._unitService.getUnitsString(this.description).subscribe((units) => {
            console.log(units); 
            this.units=units;
            } , 
            (error) => {
                console.log(error);
            });
            console.log('description defined');
        }
    } else {
            this._unitService.getUnit(this.id).subscribe((units) => {
            console.log(units); 
            this.units=units;
            } , 
            (error) => {
                console.log(error);
            });
            console.log('id defined');
    }
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

  //this is how to navigate to another page
  /*
  goProducts() {
      this._router.navigate(['/products'], { queryParams: { order: 'popular' } });
  } */


}