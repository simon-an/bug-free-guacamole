import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { SafeItem, Safe } from 'src/app/core/model';

@Component({
  selector: 'cool-safe-item-form',
  templateUrl: './safe-item-form.component.html',
  styleUrls: ['./safe-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafeItemFormComponent implements OnInit {
  @Output() result: EventEmitter<SafeItem> = new EventEmitter();
  model: SafeItem = {} as SafeItem;
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.result.emit(this.model);
  }
}
