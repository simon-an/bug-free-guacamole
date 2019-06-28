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
  MatTooltipModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { SafeListComponent } from './components/safe-list/safe-list.component';
import { SafeComponent } from './containers/safe/safe.component';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AddSafeItemDialogComponent } from './containers/add-safe-item-dialog/add-safe-item-dialog.component';
import { SafeItemFormComponent } from './components/safe-item-form/safe-item-form.component';
import { FormsModule } from '@angular/forms';
import { LoginDialogComponent } from './containers/login-dialog/login-dialog.component';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  declarations: [
    HeaderWithSidenavComponent,
    SafeListComponent,
    SafeComponent,
    ItemListComponent,
    AddSafeItemDialogComponent,
    SafeItemFormComponent,
    LoginDialogComponent,
    LoginComponent
  ],
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
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  entryComponents: [AddSafeItemDialogComponent, LoginDialogComponent],
  exports: [
    CommonModule,
    HeaderWithSidenavComponent,
    SafeListComponent,
    SafeComponent,
    ItemListComponent,
    AddSafeItemDialogComponent,
    SafeItemFormComponent,
    LoginDialogComponent,
    LoginComponent
  ]
})
export class SharedModule {}
