import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getRouterState } from './ss-ngrx-router-store.selectors';
import { SSRouterPartialState } from './ss-ngrx-router-store.models';

@Component({
  selector: 'ss-ngrx-router-store-state',
  template: `
    <pre class="container">
      {{ routerState$ | async | json }}
    </pre
    >
  `,
  styles: [
    `
      .container {
        font-size: large;
      }
    `
  ]
})
export class SsNgrxRouterStoreStateComponent implements OnInit {
  constructor(private store: Store<any>) {}

  routerState$: Observable<SSRouterPartialState>;

  ngOnInit(): void {
    this.routerState$ = this.store.select<SSRouterPartialState>(getRouterState);
  }
}
