import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { getRouterState } from 'ss-ngrx-router-store';
import { Router } from '@angular/router';

@Component({
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  constructor(private store: Store<any>, private router: Router) {}

  routerState$: Observable<any>;
  for: string;
  ngOnInit(): void {
    this.routerState$ = this.store.select<any>(getRouterState);
  }

  navigate(value: string): void {
    switch (value) {
      case 'params':
        this.router.navigate(['folders', 'inbox', 'mails', '524613875'], {
          preserveFragment: true,
          preserveQueryParams: true
        });
        break;
      case 'matrixParams':
        this.router.navigate(
          ['folders', 'inbox', 'mails', '524613875', { fullView: true }],
          {
            preserveFragment: true,
            preserveQueryParams: true
          }
        );
        break;
      case 'queryParams':
        this.router.navigate([], {
          queryParams: {
            search: 'ss-ngrx-store-router',
            type: 'angular-library'
          },
          preserveFragment: true
        });
        break;
      case 'fragment':
        this.router.navigate([], {
          fragment: 'popup',
          preserveQueryParams: true
        });
        break;
      case 'data':
        this.router.navigate(['route-with-static-data'], {
          preserveFragment: true,
          preserveQueryParams: true
        });
        break;

      default:
        break;
    }
  }
}
