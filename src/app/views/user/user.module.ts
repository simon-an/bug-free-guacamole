import { MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { UserComponent } from './user/user.component';
import { UserSafesComponent } from './containers/user-safes/user-safes.component';

@NgModule({
  declarations: [UserComponent, UserSafesComponent],
  imports: [SharedModule, MatListModule, UserRoutingModule]
})
export class UserModule {}
