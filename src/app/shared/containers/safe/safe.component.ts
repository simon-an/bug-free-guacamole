import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SafeService } from 'src/app/core/services';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SafeItem } from 'src/app/core/model';

@Component({
  selector: 'cool-safe',
  templateUrl: './safe.component.html',
  styleUrls: ['./safe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafeComponent implements OnInit {
  item$: Observable<SafeItem[]>;
  constructor(private activatedRoute: ActivatedRoute, private safeService: SafeService) {}

  ngOnInit() {
    const id$ = this.activatedRoute.paramMap.pipe(map((paramMap: ParamMap) => paramMap.get('id')));
    this.item$ = id$.pipe(switchMap((id: string) => this.safeService.getItems(id)));
  }
}
