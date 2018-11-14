import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserSafesComponent } from './containers/user-safes/user-safes.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'safes',
    component: UserSafesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
