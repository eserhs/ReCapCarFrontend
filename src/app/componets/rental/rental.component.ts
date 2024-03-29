import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/Entity/rental';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {
 Rentals : Rental[]=[];
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentals();
  }
  getRentals(){
    this.rentalService.getRentals().subscribe((response)=>{
      this.Rentals=response.data;
    })
  }

}
