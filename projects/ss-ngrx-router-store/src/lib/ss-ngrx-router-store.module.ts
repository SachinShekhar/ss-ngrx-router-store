import { NgModule } from '@angular/core';
import {
  routerReducer,
  StoreRouterConfig,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { SSRouterSerializer } from './ss-ngrx-router-store.serializer';

export const ROUTER_FEATURE_KEY = 'router';

const routerConfig: StoreRouterConfig = {
  stateKey: ROUTER_FEATURE_KEY,
  serializer: SSRouterSerializer
};

@NgModule({
  imports: [
    StoreModule.forFeature(ROUTER_FEATURE_KEY, routerReducer),
    StoreRouterConnectingModule.forRoot(routerConfig)
  ]
})
export class SimpleSerializedNgRxRouterStoreModule {}
