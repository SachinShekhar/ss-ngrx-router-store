import { Data, Params } from '@angular/router';
import { BaseRouterStoreState, RouterReducerState } from '@ngrx/router-store';

export interface SimpleSerializedRouterState extends BaseRouterStoreState {
  url: string;
  params: Params;
  queryParams: Params;
  fragment: string;
  data: Data;
}

export type SSRouterPartialState = RouterReducerState<
  SimpleSerializedRouterState
>;
