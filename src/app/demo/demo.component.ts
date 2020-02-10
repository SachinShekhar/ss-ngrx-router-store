import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

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
