import { SafeItem } from './../../../core/model/safe-item';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddSafeItemDialogComponent } from '../../containers/add-safe-item-dialog/add-safe-item-dialog.component';
import { SafeService } from 'src/app/core/services';

@Component({
  selector: 'cool-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {
  @Input() items: SafeItem[];
  constructor(private dialogService: MatDialog, private safeService: SafeService) {}

  ngOnInit() {}

  onAddSafeItem(clickEvent) {
    const dialogRef: MatDialogRef<AddSafeItemDialogComponent> = this.dialogService.open(AddSafeItemDialogComponent);
    dialogRef.afterClosed().subscribe((safeItem: SafeItem) => {
      if (safeItem) {
        this.safeService.addItem(safeItem);
      }
    });
  }
}
