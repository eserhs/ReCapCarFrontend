import { R3SelectorScopeMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Entity/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 Cars:Car[]=[];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }
  getCars(){
    this.carService.getCars().subscribe((response)=>{
      this.Cars= response.data;
    })
  }

}
