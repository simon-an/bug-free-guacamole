import { NgModule } from '@angular/core';

import { SharedModule } from './../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { MatListModule } from '@angular/material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    MatListModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
