import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  routerReducer,
  StoreRouterConfig,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { ROUTER_FEATURE_KEY } from './ss-ngrx-router-store.config';
import { SSRouterSerializer } from './ss-ngrx-router-store.serializer';

import { SsNgrxRouterStoreStateComponent } from './ss-ngrx-router-store-state.component';

const routerConfig: StoreRouterConfig = {
  stateKey: ROUTER_FEATURE_KEY,
  serializer: SSRouterSerializer
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(ROUTER_FEATURE_KEY, routerReducer),
    StoreRouterConnectingModule.forRoot(routerConfig)
  ],
  declarations: [SsNgrxRouterStoreStateComponent],
  exports: [SsNgrxRouterStoreStateComponent]
})
export class SSNgRxRouterStoreModule {}
