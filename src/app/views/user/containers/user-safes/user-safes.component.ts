import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SafeService } from 'src/app/core/services';
import { Safe } from 'src/app/core/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'cool-user-safes',
  templateUrl: './user-safes.component.html',
  styleUrls: ['./user-safes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSafesComponent implements OnInit {
  constructor(private safeService: SafeService) {}

  safes$: Observable<Safe[]>;

  ngOnInit() {
    this.safes$ = this.safeService.getSafes();
  }
}
