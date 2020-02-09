import { TestBed } from '@angular/core/testing';

import { SsNgrxRouterStoreService } from './ss-ngrx-router-store.service';

describe('SsNgrxRouterStoreService', () => {
  let service: SsNgrxRouterStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsNgrxRouterStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
