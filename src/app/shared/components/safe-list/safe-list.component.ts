import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Safe } from 'src/app/core/model';

@Component({
  selector: 'cool-safe-list',
  templateUrl: './safe-list.component.html',
  styleUrls: ['./safe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafeListComponent implements OnInit {

  @Input() safes: Safe[];

  constructor() { }

  ngOnInit() {
  }

}
