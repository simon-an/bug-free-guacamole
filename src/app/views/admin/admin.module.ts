import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from './../../../app/shared/shared.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
