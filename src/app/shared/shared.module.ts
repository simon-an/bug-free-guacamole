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

@NgModule({
  declarations: [HeaderWithSidenavComponent, SafeListComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule
  ],
  exports: [CommonModule, HeaderWithSidenavComponent, SafeListComponent]
})
export class SharedModule {}
