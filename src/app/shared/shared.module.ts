import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWithSidenavComponent } from './components/header-with-sidenav/header-with-sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [HeaderWithSidenavComponent],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [CommonModule, HeaderWithSidenavComponent]
})
export class SharedModule {}
