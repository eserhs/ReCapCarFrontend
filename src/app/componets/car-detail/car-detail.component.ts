import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/Entity/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
CarDetails : CarDetail[]=[];

  constructor(private carDetailService : CarDetailService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }
  getCarDetails(){
    this.carDetailService.getCarDetail().subscribe((response)=>{
      this.CarDetails = response.data;
    })
  }

}
