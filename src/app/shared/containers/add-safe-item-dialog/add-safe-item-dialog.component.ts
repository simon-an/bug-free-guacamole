import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SafeItem } from 'src/app/core/model';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'cool-add-safe-item-dialog',
  templateUrl: './add-safe-item-dialog.component.html',
  styleUrls: ['./add-safe-item-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSafeItemDialogComponent implements OnInit {
  constructor(private dialog: MatDialogRef<AddSafeItemDialogComponent>) {}

  ngOnInit() {}

  onResult(safeItem: SafeItem) {
    this.dialog.close(safeItem);
  }
}
