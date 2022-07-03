import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CarComponent } from './componets/car/car.component';
import { BrandComponent } from './componets/brand/brand.component';
import { ColorComponent } from './componets/color/color.component';
import { RentalComponent } from './componets/rental/rental.component';
import { NaviComponent } from './componets/navi/navi.component';
import { CarDetailComponent } from './componets/car-detail/car-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    NaviComponent,
    CarDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
