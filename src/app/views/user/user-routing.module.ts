import { SafeComponent } from './../../shared/containers/safe/safe.component';
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
  },
  {
    path: 'safes/:id',
    component: SafeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
