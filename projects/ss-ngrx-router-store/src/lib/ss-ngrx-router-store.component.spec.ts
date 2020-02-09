import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsNgrxRouterStoreComponent } from './ss-ngrx-router-store.component';

describe('SsNgrxRouterStoreComponent', () => {
  let component: SsNgrxRouterStoreComponent;
  let fixture: ComponentFixture<SsNgrxRouterStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsNgrxRouterStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsNgrxRouterStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
