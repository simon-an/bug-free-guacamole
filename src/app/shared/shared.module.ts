import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWithSidenavComponent } from './components/header-with-sidenav/header-with-sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import { SafeListComponent } from './components/safe-list/safe-list.component';
import { SafeComponent } from './containers/safe/safe.component';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';

@NgModule({
  declarations: [HeaderWithSidenavComponent, SafeListComponent, SafeComponent, ItemListComponent],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule
  ],
  exports: [CommonModule, HeaderWithSidenavComponent, SafeListComponent, SafeComponent, ItemListComponent]
})
export class SharedModule {}
